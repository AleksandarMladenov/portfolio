import { useState } from 'react';
import theme from '../../theme';

export function CollapsibleCard({ title, subtitle, date, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 mb-6 transition-all duration-300">
            <div className="p-4 flex flex-col gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mt-2 text-sm text-blue-600 hover:underline self-start"
                >
                    {isOpen ? 'Hide Details ▲' : 'View Details ▼'}
                </button>
            </div>
            {isOpen && <div className="px-4 pb-4 text-gray-700 dark:text-gray-200">{children}</div>}
        </div>
    );
}
