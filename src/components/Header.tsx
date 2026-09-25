"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CallButton } from "./CallButton";
import { Logo } from "./Logo";
import { services } from "@/lib/content";

const linkClass =
  "text-[15px] font-semibold text-foreground transition-colors duration-200 hover:text-secondary";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const openedByHover = useRef(false);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        servicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen, servicesOpen]);

  const onServices = pathname.startsWith("/services");
  const onContact = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="MedLink Transport home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            <li>
              <div
                ref={servicesRef}
                className="relative"
                onPointerEnter={(event) => {
                  if (event.pointerType !== "mouse") return;
                  openedByHover.current = true;
                  setServicesOpen(true);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== "mouse") return;
                  openedByHover.current = false;
                  setServicesOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => {
                    // A click right after a hover-open keeps the menu open.
                    const keepOpen = openedByHover.current;
                    openedByHover.current = false;
                    setServicesOpen((open) => (keepOpen ? true : !open));
                  }}
                  className={`inline-flex min-h-[44px] items-center gap-1.5 ${linkClass} ${
                    onServices ? "!text-secondary" : ""
                  }`}
                >
                  Services
                  <ChevronIcon open={servicesOpen} />
                </button>

                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-10 w-80 -translate-x-1/2 pt-2">
                    <ul
                      id="services-menu"
                      className="rounded-xl border border-border bg-white p-2 shadow-lg"
                    >
                      {services.map(({ id, title }) => (
                        <li key={id}>
                          <Link
                            href={`/services/${id}`}
                            className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-foreground hover:bg-surface"
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>

            <li>
              <Link
                href="/contact"
                aria-current={onContact ? "page" : undefined}
                className={`${linkClass} ${onContact ? "!text-secondary" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CallButton
            className="!px-4 !py-2.5 !text-base whitespace-nowrap"
            label="Call Now"
          />

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-3 focus-visible:outline-offset-2 lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-border bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            <li>
              <p className="min-h-[44px] py-3 text-[16px] font-semibold text-foreground">
                Services
              </p>
              <ul className="mb-2 ml-3 border-l-2 border-border pl-4">
                {services.map(({ id, title }) => (
                  <li key={id}>
                    <Link
                      href={`/services/${id}`}
                      className="block min-h-[44px] py-2.5 text-[15px] font-medium text-foreground hover:text-primary"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                aria-current={onContact ? "page" : undefined}
                className="block min-h-[44px] py-3 text-[16px] font-semibold text-foreground hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
