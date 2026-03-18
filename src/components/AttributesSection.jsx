import { attributeNames, config } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'

export function AttributesSection() {
  const stateAttributes = useCharacterStore((state) => state.attributes)
  const setAttribute = useCharacterStore((state) => state.setAttribute)

  return (
    <section className={styles.attributes}>
      {Object.entries(attributeNames).map(([key, { label }]) => (
        <label htmlFor={key} key={key}>
          {label}
          <input
            id={key}
            placeholder={label}
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            value={stateAttributes[key]}
            onChange={(e) => setAttribute(key, e.target.value)}
          />
        </label>
      ))}
    </section>
  )
}
