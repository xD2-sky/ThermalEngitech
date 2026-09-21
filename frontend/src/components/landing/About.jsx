import { Reveal, MonoLabel } from "./Reveal";

const CHAPTERS = [
    {
        n: "01",
        title: "Engineering foundation",
        body: "Founded in Gujarat in 2012, Thermal Engitech has grown into a full heavy-engineering plant in Dhamatwan — trusted across India and export markets for complete boiler assemblies, heaters, and accessories.",
    },
    {
        n: "02",
        title: "In-house precision",
        body: "Every system is engineered to your plant's exact thermal load, fuel type, and space constraints — designed and fabricated in-house, not pulled from a catalog.",
    },
    {
        n: "03",
        title: "Built to keep running",
        body: "Reliability and efficiency are built in from the first calculation. Every build leaves the works certified to IBR, ASME and ISO 9001:2015 standards your plant is audited against.",
    },
];

export default function About() {
    return (
        <section id="about" data-testid="about-manifesto-section" className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <MonoLabel data-testid="about-label">About Thermal Engitech</MonoLabel>
                            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-ink leading-tight">
                                Engineering heat systems since 2012
                            </h2>
                        </Reveal>
                        <Reveal delay={0.15} className="mt-10 relative">
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src="/images/industries-bg.jpg"
                                    alt="Thermal Engitech industrial facility in Dhamatwan, Gujarat"
                                    className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-ink text-white rounded-xl px-5 py-4 shadow-xl">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">Works</p>
                                <p className="font-display font-semibold mt-1 text-sm">Dhamatwan, Gujarat</p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {CHAPTERS.map((c, i) => (
                            <Reveal key={c.n} delay={i * 0.12}>
                                <div
                                    data-testid={`about-chapter-${c.n}`}
                                    className="group grid grid-cols-[auto_1fr] gap-6 sm:gap-10 py-8 sm:py-10 border-t border-slate-200 last:border-b"
                                >
                                    <span className="font-mono text-sm text-signal font-semibold pt-1.5">{c.n}</span>
                                    <div>
                                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                                            {c.title}
                                        </h3>
                                        <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">{c.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
