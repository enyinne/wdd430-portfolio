
interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const instant = false;

export default async function ProjectsPage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/projects`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const projects: Project[] = await response.json();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Projects Overview</h1>

      <p className="mt-4">
        Explore my open-source and school projects.
      </p>

      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <div key={project.id}>
            <h2 className="text-xl font-bold">{project.title}</h2>

            <p className="mt-2">{project.description}</p>

            <p className="mt-2">
              <strong>Type:</strong> {project.type}
            </p>

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
