import { skills } from '../rules'
import styles from '../style.module.css'
import { SkillRow } from './SkillRow'

export const SkillsGrid = () => (
  <section className={styles.skills}>
    {skills.actual.map((skill) => (
      <SkillRow key={skill.id} {...skill} />
    ))}
  </section>
)
