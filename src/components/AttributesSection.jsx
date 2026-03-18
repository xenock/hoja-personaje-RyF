import { attributes, config } from '../db'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'

export function AttributesSection() {
  const { attributes: stateAttributes, setAttribute } = useCharacterStore()

  return (
    <section className={styles.attributes}>
      {Object.entries(attributes).map(([key, { label }]) => (
        <label htmlFor={key} key={key}>
          {label}
          <input
            id={key}
            placeholder={label}
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            // Estado controlado local
            value={stateAttributes[key]}
            onChange={(e) => setAttribute(key, e.target.value)}
          />
        </label>
      ))}
    </section>
  )
}
