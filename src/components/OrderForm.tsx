"use client";

import { sendOrderInquiry } from "@/app/actions/send-order";
import { initialOrderFormState } from "@/lib/order-form-state";
import { useActionState } from "react";

const inputClassName =
  "w-full border border-border-warm bg-sand-light px-4 py-3 text-base text-brown outline-none transition-colors focus:border-gold";

export default function OrderForm() {
  const [state, formAction, pending] = useActionState(
    sendOrderInquiry,
    initialOrderFormState,
  );

  if (state.success) {
    return (
      <div className="mt-6 rounded-sm border border-gold/40 bg-sand px-5 py-8 sm:mt-8 sm:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">
          Consulta enviada
        </p>
        <h3 className="mt-2 font-serif text-2xl text-brown">
          ¡Gracias por escribirnos!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Recibimos tu pedido y te vamos a responder a la brevedad al email que
          nos dejaste.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
      <div>
        <label
          htmlFor="nombre"
          className="mb-2 block text-xs uppercase tracking-widest text-muted sm:text-sm"
        >
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs uppercase tracking-widest text-muted sm:text-sm"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="telefono"
          className="mb-2 block text-xs uppercase tracking-widest text-muted sm:text-sm"
        >
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="pedido"
          className="mb-2 block text-xs uppercase tracking-widest text-muted sm:text-sm"
        >
          Tu pedido
        </label>
        <textarea
          id="pedido"
          name="pedido"
          rows={5}
          required
          disabled={pending}
          placeholder="Contanos qué te gustaría pedir, cantidades y fecha de retiro..."
          className={`${inputClassName} min-h-[140px] resize-y`}
        />
      </div>

      {state.error && (
        <p
          role="alert"
          className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center bg-brown px-8 py-4 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-brown-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {pending ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
