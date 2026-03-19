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

export const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max)
