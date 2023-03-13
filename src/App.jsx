import '@picocss/pico'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { abilities, attributes, config } from './db'
import styles from './style.module.css'

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
        <section className={styles.attributes}>
          {Object.entries(attributes).map(([key, { label }], index) => (
            <label htmlFor={key} key={index}>
              {label}
              <input
                name={key}
                placeholder={label}
                {...register(`attributes.${key}`)}
                type="number"
                min={config.attributes.min}
                max={config.attributes.max}
                defaultValue={config.attributes.min}
              />
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
                className={`${
                  group(getValues('abilities'))[index + 1]?.length === value
                    ? styles.limit
                    : ''
                }
                  ${
                    group(getValues('abilities'))[index + 1]?.length > value
                      ? styles.off
                      : ''
                  }`}
              >
                {value} habilidades de nivel {index + 1} :
              </p>
              <ul>
                {group(getValues('abilities'))[index + 1]?.map((key) => (
                  <li>
                    {
                      abilities.actual.find((ability) => ability.key === key)
                        .label
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.abilities}>
        {abilities.actual.map(({ key, label, attribute }, index) => (
          <Fragment key={index}>
            <label htmlFor={key} key={index}>
              <input
                name={key}
                placeholder={label}
                {...register(`abilities.${key}`)}
                type="number"
                min={config.abilities.min}
                max={config.abilities.max}
                defaultValue={config.abilities.min}
              />
              {`${label} `}
              {Number(watch(`attributes.${attribute}`, config.attributes.min)) +
                Number(watch(`abilities.${key}`, config.abilities.min))}
            </label>
          </Fragment>
        ))}
      </section>
    </main>
  )
}

export default App
