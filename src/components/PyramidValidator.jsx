import { abilities, config } from '../db'
import { useCharacterStore } from '../store/useCharacterStore'
import { groupAbilities } from '../utils/groupAbilities'
import styles from '../style.module.css'

export function PyramidValidator() {
  const pyramid = useCharacterStore((state) => state.pyramid)
  const abilitiesState = useCharacterStore((state) => state.abilities)

  const pyramidValues = config.pyramid[pyramid]?.values || []
  const groupedAbilities = groupAbilities(abilitiesState)

  return (
    <div className="grid">
      {pyramidValues.map((value, index) => {
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
                const abilityData = abilities.actual.find((a) => a.key === key)
                return <li key={key}>{abilityData?.label}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
