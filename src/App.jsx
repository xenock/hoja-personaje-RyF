import '@picocss/pico'
import { useState, useEffect } from 'react'
import { abilities, attributes, rasgos, config } from './db'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm()

  console.log(getValues())

  return (
    <main className="container-fluid">
      <header>
        <section style={{ columns: 4 }}>
          {Object.entries(attributes).map(([key, { label }]) => (
            <label htmlFor={key}>
              <input
                name={key}
                placeholder={label}
                {...register(`attributes.${key}`)}
                type="number"
                min={config.attributes.min}
                max={config.attributes.max}
                defaultValue={config.attributes.min}
              />
              {label}
            </label>
          ))}
        </section>
      </header>
      <section>
        <fieldset>
          <legend>Tono de la partida</legend>
          {Object.entries(config.pyramid).map(([key, { label }]) => (
            <label htmlFor={key}>
              <input type="radio" {...register('pyramid')} value={key} />
              {label}
            </label>
          ))}
        </fieldset>
        {config.pyramid[watch('pyramid')]?.values.map((value, index) => (
          <p>
            {value} habilidades de nivel {index + 1}
          </p>
        ))}
      </section>
      <section style={{ columns: 3 }}>
        {abilities.actual.map(({ key, label, attribute }) => (
          <article>
            <label htmlFor={key}>
              <input
                name={key}
                placeholder={label}
                {...register(`abilities.${key}`)}
                type="number"
                min={config.abilities.min}
                max={config.abilities.max}
                defaultValue={config.abilities.min}
              />
              {label}
            </label>
            <p>{`${
              Number(watch(`attributes.${attribute}`, config.abilities.min)) +
              Number(watch(`abilities.${key}`, 0))
            }`}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
