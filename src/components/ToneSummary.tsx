import { config, skills } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'
import styles from '../style.module.css'
import { groupSkills } from '../utils'

export function ToneSummary() {
  const tone = useCharacterStore((state) => state.tone)
  const skillsState = useCharacterStore((state) => state.skills)

  const toneValues = config.tone[tone]?.maxSkillsPerLevel || []
  const groupedAbilities = groupSkills(skillsState)

  return (
    <div className="grid">
      {toneValues.map((value, index) => {
        const level = index + 1
        const count = groupedAbilities[level]?.length || 0
        const isExactLimit = count === value
        const isOverLimit = count > value

        return (
          <div key={level}>
            <p
              className={`${isExactLimit ? styles.limit : ''} ${
                isOverLimit ? styles.off : ''
              }`}
            >
              {value} {value === 1 ? 'habilidad' : 'habilidades'} de nivel{' '}
              {level}:
            </p>
            <ul>
              {groupedAbilities[level]?.map((key) => {
                const abilityData = skills.actual.find((a) => a.id === key)
                return <li key={key}>{abilityData?.label}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
