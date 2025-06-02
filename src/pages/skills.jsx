export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-white py-12 px-6 text-gray-900">
            <div className="max-w-4xl mx-auto space-y-12">
                <section>
                    <h1 className="text-4xl font-bold mb-6">Skills</h1>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">🛠 Professional Skills</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>React, Next.js, JavaScript</li>
                                <li>Firebase, Node.js, REST APIs</li>
                                <li>Tailwind CSS, CSS Modules</li>
                                <li>PostgreSQL, Docker, Laravel</li>
                                <li>Swift (basic) for iOS development</li>
                                <li>Git, GitHub, CI/CD, Vercel</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">🧠 Soft Skills</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Team collaboration & communication</li>
                                <li>Problem-solving and debugging</li>
                                <li>Time management under deadlines</li>
                                <li>End-to-end testing mindset</li>
                                <li>Curious, fast learner, and proactive</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
