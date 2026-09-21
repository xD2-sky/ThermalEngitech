import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", ...rest }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        {...rest}
    >
        {children}
    </motion.div>
);

export const MonoLabel = ({ children, className = "", ...rest }) => (
    <p
        className={`font-mono text-xs uppercase tracking-[0.25em] font-medium text-slate-500 ${className}`}
        {...rest}
    >
        {children}
    </p>
);
