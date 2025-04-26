const experience = [
  {
    company: "Selfbook / US",
    location: "New York",
    title: "Frontend Engineer (Remote)",
    dates: "Jul 2021 - Present",
    bullets: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
  {
    company: "Weoz / Italy",
    location: "",
    title: "Software Developer (Remote)",
    dates: "Jun 2021 - Present",
    bullets: [
      "Developing mobile and web applications using React and React Native.",
      "Developing web scraping bots using Python and Selenium.",
      "Helping with PHP backend tasks and occasionally working with different programming languages .",
      "Consulting on frontend tech stack and integrating multiple external APIs across all platforms.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-20 pt-8" tabIndex={-1} aria-label="Work Experience">
      <div className="font-semibold text-muted uppercase tracking-wide text-sm mb-6 text-left font-walsheim">
        Experience
      </div>
      {experience.map((exp) => (
        <div key={exp.title} className="flex flex-col md:flex-row justify-between mb-6 gap-x-10 font-walsheim">
          <div>
            <div className="font-semibold text-lg">{exp.title}</div>
            <div className="text-primary text-sm mb-1">{exp.company}{exp.location && <> &middot; {exp.location}</>}</div>
            <ul className="text-gray-600 text-sm list-disc ml-5 mt-2">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="text-gray-500 text-sm min-w-[120px] pt-2 md:pt-0 md:pl-4 text-right self-start">
            {exp.dates}
          </div>
        </div>
      ))}
    </section>
  );
}
