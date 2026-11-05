import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Contacts Management API',
    description:
      'A RESTful API built with Node.js and Express for managing contact information using MongoDB.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/enyinne/cse341_project1',
  },
  {
    title: 'Contacts and Tasks API',
    description:
      'A backend API for managing contacts and tasks, built with Node.js, Express, MongoDB, and Mongoose.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JavaScript'],
    link: 'https://github.com/enyinne/cse341-project2',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a software development student learning web development.
          Here are some of my projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}