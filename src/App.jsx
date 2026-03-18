import '@picocss/pico'
import { FormProvider, useForm } from 'react-hook-form'
import { AbilitiesGrid } from './components/AbilitiesGrid'
import { AttributesSection } from './components/AttributesSection'
import { PyramidSelector } from './components/PyramidSelector'
import { PyramidValidator } from './components/PyramidValidator'

function App() {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  )
}

export default App
