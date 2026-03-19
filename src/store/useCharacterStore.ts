import { create } from 'zustand'
import { type Attribute, config, type SkillKey, type Tone } from '../rules'

interface CharacterState {
  attributes: Record<Attribute, number>
  tone: Tone
  skills: Partial<Record<SkillKey, number>>
  setAttribute: (key: Attribute, value: number) => void
  setTone: (tone: Tone) => void
  setSkill: (key: SkillKey, value: number) => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
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

  setSkill: (key, value) =>
    set((state) => ({
      skills: {
        ...state.skills,
        [key]: Number(value),
      },
    })),
}))
