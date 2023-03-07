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

  const group = (entries) => {
    if (!entries) return null
    return Object.entries(entries).reduce((group, [ability, value]) => {
      return {
        ...group,
        [value]: [...(group[value] || []), ability],
      }
    }, {})
  }

  return (
    <main className="container-fluid">
      <header>
        <section style={{ columns: 4 }}>
          {Object.entries(attributes).map(([key, { label }], index) => (
            <label htmlFor={key} key={index}>
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
          {Object.entries(config.pyramid).map(([key, { label }], index) => (
            <label htmlFor={key} key={index}>
              <input type="radio" {...register('pyramid')} value={key} />
              {label}
            </label>
          ))}
        </fieldset>
        <div className="grid">
          {config.pyramid[watch('pyramid')]?.values.map((value, index) => (
            <div>
              <p
                style={
                  group(getValues('abilities'))[index + 1]?.length === value
                    ? { color: 'green' }
                    : { color: 'red' }
                }
              >
                {value} habilidades de nivel {index + 1} :
              </p>
              {group(getValues('abilities'))[index + 1]?.map((key) => (
                <p>
                  {
                    abilities.actual.find((ability) => ability.key === key)
                      .label
                  }
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section style={{ columns: 3 }}>
        {abilities.actual.map(({ key, label, attribute }, index) => (
          <article key={index}>
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
              Number(watch(`attributes.${attribute}`, config.attributes.min)) +
              Number(watch(`abilities.${key}`, config.abilities.min))
            }`}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
