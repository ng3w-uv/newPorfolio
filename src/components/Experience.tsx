const experience = [
  {
    company: "CarTrade Tech/ India",
    location: "Mumbai",
    title: "Software Developer Engineer 1",
    dates: "June 2023 - Present",
    bullets: [
      "Improved page load speed by 30% and enhanced modularity by leading the migration of a high-traffic pricing page from a legacy codebase to React, enabling faster development cycles and better maintainability.",
      "Received 'Developer of the Month' award for architecting a dynamic, client-specific price-saving feature using runtime named resolution in C# with Dependency Injection and Factory Design Patterns, enabling seamless onboarding of new OEMs with minimal code changes and significantly reducing integration time.",
      "Saved 50+ hours/month of manual effort by building a robust internal panel for uploading vehicle prices nationwide, using RabbitMQ for chunked queue processing and message handling, which improved reliability and throughput by over 60%.",
      "Improved Core Web Vitals score and SEO performance by reducing INP (Interaction to Next Paint) from 450ms to under 200ms through frontend optimizations, ensuring seamless user interaction and enhancing perceived responsiveness.",
      "Reduced code duplication by 40% and improved system maintainability by developing a shared caching utility library reused across multiple services, standardizing data-fetching logic, and reducing onboarding time for new developers.",
    ],
  },
  {
    company: "Capgemini / India",
    location: "Pune",
    title: "Software Developer Intern",
    dates: "Aug 2022 - Dec 2022",
    bullets: [
      "Built a real-time KPI monitoring system using Azure Functions and Node.js, reducing response time by 20 seconds through consolidated trigger logic and efficient event parsing.",
      "Proposed a scalable alternative to Azure Time Series Insights using Azure Data Explorer and implemented alarm management with Azure Service Bus queues, ensuring a future-proof and cost-effective architecture",
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
