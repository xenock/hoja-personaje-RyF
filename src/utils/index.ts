import type { SkillKey } from '../rules'

export const groupSkills = (
  entries: Partial<Record<SkillKey, number>>,
): Record<number, SkillKey[]> => {
  if (!entries) return {}

  return Object.entries(entries).reduce(
    (group, [skill, value]) => {
      group[value] = [...(group[value] || []), skill as SkillKey]
      return group
    },
    {} as Record<number, SkillKey[]>,
  )
}
