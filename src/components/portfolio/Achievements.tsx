import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Users, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Medal,
    title: "State-Level Karate Gold Medalist",
    desc: "Awarded Gold Medal at the State Level Karate Championship, demonstrating discipline and competitive excellence.",
  },
  {
    icon: Trophy,
    title: "District Hockey Team Captain",
    desc: "Represented district in Inter-District Hockey Tournament and led the team as Captain.",
  },
  {
    icon: Award,
    title: "Best Project Award – PCCOER",
    desc: "Recognized for outstanding project development and innovation at college level.",
  },
 {
  icon: Star,
  title: "Club Lead – Project & Innovation Club (PIC)",
  desc: "Leading technical initiatives, organizing events, and mentoring members in the Project & Innovation Club.",
},
  {
    icon: Users,
    title: "Global Entrepreneur Conclave Volunteer",
    desc: "Volunteered at a national-level event, assisting in coordination, technical support, and operations.",
  },
  {
    icon: Star,
    title: "Navdhara State-Level Competition",
    desc: "Managed official event website and ensured smooth technical operations during the competition.",
  },
];

export const Achievements = () => (
  <Section id="achievements" eyebrow="achievements" title="Wins & certifications" subtitle="Moments of growth — from learning sprints to recognition.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="glass rounded-2xl p-6 card-shadow flex gap-4 hover:-translate-y-1 transition-transform"
        >
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <it.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{it.title}</h3>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
