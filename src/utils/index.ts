import { type SkillKey } from '../rules'

export const groupSkills = (entries: Partial<Record<SkillKey, number>>): Record<number, SkillKey[]> => {
  if (!entries) return {}

  return Object.entries(entries).reduce((group, [skill, value]) => {
    return {
      ...group,
      [value]: [...(group[value] || []), skill as SkillKey],
    }
  }, {} as Record<number, SkillKey[]>)
}

