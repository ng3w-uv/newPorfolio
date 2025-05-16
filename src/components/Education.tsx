const education = [
  {
    school: "Northeastern University",
    location: "Boston/ MA",
    degree: "Master's in Computer Science",
    dates: "Fall 2025",
  },
  {
    school: "MIT World Peace University",
    location: "Pune/ India",
    degree: "B.Tech in Computer Science and Engineering",
    dates: "2019 / 2023",
  },
];

export default function Education() {
  return (
    <section className="mb-20 pt-8" tabIndex={-1} aria-label="Education">
      <div className="font-semibold text-muted uppercase tracking-wide text-sm mb-6 text-left font-walsheim">
        Education
      </div>
      {education.map((edu) => (
        <div key={edu.school} className="flex flex-col md:flex-row justify-between mb-6 font-walsheim">
          <div>
            <div className="font-semibold">{edu.school}</div>
            <div className="text-primary text-sm">{edu.location}</div>
            <div className="text-gray-600 text-sm mt-1">{edu.degree}</div>
          </div>
          <div className="text-gray-500 text-sm min-w-[120px] pt-2 md:pt-0 md:pl-4 text-right">{edu.dates}</div>
        </div>
      ))}
    </section>
  );
}
