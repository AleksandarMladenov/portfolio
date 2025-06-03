import theme from '../theme.js';

export default function SkillsPage() {
    return (
        <main className={`min-h-screen bg-gradient-to-b ${theme.colors.backgroundLight} dark:${theme.colors.backgroundDark} text-gray-900 dark:text-white ${theme.spacing.section}`}>
            <div className={theme.spacing.container}>
                <div className="mb-12 text-center">
                    <h1 className={`${theme.typography.heading} mb-4 ${theme.colors.headingLight} dark:${theme.colors.headingDark}`}>
                        My Skillset
                    </h1>
                    <p className={`${theme.typography.paragraph} ${theme.colors.textLight} dark:${theme.colors.textDark} max-w-2xl mx-auto`}>
                        A blend of engineering, front-end creativity, and team-focused soft skills developed through real-world projects as well as conducted trough my university studies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 className={`${theme.typography.subheading} mb-4 text-blue-800 dark:text-blue-200`}>Professional Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'React', 'Next.js', 'JavaScript', 'Tailwind CSS','Java',
                                'Firebase', 'Node.js', 'REST APIs', 'PostgreSQL',
                                'Docker', 'Laravel', 'Swift', 'Git', 'Vercel', 'Firebase'
                            ].map((skill) => (
                                <span key={skill} className={`${theme.colors.tagLight} dark:${theme.colors.tagDark} px-3 py-1 rounded-full text-sm font-medium`}>
                  {skill}
                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className={`${theme.typography.subheading} mb-4 text-blue-800 dark:text-blue-200`}>Soft Skills</h2>
                        <ul className={`space-y-3 ${theme.colors.textLight} dark:${theme.colors.textDark} list-disc list-inside`}>
                            <li>Clear communication and collaboration within development teams</li>
                            <li>Strong debugging and problem-solving in both frontend and backend logic</li>
                            <li>Initiative-taking and fast adaptation to new tools or technologies</li>
                            <li>Time management under real deadlines and project delivery schedules</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
