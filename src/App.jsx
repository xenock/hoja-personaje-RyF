import '@picocss/pico'
import { AttributesSection } from './components/AttributesSection'
import { ToneSelector } from './components/ToneSelector'
import { ToneSummary } from './components/ToneSummary'
import { SkillsGrid } from './components/SkillsGrid'

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
