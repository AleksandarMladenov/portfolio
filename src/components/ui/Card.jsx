export function Card({ children }) {
    return (
        <div className="rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden mb-4">
            {children}
        </div>
    );
}
