import { skills } from '@rules'
import { useCharacterStore } from '@store/useCharacterStore'
import styles from '../style.module.css'
import { SkillRow } from './SkillRow'

export function SkillsGrid() {
  const setting = useCharacterStore((state) => state.setting)
  const activeSkills = skills[setting]

  return (
    <section className={styles.skills}>
      {activeSkills.map((skill) => (
        <SkillRow key={skill.id} {...skill} />
      ))}
    </section>
  )
}
