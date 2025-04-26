
const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Redux",
  "SQL",
  "Selenium",
  "PHP",
  "Git",
  "REST APIs",
  "GraphQL",
  "Jest",
];

export default function Skills() {
  return (
    <section className="mb-20 pt-8" tabIndex={-1} aria-label="Skills and Technologies">
      <div className="font-semibold text-muted uppercase tracking-wide text-sm mb-6 text-left font-walsheim">
        Skills & Technologies
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-2xl border border-gray-200 text-gray-700 bg-white font-medium text-sm shadow hover:bg-primary/10 transition-colors font-walsheim"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
