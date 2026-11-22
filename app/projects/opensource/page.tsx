interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const instant = false;

export default async function OpenSourceProjectsPage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const response = await fetch(
    `${baseUrl}/api/projects?type=opensource`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch open-source projects');
  }

  const projects: Project[] = await response.json();

  return (
    <main>
      <h1 className="text-3xl font-bold">
        Open Source Projects
      </h1>

      <p className="mt-4">
        Explore my open-source contributions.
      </p>

      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <div key={project.id}>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>

            <p className="mt-2">
              <strong>Technologies:</strong>{' '}
              {project.technologies.join(', ')}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
