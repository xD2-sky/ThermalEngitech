import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "./Reveal";

const Counter = ({ to, suffix, testid }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setVal(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, to]);

    return (
        <span ref={ref} data-testid={testid} className="font-display text-5xl sm:text-6xl font-bold text-ink tracking-tight">
            {val.toLocaleString("en-IN")}
            <span className="text-signal">{suffix}</span>
        </span>
    );
};

const STATS = [
    { to: 12, suffix: "+", label: "Years in the field", testid: "stat-years" },
    { to: 1200, suffix: "+", label: "Systems installed", testid: "stat-installations" },
    { to: 100, suffix: "%", label: "IBR-certified builds", testid: "stat-ibr" },
];

export default function StatsStrip() {
    return (
        <section data-testid="stats-strip" className="border-y border-slate-200 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
                {STATS.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.12} className="flex flex-col gap-2 sm:border-l sm:border-slate-200 sm:pl-8 first:border-0 first:pl-0">
                        <Counter to={s.to} suffix={s.suffix} testid={s.testid} />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{s.label}</span>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
