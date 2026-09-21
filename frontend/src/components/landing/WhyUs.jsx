import { Calculator, Flame, BadgeCheck, IndianRupee } from "lucide-react";
import { Reveal, MonoLabel } from "./Reveal";

const POINTS = [
    { icon: Calculator, title: "Advanced HTRI sizing", body: "Thermal sizing run through industry-standard HTRI calculations before a single plate is cut." },
    { icon: BadgeCheck, title: "Qualified welders", body: "Volumetric welder qualifications on every pressure part — traceable, audited, certified." },
    { icon: Flame, title: "Precision firing controls", body: "Fuel economy dialed in across diesel, gas, or biomass firing systems." },
    { icon: IndianRupee, title: "Lower operating costs", body: "Grates customized for agri-waste, wood chips, and charcoal to cut fuel spend year after year." },
];

export default function WhyUs() {
    return (
        <section id="why-us" data-testid="why-choose-us-section" className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-6">
                    <Reveal>
                        <MonoLabel data-testid="why-us-label">Why choose us</MonoLabel>
                        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-ink leading-tight">
                            Reliability, built in from the first calculation
                        </h2>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {POINTS.map((p, i) => (
                            <Reveal key={p.title} delay={i * 0.1}>
                                <div data-testid={`why-us-point-${i + 1}`} className="group">
                                    <div className="h-11 w-11 rounded-xl bg-brand-light flex items-center justify-center transition-colors duration-300 group-hover:bg-brand">
                                        <p.icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-white" />
                                    </div>
                                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">{p.title}</h3>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <Reveal delay={0.2} className="lg:col-span-6">
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="/images/hero-boiler-room.jpg"
                                alt="Precision engineering detail inside a Thermal Engitech boiler room"
                                className="w-full h-[420px] sm:h-[540px] object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-6 sm:left-10 bg-white border border-slate-200 rounded-2xl shadow-xl px-6 py-5">
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Certified works</p>
                            <p className="font-display text-3xl font-bold text-ink mt-1">
                                1,200<span className="text-signal">+</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-1">Steam installations, deployed worldwide</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
