import { MARQUEE_ITEMS } from "./data";

export default function Marquee() {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div data-testid="editorial-marquee" className="bg-navy py-4 overflow-hidden" aria-hidden="true">
            <div className="animate-te-marquee flex w-max items-center gap-10">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.3em] text-slate-300 whitespace-nowrap">
                        {item}
                        <span className="h-1.5 w-1.5 rounded-full bg-signal inline-block" />
                    </span>
                ))}
            </div>
        </div>
    );
}
