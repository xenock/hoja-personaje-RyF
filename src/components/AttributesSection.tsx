import { type Attribute, attributeNames, config } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'

export function AttributesSection() {
  const stateAttributes = useCharacterStore((state) => state.attributes)
  const setAttribute = useCharacterStore((state) => state.setAttribute)

  return (
    <section className={styles.attributes}>
      {(Object.keys(attributeNames) as Attribute[]).map((key) => (
        <label htmlFor={key} key={key}>
          {attributeNames[key].label}
          <input
            id={key}
            placeholder={attributeNames[key].label}
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            value={stateAttributes[key]}
            onChange={(e) => setAttribute(key, Number(e.target.value))}
          />
        </label>
      ))}
    </section>
  )
}
