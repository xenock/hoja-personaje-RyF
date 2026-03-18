import { Fragment } from 'react'
import { skills, config } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'

function SkillRow({ skillKey, label, attributeKey }) {
  const skillVal = useCharacterStore(
    (state) => Number(state.skills[skillKey]) || config.skills.min,
  )
  const attributeVal = useCharacterStore(
    (state) => Number(state.attributes[attributeKey]) || config.attributes.min,
  )
  const setSkill = useCharacterStore((state) => state.setSkill)

  const total = attributeVal + skillVal

  return (
    <Fragment>
      <label htmlFor={skillKey}>
        <input
          id={skillKey}
          placeholder={label}
          type="number"
          min={config.skills.min}
          max={config.skills.max}
          value={skillVal}
          onChange={(e) => setSkill(skillKey, e.target.value)}
        />
        {`${label} `}
        {total}
      </label>
    </Fragment>
  )
}

export function SkillsGrid() {
  return (
    <section className={styles.skills}>
      {skills.actual.map(({ key, label, attribute }) => (
        <SkillRow
          key={key}
          skillKey={key}
          label={label}
          attributeKey={attribute}
        />
      ))}
    </section>
  )
}
