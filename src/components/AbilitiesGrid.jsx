import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'
import { abilities, config } from '../db'
import styles from '../style.module.css'

export function AbilitiesGrid() {
  const { register, watch } = useFormContext()

  return (
    <section className={styles.abilities}>
      {abilities.actual.map(({ key, label, attribute }) => {
        const attributeVal =
          Number(watch(`attributes.${attribute}`, config.attributes.min)) || 0
        const abilityVal =
          Number(watch(`abilities.${key}`, config.abilities.min)) || 0
        const total = attributeVal + abilityVal

        return (
          <Fragment key={key}>
            <label htmlFor={key}>
              <input
                id={key}
                placeholder={label}
                {...register(`abilities.${key}`)}
                type="number"
                min={config.abilities.min}
                max={config.abilities.max}
                defaultValue={config.abilities.min}
              />
              {`${label} `}
              {total}
            </label>
          </Fragment>
        )
      })}
    </section>
  )
}
