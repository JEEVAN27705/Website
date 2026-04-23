import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI in Online Abuse Prevention",
    desc: "Real-time NLP system that detects and mitigates abusive content across digital platforms using transformer models.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    category: "AI",
    github: "#",
    demo: "#",
  },
  {
    title: "Hate Speech Detection System",
    desc: "Multi-class classification pipeline trained on social media data to identify hate speech with high precision.",
    tech: ["Python", "Scikit-learn", "NLTK", "Flask"],
    category: "AI",
    github: "#",
    demo: "#",
  },
  {
    title: "Virtual Fort Tour",
    desc: "Immersive 3D experience built in Unity letting users explore historical forts with interactive storytelling.",
    tech: ["Unity", "C#", "Blender"],
    category: "Game",
    github: "#",
    demo: "#",
  },
  {
    title: "Timetable Scheduling App",
    desc: "Smart scheduling tool that auto-generates conflict-free timetables for institutions using constraint solving.",
    tech: ["React", "Node.js", "MySQL"],
    category: "Web",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Interview Simulation System",
    desc: "Mock interview platform powered by LLMs that evaluates answers, posture, and provides instant feedback.",
    tech: ["Python", "OpenAI", "React", "WebRTC"],
    category: "AI",
    github: "#",
    demo: "#",
  },
];

const filters = ["All", "AI", "Web", "Game"] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="selected work" title="Projects I'm proud of" subtitle="A mix of AI experiments, full-stack builds, and immersive interactive experiences.">
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow-shadow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-3xl p-6 card-shadow flex flex-col group hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[16/10] rounded-2xl mb-5 mesh-bg relative overflow-hidden flex items-center justify-center">
                <span className="font-mono text-5xl font-bold gradient-text opacity-60">
                  {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                </span>
                <span className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded-full glass">
                  {p.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button asChild size="sm" variant="outline" className="rounded-full flex-1">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild size="sm" className="rounded-full flex-1 bg-gradient-to-r from-primary to-accent border-0">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
