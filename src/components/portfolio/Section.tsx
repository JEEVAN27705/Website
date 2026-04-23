import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-24 md:py-32 relative ${className}`}>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        {eyebrow && (
          <span className="font-mono text-sm text-primary mb-3 block">// {eyebrow}</span>
        )}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);
