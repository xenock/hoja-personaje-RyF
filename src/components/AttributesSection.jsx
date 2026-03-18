import { useFormContext } from 'react-hook-form'
import { attributes, config } from '../db'
import styles from '../style.module.css'

export function AttributesSection() {
  const { register } = useFormContext()

  return (
    <section className={styles.attributes}>
      {Object.entries(attributes).map(([key, { label }]) => (
        <label htmlFor={key} key={key}>
          {label}
          <input
            id={key}
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
  )
}
