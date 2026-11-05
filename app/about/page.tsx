import TechnicalSkills from '@/components/TechnicalSkills';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>

      <TechnicalSkills
        title="My Technical Skills"
        skills={[
          'HTML',
          'CSS',
          'JavaScript',
          'Python',
          'React',
          'Next.js',
          'TypeScript',
        ]}
      />      
    </main>
  );
}