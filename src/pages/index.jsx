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
              <p className="text-gray-700 mb-3">
                During our 4th semester, we built a web-based task management app for the real event “Venloop Avond4Daagse.”
                I was responsible for developing all task-related features (description, image, input, multiple choice),
                enabling QR code access, writing backend logic, and designing a live leaderboard that ranks team progress.
                I also implemented end-to-end tests to ensure reliability across components.
              </p>

              <div style="position: relative; padding-bottom: 54.76673427991886%; height: 0;">
                <iframe
                    src="https://www.loom.com/embed/23618d29bc4642f7b0c440e2baee7e8e?sid=e9162a00-0b57-4a6a-8a00-071145c75d3d"
                    frameBorder="0" webkitallowfullscreen mozallowfullscreen
                    allowFullScreen
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
              </div>
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
