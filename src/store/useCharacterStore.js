import { create } from 'zustand'
import { config } from '../db'

export const useCharacterStore = create((set) => ({
  attributes: {
    perception: config.attributes.min,
    intelligence: config.attributes.min,
    dexterity: config.attributes.min,
    physical: config.attributes.min,
  },
  tone: 'specialistHeroic',
  abilities: {},

  setAttribute: (key, value) =>
    set((state) => ({
      attributes: {
        ...state.attributes,
        [key]: Number(value),
      },
    })),

  setTone: (tone) => set({ tone: tone }),

  setAbility: (key, value) =>
    set((state) => ({
      abilities: {
        ...state.abilities,
        [key]: Number(value),
      },
    })),
}))
