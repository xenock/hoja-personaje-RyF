import { Fragment } from 'react'
import { abilities, config } from '../db'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'

export function AbilitiesGrid() {
  const abilitiesState = useCharacterStore((state) => state.abilities)
  const attributesState = useCharacterStore((state) => state.attributes)
  const setAbility = useCharacterStore((state) => state.setAbility)

  return (
    <section className={styles.abilities}>
      {abilities.actual.map(({ key, label, attribute }) => {
        const attributeVal =
          Number(attributesState[attribute]) || config.attributes.min
        const abilityVal = Number(abilitiesState[key]) || config.abilities.min
        const total = attributeVal + abilityVal

        return (
          <Fragment key={key}>
            <label htmlFor={key}>
              <input
                id={key}
                placeholder={label}
                type="number"
                min={config.abilities.min}
                max={config.abilities.max}
                value={abilityVal}
                onChange={(e) => setAbility(key, e.target.value)}
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
