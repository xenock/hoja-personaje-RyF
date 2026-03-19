import '@picocss/pico'
import { AttributesSection } from './components/AttributesSection'
import { SkillsGrid } from './components/SkillsGrid'
import { ToneSelector } from './components/ToneSelector'
import { ToneSummary } from './components/ToneSummary'

function App() {
  return (
    <main className="container-fluid">
      <header>
        <AttributesSection />
      </header>

      <section>
        <ToneSelector />
        <ToneSummary />
      </section>

      <SkillsGrid />
    </main>
  )
}

export default App
