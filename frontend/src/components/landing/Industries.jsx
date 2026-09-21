import { Reveal, MonoLabel } from "./Reveal";
import { INDUSTRIES } from "./data";

export default function Industries() {
    return (
        <section id="industries" data-testid="industries-section" className="bg-paper border-y border-slate-200 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="max-w-2xl">
                    <MonoLabel data-testid="industries-label">Where our systems run</MonoLabel>
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-ink leading-tight">
                        Industries we serve
                    </h2>
                    <p className="mt-5 text-slate-600 leading-relaxed">
                        Fourteen industries, one requirement in common: heat that can't fail.
                    </p>
                </Reveal>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {INDUSTRIES.map((name, i) => (
                        <Reveal key={name} delay={Math.min(i * 0.05, 0.5)}>
                            <div
                                data-testid={`industry-chip-${name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                className="group h-full bg-white border border-slate-200 rounded-xl px-4 py-5 flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_15px_30px_-12px_rgba(224,79,22,0.25)]"
                            >
                                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 group-hover:text-signal transition-colors duration-300">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm font-semibold text-ink leading-snug">{name}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-slate-500" data-testid="industries-note">
                        + other units where direct and indirect heating is essential
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
