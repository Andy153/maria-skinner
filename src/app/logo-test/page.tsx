import Image from "next/image";

const logoExamples = [
  {
    title: "Versión para fondo oscuro",
    src: "/images/logo-dark.svg",
    background: "bg-brown",
    label: "logo-dark.svg",
    textColor: "text-cream",
    labelColor: "text-cream/70",
  },
  {
    title: "Versión para fondo claro",
    src: "/images/logo-light.svg",
    background: "bg-cream",
    label: "logo-light.svg",
    textColor: "text-brown",
    labelColor: "text-brown/70",
  },
  {
    title: "Logo base dorado",
    src: "/images/logo.svg",
    background: "bg-brown-dark",
    label: "logo.svg",
    textColor: "text-cream",
    labelColor: "text-cream/70",
  },
];

export default function LogoTestPage() {
  return (
    <div className="bg-sand-light px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">
            Identidad visual
          </p>
          <h1 className="mt-3 font-serif text-4xl text-brown md:text-5xl">
            Prueba de monograma MS
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {logoExamples.map((example) => (
            <section
              key={example.src}
              className={`${example.background} min-h-[320px] rounded-sm border border-border-warm p-8 shadow-sm`}
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <p className={`text-xs uppercase tracking-[0.25em] ${example.labelColor}`}>
                    {example.label}
                  </p>
                  <h2
                    className={`mt-2 font-serif text-2xl ${example.textColor}`}
                  >
                    {example.title}
                  </h2>
                </div>

                <div className="relative mx-auto aspect-[300/160] w-full max-w-[300px]">
                  <Image
                    src={example.src}
                    alt={example.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 80vw, 300px"
                    priority
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
