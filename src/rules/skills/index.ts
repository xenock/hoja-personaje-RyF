import type { Attribute } from '../attributes'
import { actual } from './actual'
import { cifi } from './cifi'
import { medieval } from './medieval'

export const ALL_SKILLS_DATA = [...actual, ...medieval, ...cifi] as const

export type SkillId = (typeof ALL_SKILLS_DATA)[number]['id']

export interface Skill {
  attribute: Attribute
  label: string
  id: SkillId
}

export const skillMap = new Map<SkillId, Skill>(
  ALL_SKILLS_DATA.map((s) => [s.id, s as Skill]),
)

export const skills = {
  actual,
  medieval,
  cifi,
} as const

export type Setting = keyof typeof skills
