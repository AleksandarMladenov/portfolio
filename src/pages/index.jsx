import { Card } from '../components/ui/Card'
import { CardContent } from '../components/ui/CardContent'

export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Aleksander Mladenov</h1>
          <p className="mb-8 text-gray-700">
            Software Engineering student passionate about practical technology and building cool real-world apps.
          </p>

          {/* --- VENLOOP PROJECT --- */}
          <p className="text-sm text-gray-500 mb-1">🗓 March – June 2025</p>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Venloop – Task & Leaderboard System</h2>
              <p className="text-gray-700 mb-3">
                During our 4th semester, we built a web-based task management system for the real event “Venloop Avond4Daagse.”
                I was responsible for all task-related features (description, image, input, multiple choice), enabling QR code access,
                backend integration, and designing the live leaderboard. I also implemented end-to-end tests to ensure the reliability of submissions.
              </p>

              <div className="relative w-full pb-[56.25%] h-0 mb-4">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded"
                    src="https://www.loom.com/embed/23618d29bc4642f7b0c440e2baee7e8e"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
              </div>

              <p className="text-sm text-gray-600"><strong>Technologies:</strong> React, Next.js, Firebase, Node.js</p>
            </CardContent>
          </Card>

          {/* --- BEERAPP PROJECT --- */}
          <p className="text-sm text-gray-500 mt-6">🗓 September 2024 – January 2025</p>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">BeerApp – Swift Map Tracker</h2>
              <p className="text-gray-700 mb-3">
                A native iOS app created during our 3rd semester to help friends locate each other and meet up at bars.
                I was responsible for all the **map-related features** within the app:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Showing the user's **real-time location** on the map</li>
                <li>Converting **latitude/longitude to readable addresses**</li>
                <li>Displaying the **route between users and bars**</li>
                <li>Implementing **push notifications** for live friend activity</li>
                <li>Integrating data from external **REST APIs**</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This was all developed using **Swift**, and supported by a **PostgreSQL backend**, **Docker**, and Node.js services.
              </p>

              <div className="relative w-full pb-[187.5%] h-0 mb-4">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded"
                    src="https://www.loom.com/embed/cc8968779dba4a998c32fdc789f99886"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> Swift, PostgreSQL, REST APIs, Node.js, Docker
              </p>
            </CardContent>
          </Card>


          {/* --- ROUTES PROJECT --- */}
          <p className="text-sm text-gray-500 mt-6">🗓 March – July 2021</p>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Routes – Laravel Routing App</h2>
              <p className="text-gray-700 mb-3">
                A Laravel-based web app that calculates the shortest path between two endpoints and shows fuel stations along the route.
                I collaborated on logic for travel time estimation and fuel data integration.
              </p>
              <p className="text-sm text-gray-600"><strong>Technologies:</strong> PHP, Laravel, MySQL</p>
              <a
                  className="text-blue-600 underline text-sm"
                  href="https://github.com/LaravelProjectTeam/routes"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                View GitHub Repository →
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
  );
}
