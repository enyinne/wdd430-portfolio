
interface TechnicalSkillsProps {
  title: string;
  skills: string[];
}

export default function TechnicalSkills({
  title,
  skills,
}: TechnicalSkillsProps) {
  return (
    <section className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
