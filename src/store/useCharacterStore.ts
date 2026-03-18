import { create } from 'zustand'
import { config } from '../rules'

export const useCharacterStore = create((set) => ({
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

  setTone: (tone) => set({ tone: tone }),

  setSkill: (key, value) =>
    set((state) => ({
      skills: {
        ...state.skills,
        [key]: Number(value),
      },
    })),
}))
