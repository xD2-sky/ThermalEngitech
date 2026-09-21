import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE, NAV_LINKS } from "./data";

const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="nav-header"
            className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b transition-shadow duration-300 ${
                scrolled ? "border-slate-200 shadow-[0_8px_30px_rgba(10,17,40,0.06)]" : "border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
                <a href="#top" onClick={(e) => scrollTo(e, "#top")} data-testid="nav-logo" className="flex items-center gap-3 shrink-0">
                    <img src="/images/brand/logo-mark.png" alt="Thermal Engitech logo" className="h-9 w-9 object-contain" />
                    <span className="font-display font-700 leading-none">
                        <span className="block font-bold text-ink tracking-tight text-lg">Thermal Engitech</span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 mt-1">Est. 2012 · Gujarat</span>
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-8" data-testid="nav-links">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => scrollTo(e, l.href)}
                            data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                            className="relative text-sm font-medium text-slate-600 hover:text-ink transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-signal after:transition-[width] after:duration-300 hover:after:w-full"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-5">
                    <a href={`tel:${SITE.phoneTel}`} data-testid="nav-phone-link" className="flex items-center gap-2 font-mono text-xs tracking-wider text-slate-600 hover:text-brand transition-colors">
                        <Phone className="h-3.5 w-3.5" />
                        {SITE.phoneDisplay}
                    </a>
                    <a
                        href={SITE.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="nav-quote-button"
                        className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(29,78,216,0.35)]"
                    >
                        Request a quote
                    </a>
                </div>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 text-ink"
                    aria-label="Toggle menu"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden border-t border-slate-200 bg-white" data-testid="nav-mobile-menu">
                    <div className="px-6 py-6 flex flex-col gap-5">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={(e) => {
                                    scrollTo(e, l.href);
                                    setOpen(false);
                                }}
                                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                                className="font-display text-xl font-semibold text-ink"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={SITE.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="nav-mobile-quote-button"
                            className="mt-2 inline-flex justify-center bg-brand text-white font-semibold px-5 py-3 rounded-full"
                        >
                            Request a quote
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
