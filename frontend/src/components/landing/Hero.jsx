import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { SITE } from "./data";

const LINES = ["Industrial heat systems,", "built to keep", "running."];

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

    return (
        <section id="top" ref={ref} data-testid="hero-section" className="relative overflow-hidden bg-white">
            <motion.div style={{ y: imgY }} className="absolute inset-0">
                <img
                    src="/images/hero-furnace-bg-v2.jpg"
                    alt="Thermal Engitech fabrication plant with boiler shells under assembly"
                    className="h-full w-full object-cover object-center scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
            </motion.div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 border border-slate-300 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
                    data-testid="hero-certifications-badge"
                >
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
                        ISO 9001:2015 · ASME · IBR 1950
                    </span>
                </motion.div>

                <h1 className="font-display font-bold uppercase tracking-tight text-ink text-4xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl">
                    {LINES.map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-1">
                            <motion.span
                                className="block"
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.25 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {i === 2 ? (
                                    <>
                                        <span className="text-signal">running</span>.
                                    </>
                                ) : (
                                    line
                                )}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75 }}
                    className="mt-7 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed"
                    data-testid="hero-subtitle"
                >
                    Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
                    process-heat systems for plants where unplanned downtime is not an option — built in
                    Dhamatwan, Gujarat, and certified to Indian and export standards.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#products"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        data-testid="hero-explore-button"
                        className="group inline-flex items-center gap-3 bg-ink hover:bg-brand text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(29,78,216,0.35)]"
                    >
                        Explore the catalogue
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href={SITE.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-quote-button"
                        className="group inline-flex items-center gap-3 border-2 border-ink/15 hover:border-signal text-ink hover:text-signal font-semibold px-7 py-[14px] rounded-full transition-colors duration-300 bg-white/60 backdrop-blur-sm"
                    >
                        Request a quote
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
