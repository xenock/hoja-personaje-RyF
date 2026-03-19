export const config = {
  attributes: {
    min: 4,
    max: 10,
  },
  skills: {
    min: 0,
    max: 10,
  },
  points: {
    realistic: 22,
    normal: 30,
  },
  tone: {
    specialistHeroic: {
      label: 'Especialista heroico',
      maxSkillsPerLevel: [3, 3, 3, 3, 3, 1],
    },
    versatileHeroic: {
      label: 'Versátil heroico',
      maxSkillsPerLevel: [6, 5, 4, 3, 2, 1],
    },
    specialistRealistic: {
      label: 'Especialista realista',
      maxSkillsPerLevel: [2, 2, 2, 2, 2],
    },
    versatileRealistic: {
      label: 'Versátil realista',
      maxSkillsPerLevel: [5, 4, 3, 2, 1],
    },
  },
} as const

export type Tone = keyof typeof config.tone
