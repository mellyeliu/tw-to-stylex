export function TailwindCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
        <h3 className="text-white font-bold text-lg">Pure Tailwind</h3>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-gray-600 text-sm">
          This card is styled entirely with Tailwind CSS utility classes.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
            Utility Classes
          </span>
          <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full font-medium">
            PostCSS
          </span>
        </div>
        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
          Tailwind Button
        </button>
      </div>
    </div>
  );
}
