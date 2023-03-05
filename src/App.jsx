import '@picocss/pico'
import { useState, useEffect } from 'react'
import { abilities, attributes, rasgos, config } from './db'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <main className="container-fluid">
      <header>
        <section style={{ columns: 4 }}>
          {Object.entries(attributes).map(([key, { label }]) => (
            <>
              <label htmlFor={key}>{label}</label>
              <input
                name={key}
                placeholder={label}
                {...register(key)}
                type="number"
                min={config.attributes.min}
                max={config.attributes.max}
                defaultValue={config.attributes.min}
              />
            </>
          ))}
        </section>
      </header>
      <section style={{ columns: 3 }}>
        {abilities.actual.map(({ key, label, attribute }) => (
          <article>
            <label htmlFor={key}>{label}</label>
            <input
              name={key}
              placeholder={label}
              {...register(key)}
              type="number"
              min={config.abilities.min}
              max={config.abilities.max}
              defaultValue={config.abilities.min}
            />
            <p>{`${
              Number(watch(attribute, config.abilities.min)) +
              Number(watch(key, 0))
            }`}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
