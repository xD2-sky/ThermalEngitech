import { ArrowUpRight } from "lucide-react";
import { Reveal, MonoLabel } from "./Reveal";
import { PRODUCTS, SITE } from "./data";

export default function Products() {
    return (
        <section id="products" data-testid="products-section" className="bg-paper py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
                    <Reveal>
                        <MonoLabel data-testid="products-label">Our Products</MonoLabel>
                        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-ink leading-tight">
                            Four solutions.
                            <br />
                            <span className="te-outline-text">Countless possibilities.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="max-w-sm text-slate-600 leading-relaxed">
                            Engineered thermal and process-heating systems — designed and fabricated in-house
                            to the standards your plant is audited against.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((p, i) => (
                        <Reveal key={p.id} delay={i * 0.1}>
                            <a
                                href={SITE.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`product-card-${p.id}`}
                                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_25px_50px_-15px_rgba(10,17,40,0.18)]"
                            >
                                <div className="relative h-52 overflow-hidden bg-mist">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.2em] bg-ink/85 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                                        {p.index}
                                    </span>
                                </div>
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">{p.name}</h3>
                                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-1">{p.description}</p>
                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {p.tags.map((t) => (
                                            <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-slate-500 border border-slate-200 rounded-full px-2.5 py-1">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                                        Enquire
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
