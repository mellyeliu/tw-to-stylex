import {
  StyleXButton,
  StyleXCard,
  StyleXCardHeader,
  StyleXCardBody,
  StyleXCardFooter,
  StyleXBadge,
  StyleXAlert,
} from './components/StyleXComponents'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header - Tailwind */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Tailwind + StyleX Components
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            Testing StyleX components inside a Tailwind-styled application
          </p>
          <div className="flex justify-center gap-3">
            <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
              ✓ Tailwind Active
            </span>
            <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
              ✓ StyleX Active
            </span>
          </div>
        </div>

        {/* Alert Section - StyleX */}
        <div className="mb-8 space-y-3">
          <StyleXAlert variant="success">
            StyleX components are working inside this Tailwind app!
          </StyleXAlert>
          <StyleXAlert variant="info">
            Both styling systems coexist without conflicts.
          </StyleXAlert>
        </div>

        {/* Cards Grid - Mix of Tailwind container + StyleX cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* StyleX Card 1 */}
          <StyleXCard>
            <StyleXCardHeader title="StyleX Button Variants" />
            <StyleXCardBody>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <StyleXButton variant="primary">Primary</StyleXButton>
                  <StyleXButton variant="secondary">Secondary</StyleXButton>
                  <StyleXButton variant="danger">Danger</StyleXButton>
                </div>
                <div className="flex flex-wrap gap-2">
                  <StyleXButton variant="primary" size="sm">Small</StyleXButton>
                  <StyleXButton variant="primary" size="md">Medium</StyleXButton>
                  <StyleXButton variant="primary" size="lg">Large</StyleXButton>
                </div>
              </div>
            </StyleXCardBody>
            <StyleXCardFooter>
              <div className="flex gap-2">
                <StyleXBadge color="purple">StyleX</StyleXBadge>
                <StyleXBadge color="blue">Components</StyleXBadge>
              </div>
            </StyleXCardFooter>
          </StyleXCard>

          {/* StyleX Card 2 */}
          <StyleXCard>
            <StyleXCardHeader title="StyleX Badge Colors" />
            <StyleXCardBody>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <StyleXBadge color="purple">Purple</StyleXBadge>
                  <StyleXBadge color="green">Green</StyleXBadge>
                  <StyleXBadge color="red">Red</StyleXBadge>
                  <StyleXBadge color="blue">Blue</StyleXBadge>
                </div>
                <p className="text-gray-600 text-sm">
                  These badges are pure StyleX components with atomic CSS.
                </p>
              </div>
            </StyleXCardBody>
            <StyleXCardFooter>
              <StyleXButton variant="secondary" size="sm">
                Learn More
              </StyleXButton>
            </StyleXCardFooter>
          </StyleXCard>

          {/* Pure Tailwind Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Pure Tailwind Card</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                This card uses only Tailwind utility classes for styling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                  Utility Classes
                </span>
                <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium">
                  No JS Runtime
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                Tailwind Button
              </button>
            </div>
          </div>

          {/* Mixed Card - Tailwind structure, StyleX components inside */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-500 to-teal-500">
              <h3 className="text-xl font-semibold text-white">Mixed Approach</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-600">
                Tailwind container with StyleX components inside:
              </p>
              <div className="flex gap-2">
                <StyleXButton variant="primary" size="sm">StyleX</StyleXButton>
                <StyleXButton variant="secondary" size="sm">Buttons</StyleXButton>
              </div>
              <div className="flex gap-2">
                <StyleXBadge color="green">Mixed</StyleXBadge>
                <StyleXBadge color="blue">Styles</StyleXBadge>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Tailwind */}
        <div className="text-center text-purple-200 text-sm">
          <p>Both Tailwind v4 and StyleX babel plugin working together in Vite</p>
        </div>
      </div>
    </div>
  )
}

export default App
