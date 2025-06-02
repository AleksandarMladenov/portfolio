import { CollapsibleCard } from '../components/CollapsibleCard';

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Aleksander Mladenov</h1>
          <p className="text-gray-600 mb-8">
            Software Engineering student passionate about practical technology and building cool real-world apps.
          </p>

          {/* Venloop */}
          <CollapsibleCard
              title="Venloop – Task & Leaderboard System"
              subtitle="Technologies: React, Next.js, Firebase, Node.js"
              date="March – June 2025"
          >
            <p className="mb-3">
              During our 4th semester, we built a web-based task management app for the real event “Venloop Avond4Daagse.”
              I was responsible for developing all task-related features (description, image, input, multiple choice),
              enabling QR code access, writing backend logic, and designing a live leaderboard that ranks team progress.
              I also implemented end-to-end tests to ensure reliability across components.
            </p>
            <p className="mb-3">
              In the demo video, I open the task submission app via a QR code, which contains an access token. This token
              identifies the team and redirects the user to the correct task. The page dynamically loads the template
              and allows the user to complete it.
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

          {/* BeerApp */}
          <CollapsibleCard
              title="BeerApp – Swift Map Tracker"
              subtitle="Technologies: Swift, PostgreSQL, REST APIs, Docker"
              date="September 2024 – January 2025"
          >
            <p className="mb-3">
              A native iOS app built in Swift where users can track friends’ locations and navigate to bars.
              My role focused on implementing all map-related features:
            </p>
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

          {/* Routes */}
          <CollapsibleCard
              title="Routes – Laravel Routing App"
              subtitle="Technologies: PHP, Laravel, MySQL"
              date="March – July 2021"
          >
            <p className="mb-3">
              A Laravel-based app that calculates the shortest route between two points with real-time fuel stop data.
              I worked on implementing backend logic for routing, fuel usage, and travel time estimation. This was a collaborative project
              completed with classmates in high school.
            </p>
            <a
                href="https://github.com/LaravelProjectTeam/routes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
              View GitHub Repository →
            </a>
          </CollapsibleCard>
        </div>
      </main>
  );
}
