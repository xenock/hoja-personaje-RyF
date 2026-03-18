import { Fragment } from 'react'
import { abilities, config } from '../db'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'

function AbilityRow({ abilityKey, label, attributeKey }) {
  const abilityVal = useCharacterStore(
    (state) => Number(state.abilities[abilityKey]) || config.abilities.min
  )
  const attributeVal = useCharacterStore(
    (state) => Number(state.attributes[attributeKey]) || config.attributes.min
  )
  const setAbility = useCharacterStore((state) => state.setAbility)

  const total = attributeVal + abilityVal

  return (
    <Fragment>
      <label htmlFor={abilityKey}>
        <input
          id={abilityKey}
          placeholder={label}
          type="number"
          min={config.abilities.min}
          max={config.abilities.max}
          value={abilityVal}
          onChange={(e) => setAbility(abilityKey, e.target.value)}
        />
        {`${label} `}
        {total}
      </label>
    </Fragment>
  )
}

export function AbilitiesGrid() {
  return (
    <section className={styles.abilities}>
      {abilities.actual.map(({ key, label, attribute }) => (
        <AbilityRow
          key={key}
          abilityKey={key}
          label={label}
          attributeKey={attribute}
        />
      ))}
    </section>
  )
}
