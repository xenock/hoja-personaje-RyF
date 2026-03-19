import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type Attribute, config, type SkillId, type Tone } from '../rules'

interface CharacterState {
  attributes: Record<Attribute, number>
  tone: Tone
  skills: Partial<Record<SkillId, number>>
  setAttribute: (key: Attribute, value: number) => void
  setTone: (tone: Tone) => void
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
    skills: {},

    setAttribute: (key, value) =>
      set((state) => ({
        attributes: {
          ...state.attributes,
          [key]: Number(value),
        },
      })),

    setTone: (tone) => set({ tone }),

    setSkill: (id, value) =>
      set((state) => ({
        skills: {
          ...state.skills,
          [id]: Number(value),
        },
      })),
  })),
)
