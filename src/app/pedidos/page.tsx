import OrderForm from "@/components/OrderForm";
import type { Metadata } from "next";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Pedidos — María Skinner",
  description: "Contactanos para hacer tu pedido. Retiro en Arenales y Suipacha, CABA.",
};

const { phoneDisplay, phoneDisplayIntl, phoneHref, whatsappHref, instagramHref, instagramHandle, address, area, hours, orderNote } =
  businessInfo;

export default function PedidosPage() {
  return (
    <div className="bg-cream">
      <section
        className="border-b border-gold/20 bg-brown px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(201, 169, 110, 0.05) 0px,
            rgba(201, 169, 110, 0.05) 1px,
            transparent 1px,
            transparent 14px
          )`,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">Contacto</p>
          <h1 className="mt-2 font-serif text-3xl text-white sm:mt-3 sm:text-4xl md:text-5xl">
            Hacer un pedido
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand/90 sm:mt-4 sm:text-base md:text-lg">
            Contanos qué te gustaría pedir y te respondemos a la brevedad.
            Retiro en {address}. {orderNote}.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <h2 className="font-serif text-2xl text-brown sm:text-3xl">Escribinos</h2>
            <OrderForm />
          </div>

          <div className="min-w-0 bg-sand px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <h2 className="font-serif text-2xl text-brown sm:text-3xl">Información</h2>
            <div className="mt-6 space-y-5 text-brown sm:mt-8 sm:space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">Retiro</p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {address}
                  <br />
                  {area}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">Horarios</p>
                <p className="mt-2 text-sm text-muted sm:text-base">{hours}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">Teléfono</p>
                <a
                  href={phoneHref}
                  className="mt-2 block text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  {phoneDisplayIntl}
                </a>
                <p className="mt-1 text-sm text-muted-light">{phoneDisplay}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">WhatsApp</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center border border-brown px-6 py-3 text-sm uppercase tracking-widest text-brown transition-colors hover:border-gold hover:text-gold sm:w-auto sm:px-8"
                >
                  Escribir por WhatsApp
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">Instagram</p>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  {instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
