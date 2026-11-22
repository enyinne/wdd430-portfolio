
import { getProjects } from '@/lib/projects-db';

export const instant = false;

export default async function SchoolProjectsPage() {
  const projects = await getProjects('school');

  return (
    <main>
      <h1 className="text-3xl font-bold">School Projects</h1>

      <p className="mt-4">
        Explore my academic and school projects.
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
