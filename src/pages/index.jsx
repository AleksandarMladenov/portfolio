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

          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Venloop – Task & Leaderboard System</h2>
              <p className="text-gray-700">
                Developed task features (QR, input, choice), backend services, leaderboard logic and E2E tests.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">BeerApp – Swift Map Tracker</h2>
              <p className="text-gray-700">
                Built map tracking (current location, route to bar), push notifications, and REST API integration.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Routes – Laravel Routing App</h2>
              <p className="text-gray-700">
                Shortest route logic, fuel stops, and Laravel backend work with friends.
                <a className="text-blue-600 underline ml-1" href="https://github.com/LaravelProjectTeam/routes" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
  );
}
