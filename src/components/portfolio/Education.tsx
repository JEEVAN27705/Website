import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    degree: "Bachelor of Computer Engineering",
    school: "Pimpri Chinchwad College of Engineering and Research",
    year: "2023 — Present",
    detail: "Current CGPA: 8.86. Focused on software development, AI/ML, and web technologies with hands-on project experience.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "S.B Patil College of Science and Commerce",
    year: "2021 — 2023",
    detail: "Specialized in Computer Science with a strong foundation in programming and analytical thinking.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "St Jude High School",
    year: "2008 — 2021",
    detail: "Secured 76%. Built a strong academic foundation with early exposure to core subjects.",
  },
];

export const Education = () => (
  <Section id="education" eyebrow="education" title="Academic journey" subtitle="The milestones that shaped how I think and build.">
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-secondary md:-translate-x-px" />
      {items.map((it, i) => (
        <motion.div
          key={it.degree}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative mb-10 md:mb-14 md:flex md:items-center ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background -translate-x-1/2 z-10" />
          <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
            <div className="glass rounded-2xl p-6 card-shadow">
              <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{it.year}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{it.degree}</h3>
              <p className="text-sm text-primary font-medium mb-2">{it.school}</p>
              <p className="text-sm text-muted-foreground">{it.detail}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
