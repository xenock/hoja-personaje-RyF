import '@picocss/pico'
import { AttributesSection } from './components/AttributesSection'
import { PyramidSelector } from './components/PyramidSelector'
import { PyramidValidator } from './components/PyramidValidator'
import { AbilitiesGrid } from './components/AbilitiesGrid'

function App() {
  return (
    <main className="container-fluid">
      <header>
        <AttributesSection />
      </header>

      <section>
        <PyramidSelector />
        <PyramidValidator />
      </section>

      <AbilitiesGrid />
    </main>
  )
}

export default App
