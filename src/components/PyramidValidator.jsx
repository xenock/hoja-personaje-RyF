import { useFormContext } from 'react-hook-form'
import { abilities, config } from '../db'
import styles from '../style.module.css'
import { groupAbilities } from '../utils/groupAbilities'

export function PyramidValidator() {
  const { watch, getValues } = useFormContext()
  const selectedPyramid = watch('pyramid')
  const pyramidValues = config.pyramid[selectedPyramid]?.values || []

  const groupedAbilities = groupAbilities(getValues('abilities'))

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
