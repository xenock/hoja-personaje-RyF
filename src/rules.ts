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

const actual = [
  { attribute: 'perception', label: 'Advertir/Notar', id: 'warn' },
  { attribute: 'dexterity', label: 'Armas a Distancia', id: 'remoteWeapons' },
  {
    attribute: 'physical',
    label: 'Armas Cuerpo a Cuerpo',
    id: 'meleeWeapons',
  },
  { attribute: 'physical', label: 'Atletismo', id: 'athletics' },
  { attribute: 'perception', label: 'Bailar', id: 'dance' },
  { attribute: 'perception', label: 'Buscar', id: 'lookFor' },
  { attribute: 'intelligence', label: 'Callejeo', id: 'callejeo' },
  { attribute: 'intelligence', label: 'Comercio', id: 'trade' },
  { attribute: 'dexterity', label: 'Conducir', id: 'drive' },
  { attribute: 'dexterity', label: 'Esquivar', id: 'dodge' },
  { attribute: 'intelligence', label: 'Historia', id: 'history' },
  { attribute: 'intelligence', label: 'Idiomas', id: 'languages' },
  { attribute: 'intelligence', label: 'Informática', id: 'computing' },
  { attribute: 'intelligence', label: 'Leyes', id: 'laws' },
  { attribute: 'intelligence', label: 'Mecánica', id: 'mechanics' },
  { attribute: 'intelligence', label: 'Medicina', id: 'medicine' },
  { attribute: 'perception', label: 'Música', id: 'music' },
  { attribute: 'intelligence', label: 'Ocultismo', id: 'occultism' },
  { attribute: 'perception', label: 'Reflejos', id: 'reflexes' },
  { attribute: 'dexterity', label: 'Pilotar', id: 'pilot' },
  { attribute: 'dexterity', label: 'Sigilo', id: 'stealth' },
  { attribute: 'intelligence', label: 'Supervivencia', id: 'survival' },
] as const

export type SkillId = (typeof actual)[number]['id']

export interface Skill {
  attribute: Attribute
  label: string
  id: SkillId
}

export const skills = { actual }

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
      values: [3, 3, 3, 3, 3, 1],
    },
    versatileHeroic: { label: 'Versátil heroico', values: [6, 5, 4, 3, 2, 1] },
    specialistRealistic: {
      label: 'Especialista realista',
      values: [2, 2, 2, 2, 2],
    },
    versatileRealistic: { label: 'Versátil realista', values: [5, 4, 3, 2, 1] },
  },
} as const

export type Tone = keyof typeof config.tone

export const rasgos = [
  { nombre: 'Nombre', longitud: 'corto' },
  { nombre: 'Altura', longitud: 'corto' },
  { nombre: 'Ojos', longitud: 'corto' },
  { nombre: 'Edad', longitud: 'corto' },
  { nombre: 'Peso', longitud: 'corto' },
  { nombre: 'Pelo', longitud: 'corto' },
  { nombre: 'Lugar de nacimiento', longitud: 'largo' },
  { nombre: 'Ocupacion', longitud: 'largo' },
  { nombre: 'Descripcion', longitud: 'largo' },
]
