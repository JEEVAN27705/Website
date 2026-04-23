import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "QA Manual Tester",
    organization: "Eklavya.me",
    location: "Remote",
    duration: "September 2025 — Present",
    description:
      "Actively involved in testing the Eklavya.me platform, ensuring quality, usability, and performance across features and user workflows.",
    responsibilities: [
      "Identified bugs and UI/UX issues through detailed manual testing",
      "Tested new features and workflows for functionality and usability",
      "Provided structured feedback to developers for continuous improvement",
      "Collaborated with developers to retest fixes and validate updates",
    ],
    technologies: ["Manual Testing", "Bug Reporting", "UI/UX Testing", "Jira", "Git"],
    learnings:
      "Developed strong skills in exploratory testing, defect tracking, and cross-team collaboration while ensuring a high-quality user experience.",
  },
  {
    role: "Software Quality Assurance Tester",
    organization: "PRAM Educate IT Software LLP",
    location: "On-site",
    duration: "May 2025 — July 2025",
    description:
      "Performed manual and basic automation testing for Android and web applications, focusing on functionality, usability, and API validation.",
    responsibilities: [
      "Conducted manual testing on Android applications and identified critical bugs",
      "Designed and executed test cases for multiple modules",
      "Performed API testing using Postman",
      "Practiced web automation testing using Selenium WebDriver",
      "Worked closely with developers to report, track, and retest issues",
    ],
    technologies: ["Manual Testing", "Postman", "Selenium WebDriver", "Test Case Design", "API Testing"],
    learnings:
      "Gained hands-on experience in real-world QA processes, including test planning, execution, and ensuring application reliability.",
  },
];

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="experience"
    title="Where I've worked"
    subtitle="Internships and roles that sharpened my engineering craft."
  >
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.role + exp.organization}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pl-12 md:pl-20 mb-10 last:mb-0"
        >
          <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background -translate-x-1/2 z-10" />

          <div className="glass rounded-2xl p-6 md:p-8 card-shadow">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">{exp.duration}</span>
                </div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.organization}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {exp.location}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

            <div className="mb-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/80 mb-2">
                Key responsibilities
              </h4>
              <ul className="space-y-1.5">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/80 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/80 mb-2">
                Key learnings
              </h4>
              <p className="text-sm text-muted-foreground italic">{exp.learnings}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
