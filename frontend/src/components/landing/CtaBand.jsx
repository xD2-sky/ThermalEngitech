import { Phone, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE } from "./data";

export default function CtaBand() {
    return (
        <section data-testid="consultation-cta-section" className="relative bg-navy overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                }}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400" data-testid="cta-label">
                            Consultation
                        </p>
                        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
                            Ready to consult on a <span className="text-signal">custom plant</span> layout?
                        </h2>
                        <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                            Our engineering coordinators assess thermal demand, fuel options, and space
                            constraints to hand you a full technical draft — not a generic quote.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-4">
                        <a
                            href={SITE.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="cta-whatsapp-button"
                            className="group inline-flex items-center gap-3 bg-signal hover:bg-signal-hover text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(224,79,22,0.4)]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Start a consultation
                        </a>
                        <a
                            href={`tel:${SITE.phoneTel}`}
                            data-testid="cta-call-button"
                            className="inline-flex items-center gap-3 border-2 border-white/20 hover:border-white text-white font-semibold px-7 py-[14px] rounded-full transition-colors duration-300"
                        >
                            <Phone className="h-4 w-4" />
                            {SITE.phoneDisplay}
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
