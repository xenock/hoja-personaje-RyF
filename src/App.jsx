import '@picocss/pico'
import { AttributesSection } from './components/AttributesSection'
import { ToneSelector } from './components/ToneSelector'
import { ToneValidator } from './components/ToneValidator'
import { AbilitiesGrid } from './components/AbilitiesGrid'

function App() {
  return (
    <main className="container-fluid">
      <header>
        <AttributesSection />
      </header>

      <section>
        <ToneSelector />
        <ToneValidator />
      </section>

      <AbilitiesGrid />
    </main>
  )
}

export default App
