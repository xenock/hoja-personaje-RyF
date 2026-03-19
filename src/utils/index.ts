import type { SkillId } from '../rules'

export const groupSkills = (
  entries?: Partial<Record<SkillId, number>> | null,
): Record<number, SkillId[]> => {
  if (!entries) return {}

  return Object.entries(entries).reduce(
    (group, [skill, value]) => {
      group[value] = [...(group[value] || []), skill as SkillId]
      return group
    },
    {} as Record<number, SkillId[]>,
  )
}
