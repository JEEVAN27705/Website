import { motion } from "framer-motion";
import { Section } from "./Section";

const categories = [
  {
    title: "Programming Languages",
    color: "from-primary to-primary-glow",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 85 },
      { name: "SQL", level: 82 },
      { name: "PHP", level: 75 },
    ],
  },
  {
    title: "Web Development",
    color: "from-secondary to-primary",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "ReactJS", level: 85 },
    ],
  },
  {
    title: "Software Testing",
    color: "from-accent to-primary",
    skills: [
      { name: "Manual Testing", level: 90 },
      { name: "Automation Testing", level: 80 },
      { name: "Selenium WebDriver", level: 82 },
      { name: "Postman (API Testing)", level: 85 },
      { name: "Test Case Design", level: 88 },
      { name: "Bug Reporting", level: 90 },
    ],
  },
  {
    title: "Databases",
    color: "from-primary to-accent",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    color: "from-secondary to-accent",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "FastAPI", level: 78 },
      { name: "Streamlit", level: 75 },
      { name: "Maven", level: 70 },
      { name: "JUnit", level: 72 },
      { name: "Jira", level: 85 },
    ],
  },
  {
    title: "Machine Learning & NLP",
    color: "from-accent to-primary",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 82 },
      { name: "Text Classification", level: 80 },
      { name: "Model Deployment (FastAPI)", level: 78 },
      { name: "Dataset Testing", level: 83 },
    ],
  },
];

export const Skills = () => (
  <Section id="skills" eyebrow="skills" title="Skills & Tools Worked with" subtitle="A growing toolkit refined through projects, hackathons, and a lot of late-night curiosity.">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: ci * 0.1 }}
          className="glass rounded-3xl p-7 card-shadow"
        >
          <h3 className="text-xl font-bold mb-6">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${cat.color}`}>
              {cat.title}
            </span>
          </h3>
          <div className="space-y-5">
            {cat.skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-mono text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
