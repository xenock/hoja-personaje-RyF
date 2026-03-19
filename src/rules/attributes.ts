export const attributeNames = {
  perception: {
    label: 'Percepción',
  },
  intelligence: {
    label: 'Inteligencia',
  },
  dexterity: {
    label: 'Destreza',
  },
  physical: {
    label: 'Físico',
  },
} as const

export type Attribute = keyof typeof attributeNames
