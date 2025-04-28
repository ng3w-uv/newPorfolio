const experience = [
  {
    company: "CarTrade Tech/ India",
    location: "Mumbai",
    title: "Software Developer Engineer 1",
    dates: "June 2023 - Present",
    bullets: [
      "Led migration of a page from legacy codebase to React, improving performance and modularity.",
      "Implemented caching and query optimization techniques to boost performance and resolved critical slow queries, ensuring smooth data retrieval and processing.",
      "Created a comprehensive panel for uploading vehicle prices at a national level, leveraging RabbitMQ for efficient queue management, which significantly streamlined operations, saving time and resources.",
      "Proactively reduced INP (Interaction to Next Paint) from 300-500ms to under 200ms, enhancing user experience on key interfaces.",
      "Designed and developed a dynamic feature allowing client-side price saving, with runtime named resolution in C# via dependency injection and factory patterns, enhancing flexibility and maintainability in code architecture.",
      "Consolidated redundant code by implementing a shared library for multiget caching functionality, improving efficiency and maintainability.",
    ],
  },
  {
    company: "Capgemini / India",
    location: "Pune",
    title: "Software Developer Intern",
    dates: "Aug 2022 - Dec 2022",
    bullets: [
      "Created a project that calculates KPIs in real time using Azure Functions. Time interval calculation and parsing were performed on the NodeJs runtime stack using Javascript.",
      "Using the concepts of object-oriented programming, we combined all the actions under a single trigger, eliminating unnecessary triggers.",
      "In addition to being cost-effective, the solution also reduced the response time by 20 seconds.",
      "Since Azure Time Series Insights will be deprecated by 2025, we have also provided an alternative solution using Azure Data Explorer.",
      "At the backend, an Alarm Management solution was created using Azure Bus Service queue triggers.",
    ],
  },
  {
    company: "Spectranomy / United Kingdom",
    location: "Suffolk",
    title: "Backend Developer Intern (Remote)",
    dates: "Nov 2021 - Jan 2022",
    bullets: [
      "Backend Development in C++ and Mysql which included creating a Dataset based on the business segregation running in UK.",
      "Finalizing the Database schema and testing it in order to optimize query performance.",
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
