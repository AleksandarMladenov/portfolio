import { CollapsibleCard } from '../components/ui/CollapsibleCard';
import theme from '../theme';

export default function Home() {
  return (
      <main className={`min-h-screen bg-gradient-to-b ${theme.colors.backgroundLight} dark:${theme.colors.backgroundDark} py-10 px-6`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-2 ${theme.colors.headingLight} dark:${theme.colors.headingDark}`}>
                Aleksander Mladenov
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Software Engineering student focused on real-world projects, clean architecture, and impactful tech.
              </p>
              <div className="mt-4">
                <a href="/skills" className={`inline-block ${theme.colors.accent} px-5 py-2 rounded-md shadow transition`}>
                  View My Skills →
                </a>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
            <span className={`inline-block ${theme.colors.badgeLight} dark:${theme.colors.badgeDark} text-sm font-medium px-4 py-2 rounded-full shadow-sm`}>
              Available for Internships – Beginning of September 2025
            </span>
            </div>
          </div>

          {/* Project Cards */}
          <CollapsibleCard
              title="Venloop – Task & Leaderboard System"
              subtitle="Technologies: React, Next.js, Firebase, Node.js"
              date="March – June 2025"
          >
            <p className="mb-3">
              During our 4th semester, we built a web-based task management app for the real event “Venloop Avond4Daagse.”
              I was responsible for developing all task-related functionalities,
              enabling QR code access, writing backend logic, and designing a live leaderboard that ranks team progress.
              I also implemented end-to-end tests to ensure reliability across components.
            </p>
            <div className="relative w-full pb-[56.25%] h-0 mb-3">
              <iframe
                  className="absolute top-0 left-0 w-full h-full rounded"
                  src="https://www.loom.com/embed/23618d29bc4642f7b0c440e2baee7e8e"
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
            </div>
          </CollapsibleCard>

          <CollapsibleCard
              title="BeerApp – Swift Map Tracker"
              subtitle="Technologies: Swift, PostgreSQL, REST APIs, Docker"
              date="September 2024 – January 2025"
          >
            <p className="mb-3">A native iOS app built in Swift where users can track friends’ locations and navigate to bars.</p>
            <ul className="list-disc list-inside mb-3 space-y-1">
              <li>Showing the user's real-time location on the map</li>
              <li>Converting latitude/longitude to readable addresses</li>
              <li>Displaying routes between users and bars</li>
              <li>Integrating push notifications for live location updates</li>
              <li>REST API integration for external data and Docker setup</li>
            </ul>
            <div className="relative w-full pb-[187.5%] h-0 mb-3">
              <iframe
                  className="absolute top-0 left-0 w-full h-full rounded"
                  src="https://www.loom.com/embed/cc8968779dba4a998c32fdc789f99886"
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
            </div>
          </CollapsibleCard>

          <CollapsibleCard
              title="Routes – Laravel Routing App"
              subtitle="Technologies: PHP, Laravel, MySQL"
              date="March – July 2021"
          >
            <p className="mb-3">
              A Laravel-based app that calculates the shortest route between two points with real-time fuel stop data.
              I worked on backend logic for routing, fuel usage, and travel time estimation.
            </p>
            <a href="https://github.com/LaravelProjectTeam/routes" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View GitHub Repository →
            </a>
          </CollapsibleCard>
        </div>
      </main>
  );
}
