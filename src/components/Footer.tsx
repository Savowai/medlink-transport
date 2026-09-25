import { business } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-white/80 sm:flex-row sm:px-6 sm:text-left">
        <p>
          © {new Date().getFullYear()} {business.name}. Contact details and
          branding shown are placeholders for this preview.
        </p>
        <a href={business.phoneHref} className="font-semibold text-white hover:underline">
          {business.phoneDisplay}
        </a>
      </div>
    </footer>
  );
}
