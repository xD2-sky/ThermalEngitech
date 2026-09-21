import { MapPin, Phone, Mail } from "lucide-react";
import { SITE, NAV_LINKS } from "./data";

const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
    return (
        <footer data-testid="footer-section" className="bg-ink text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-3">
                        <img src="/images/brand/logo-mark.png" alt="Thermal Engitech logo" className="h-10 w-10 object-contain" />
                        <div>
                            <p className="font-display font-bold text-white text-lg tracking-tight">{SITE.legalName}</p>
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 mt-0.5">
                                Industrial heat systems · Est. 2012
                            </p>
                        </div>
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-sm">
                        Steam boilers, thermic fluid heaters, heat exchangers and process-heat systems —
                        engineered and manufactured in Dhamatwan, Gujarat. IBR, ASME and ISO 9001:2015 compliant.
                    </p>
                </div>

                <div className="md:col-span-3">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 mb-6">Navigate</p>
                    <ul className="space-y-3.5">
                        {NAV_LINKS.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={(e) => scrollTo(e, l.href)}
                                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                                    className="text-sm hover:text-white transition-colors duration-300"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 mb-6">Contact</p>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <MapPin className="h-4 w-4 text-signal shrink-0 mt-0.5" />
                            <span data-testid="footer-address">{SITE.address}</span>
                        </li>
                        <li>
                            <a href={`tel:${SITE.phoneTel}`} data-testid="footer-phone" className="flex gap-3 hover:text-white transition-colors">
                                <Phone className="h-4 w-4 text-signal shrink-0 mt-0.5" />
                                {SITE.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${SITE.purchaseTel}`} data-testid="footer-purchase-phone" className="flex gap-3 hover:text-white transition-colors">
                                <Phone className="h-4 w-4 text-signal shrink-0 mt-0.5" />
                                {SITE.purchaseDisplay} · {SITE.purchaseManager} (Purchase)
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${SITE.email}`} data-testid="footer-email" className="flex gap-3 hover:text-white transition-colors">
                                <Mail className="h-4 w-4 text-signal shrink-0 mt-0.5" />
                                {SITE.email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3">
                    <p className="font-mono text-[11px] tracking-wider text-slate-500">
                        © {new Date().getFullYear()} {SITE.legalName} All rights reserved.
                    </p>
                    <p className="font-mono text-[11px] tracking-wider text-slate-500">
                        ISO 9001:2015 · ASME · IBR 1950 · TEMA
                    </p>
                </div>
            </div>
        </footer>
    );
}
