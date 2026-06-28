"use server";

import {
  buildOrderEmailHtml,
  buildOrderEmailSubject,
  buildOrderEmailText,
  type OrderInquiry,
} from "@/lib/email/order-email";
import { Resend } from "resend";

const ORDER_EMAIL_TO = process.env.ORDER_EMAIL_TO ?? "mariaskinner@yahoo.com";

export type OrderFormState = {
  success: boolean;
  error: string | null;
};

const initialOrderFormState: OrderFormState = {
  success: false,
  error: null,
};

function getField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validateOrder(data: OrderInquiry): string | null {
  if (!data.nombre || data.nombre.length < 2) {
    return "Ingresá un nombre válido.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Ingresá un email válido.";
  }

  if (!data.pedido || data.pedido.length < 10) {
    return "Contanos un poco más sobre tu pedido.";
  }

  return null;
}

export async function sendOrderInquiry(
  _prevState: OrderFormState,
  formData: FormData,
): Promise<OrderFormState> {
  const inquiry: OrderInquiry = {
    nombre: getField(formData, "nombre"),
    email: getField(formData, "email"),
    telefono: getField(formData, "telefono"),
    pedido: getField(formData, "pedido"),
  };

  const validationError = validateOrder(inquiry);
  if (validationError) {
    return { success: false, error: validationError };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ORDER_EMAIL_FROM;

  if (!apiKey || !from) {
    console.error("Missing RESEND_API_KEY or ORDER_EMAIL_FROM");
    return {
      success: false,
      error:
        "El formulario todavía no está configurado. Escribinos por WhatsApp mientras tanto.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: ORDER_EMAIL_TO,
      replyTo: inquiry.email,
      subject: buildOrderEmailSubject(inquiry),
      html: buildOrderEmailHtml(inquiry),
      text: buildOrderEmailText(inquiry),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "No pudimos enviar tu consulta. Intentá de nuevo en unos minutos.",
      };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Order email error:", error);
    return {
      success: false,
      error: "Ocurrió un error inesperado. Intentá de nuevo más tarde.",
    };
  }
}

export { initialOrderFormState };
