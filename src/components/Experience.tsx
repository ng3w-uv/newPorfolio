const experience = [
  {
    company: "CarTrade Tech/ India",
    location: "Mumbai",
    title: "Software Developer Engineer 1",
    dates: "June 2023 - Present",
    bullets: [
      "Improved <b>page load speed by 30%</b> and enhanced <b>modularity</b> by leading the migration of a high-traffic pricing page from a legacy codebase to <b>React</b>, enabling faster development cycles and better maintainability.",
      "Received <b>'Developer of the Month'</b> award for architecting a dynamic, client-specific price-saving feature using runtime named resolution in <b>C#</b> with <b>Dependency Injection</b> and <b>Factory Design Patterns</b>, enabling seamless onboarding of new OEMs with minimal code changes and significantly reducing integration time.",
      "Saved <b>50+ hours/month</b> of manual effort by building a robust internal panel for uploading vehicle prices nationwide, using <b>RabbitMQ</b> for chunked queue processing and message handling, which improved reliability and throughput by over <b>60%</b>.",
      "Improved <b>Core Web Vitals</b> score and <b>SEO</b> performance by reducing <b>INP</b> (Interaction to Next Paint) from <b>450ms</b> to under <b>200ms</b> through frontend optimizations, ensuring seamless user interaction and enhancing perceived responsiveness.",
      "Reduced code duplication by <b>40%</b> and improved system maintainability by developing a shared caching utility library reused across multiple services, standardizing data-fetching logic, and reducing onboarding time for new developers.",
    ],
  },
  {
    company: "Capgemini / India",
    location: "Pune",
    title: "Software Developer Intern",
    dates: "August 2022 - December 2022",
    bullets: [
      "Built a real-time <b>KPI monitoring system</b> using <b>Azure Functions</b> and <b>Node.js</b>, reducing response time by <b>20 seconds</b> through consolidated trigger logic and efficient event parsing.",
      "Proposed a scalable alternative to Azure Time Series Insights using Azure Data Explorer and implemented alarm management with Azure Service Bus queues, ensuring a future-proof and cost-effective architecture",
    ],
  },
  {
    company: "Spectranomy / United Kingdom",
    location: "Suffolk",
    title: "Backend Developer Intern (Remote)",
    dates: "November 2021 - January 2022",
    bullets: [
      "Backend Development in <b>C++</b> and <b>MySQL</b> which included creating a Dataset based on the business segregation running in UK.",
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
        <div key={exp.title} className="flex flex-col md:flex-row justify-between mb-8 gap-x-10 font-walsheim">
          <div>
            <div className="font-semibold text-lg">{exp.title}</div>
            <div className="text-primary text-sm mb-1">{exp.company}{exp.location && <> &middot; {exp.location}</>}</div>
            <ul className="text-gray-600 text-sm list-disc ml-5 mt-2">
              {exp.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }}></li>
              ))}
            </ul>
          </div>
          <div className="text-gray-500 text-sm min-w-[180px] pt-2 md:pt-1 md:pl-4 text-right self-start whitespace-nowrap font-medium">
            {exp.dates}
          </div>
        </div>
      ))}
    </section>
  );
}
