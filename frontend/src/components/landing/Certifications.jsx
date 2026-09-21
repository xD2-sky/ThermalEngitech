import { ShieldCheck } from "lucide-react";
import { Reveal, MonoLabel } from "./Reveal";
import { CERTIFICATIONS } from "./data";

export default function Certifications() {
    return (
        <section id="certifications" data-testid="certifications-section" className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="max-w-2xl mb-14">
                    <MonoLabel data-testid="certifications-label">Certifications & Quality</MonoLabel>
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-ink leading-tight">
                        Built to the standards your plant is audited against
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {CERTIFICATIONS.map((c, i) => (
                        <Reveal key={c.code} delay={i * 0.1}>
                            <div
                                data-testid={`certification-card-${c.code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="group border border-slate-200 rounded-2xl p-7 h-full transition-all duration-300 hover:border-brand/40 hover:bg-brand-light/40"
                            >
                                <ShieldCheck className="h-6 w-6 text-brand" />
                                <p className="mt-6 font-mono text-lg font-semibold tracking-wide text-ink">{c.code}</p>
                                <p className="mt-1.5 text-sm text-slate-600">{c.label}</p>
                                <div className="mt-6 h-px w-full bg-slate-200 group-hover:bg-brand/30 transition-colors duration-300" />
                                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
                                    Certified · Verified
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
