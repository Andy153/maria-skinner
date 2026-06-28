export type OrderInquiry = {
  nombre: string;
  email: string;
  telefono: string;
  pedido: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultiline(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export function buildOrderEmailSubject({ nombre }: OrderInquiry): string {
  return `Nuevo pedido — ${nombre} · María Skinner`;
}

export function buildOrderEmailHtml(data: OrderInquiry): string {
  const nombre = escapeHtml(data.nombre);
  const email = escapeHtml(data.email);
  const telefono = data.telefono ? escapeHtml(data.telefono) : "No indicado";
  const pedido = formatMultiline(data.pedido);
  const receivedAt = new Intl.DateTimeFormat("es-AR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date());

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuevo pedido · María Skinner</title>
  </head>
  <body style="margin:0;padding:0;background-color:#F5EFE4;font-family:Georgia,'Times New Roman',serif;color:#2C2319;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F5EFE4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#FAF7F2;border:1px solid #E2D5C3;border-radius:4px;overflow:hidden;">
            <tr>
              <td style="background-color:#2C2319;padding:28px 32px;text-align:center;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#C9A96E;font-family:Arial,Helvetica,sans-serif;">
                  Pastelería artesanal
                </p>
                <h1 style="margin:0;font-size:28px;font-weight:400;color:#FAF7F2;letter-spacing:0.02em;">
                  María Skinner
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#C9A96E;font-family:Arial,Helvetica,sans-serif;">
                  Nuevo pedido
                </p>
                <h2 style="margin:0 0 24px;font-size:24px;font-weight:400;color:#2C2319;line-height:1.3;">
                  Consulta recibida desde la web
                </h2>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#FFFDF9;border:1px solid #E2D5C3;border-radius:4px;">
                  <tr>
                    <td style="padding:20px 24px;">
                      <p style="margin:0 0 16px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#7A6A55;font-family:Arial,Helvetica,sans-serif;">
                        Datos del cliente
                      </p>
                      <p style="margin:0 0 10px;font-size:15px;line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
                        <strong style="color:#2C2319;">Nombre:</strong> ${nombre}
                      </p>
                      <p style="margin:0 0 10px;font-size:15px;line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
                        <strong style="color:#2C2319;">Email:</strong>
                        <a href="mailto:${email}" style="color:#3D2E1A;text-decoration:none;">${email}</a>
                      </p>
                      <p style="margin:0;font-size:15px;line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
                        <strong style="color:#2C2319;">Teléfono:</strong> ${telefono}
                      </p>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:20px;background-color:#FFFDF9;border:1px solid #E2D5C3;border-left:4px solid #C9A96E;border-radius:4px;">
                  <tr>
                    <td style="padding:20px 24px;">
                      <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#7A6A55;font-family:Arial,Helvetica,sans-serif;">
                        Detalle del pedido
                      </p>
                      <p style="margin:0;font-size:16px;line-height:1.7;color:#2C2319;font-family:Arial,Helvetica,sans-serif;">
                        ${pedido}
                      </p>
                    </td>
                  </tr>
                </table>

                <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#7A6A55;font-family:Arial,Helvetica,sans-serif;">
                  Podés responder directamente a este correo para contactar a ${nombre}.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid #E2D5C3;background-color:#FFFDF9;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#A08C70;text-align:center;font-family:Arial,Helvetica,sans-serif;">
                  Recibido el ${escapeHtml(receivedAt)}<br />
                  Formulario de pedidos · mariaskinner.com
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildOrderEmailText(data: OrderInquiry): string {
  return [
    "Nuevo pedido · María Skinner",
    "",
    `Nombre: ${data.nombre}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.telefono || "No indicado"}`,
    "",
    "Detalle del pedido:",
    data.pedido,
  ].join("\n");
}
