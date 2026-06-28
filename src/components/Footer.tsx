import Image from "next/image";
import { businessInfo } from "@/data/business";

const { phoneDisplayIntl, phoneHref, instagramHref, instagramHandle, address, area, hours } =
  businessInfo;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-brown-dark text-sand">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:px-8">
        <Image
          src="/images/logo-dark.svg"
          alt="María Skinner"
          width={248}
          height={138}
          className="h-20 w-auto sm:h-24 lg:h-28"
        />

        <address className="flex flex-col gap-3 font-sans text-sm not-italic leading-relaxed text-sand/80 sm:items-end">
          <span className="sm:text-right">
            {address}
            <br />
            {area}
            <br />
            {hours}
          </span>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
            {phoneDisplayIntl}
          </a>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-4 w-4 shrink-0 text-gold" />
            {instagramHandle}
          </a>
        </address>
      </div>
    </footer>
  );
}
