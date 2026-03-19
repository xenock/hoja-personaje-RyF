import { config, type Skill } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'

export const SkillRow = ({ id, label, attribute }: Skill) => {
  const skillVal = useCharacterStore(
    (state) => Number(state.skills[id]) || config.skills.min,
  )
  const attributeVal = useCharacterStore(
    (state) => Number(state.attributes[attribute]) || config.attributes.min,
  )
  const setSkill = useCharacterStore((state) => state.setSkill)

  const total = attributeVal + skillVal

  return (
    <label htmlFor={id}>
      <input
        id={id}
        placeholder={label}
        type="number"
        min={config.skills.min}
        max={config.skills.max}
        value={skillVal}
        onChange={(e) => setSkill(id, Number(e.target.value))}
      />
      {`${label} `}
      {total}
    </label>
  )
}
