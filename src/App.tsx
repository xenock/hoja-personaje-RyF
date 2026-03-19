import '@picocss/pico'
import { AttributesSection } from './components/AttributesSection'
import { SettingSelector } from './components/SettingSelector'
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
        <SettingSelector />
        <ToneSelector />
        <ToneSummary />
      </section>

      <SkillsGrid />
    </main>
  )
}

export default App
