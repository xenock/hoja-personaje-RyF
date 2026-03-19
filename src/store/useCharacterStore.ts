import {
  type Attribute,
  config,
  type Setting,
  type SkillId,
  type Tone,
} from '@rules'
import { clamp } from '@utils'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface CharacterState {
  attributes: Record<Attribute, number>
  tone: Tone
  setting: Setting
  skills: Partial<Record<SkillId, number>>
  setAttribute: (key: Attribute, value: number) => void
  setTone: (tone: Tone) => void
  setSetting: (setting: Setting) => void
  setSkill: (id: SkillId, value: number) => void
}

export const useCharacterStore = create<CharacterState>()(
  devtools((set) => ({
    attributes: {
      perception: config.attributes.min,
      intelligence: config.attributes.min,
      dexterity: config.attributes.min,
      physical: config.attributes.min,
    },
    tone: 'specialistHeroic',
    setting: 'actual',
    skills: {},

    setAttribute: (key, value) =>
      set((state) => ({
        attributes: {
          ...state.attributes,
          [key]: clamp(
            Number(value),
            config.attributes.min,
            config.attributes.max,
          ),
        },
      })),

    setTone: (tone) => set({ tone, skills: {} }),
    setSetting: (setting) => set({ setting, skills: {} }),

    setSkill: (id, value) =>
      set((state) => ({
        skills: {
          ...state.skills,
          [id]: clamp(Number(value), config.skills.min, config.skills.max),
        },
      })),
  })),
)
