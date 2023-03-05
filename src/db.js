const actual = [
  { attribute: 'perception', label: 'Advertir/Notar', key: 'warn' },
  { attribute: 'dexterity', label: 'Armas a Distancia', key: 'remoteWeapons' },
  {
    attribute: 'physical',
    label: 'Armas Cuerpo a Cuerpo',
    key: 'meleeWeapons',
  },
  { attribute: 'physical', label: 'Atletismo', key: 'athletics' },
  { attribute: 'perception', label: 'Bailar', key: 'dance' },
  { attribute: 'perception', label: 'Buscar', key: 'lookFor' },
  { attribute: 'intelligence', label: 'Callejeo', key: 'callejeo' },
  { attribute: 'intelligence', label: 'Comercio', key: 'trade' },
  { attribute: 'dexterity', label: 'Conducir', key: 'drive' },
  { attribute: 'dexterity', label: 'Esquivar', key: 'dodge' },
  { attribute: 'intelligence', label: 'Historia', key: 'history' },
  { attribute: 'intelligence', label: 'Idiomas', key: 'languages' },
  { attribute: 'intelligence', label: 'Informática', key: 'computing' },
  { attribute: 'intelligence', label: 'Leyes', key: 'laws' },
  { attribute: 'intelligence', label: 'Mecánica', key: 'mechanics' },
  { attribute: 'intelligence', label: 'Medicina', key: 'medicine' },
  { attribute: 'perception', label: 'Música', key: 'music' },
  { attribute: 'intelligence', label: 'Ocultismo', key: 'occultism' },
  { attribute: 'perception', label: 'Reflejos', key: 'reflexes' },
  { attribute: 'dexterity', label: 'Pilotar', key: 'pilot' },
  { attribute: 'dexterity', label: 'Sigilo', key: 'stealth' },
  { attribute: 'intelligence', label: 'Supervivencia', key: 'survival' },
]

export const abilities = { actual }

export const config = {
  attributes: {
    min: 4,
    max: 10,
  },
  abilities: {
    min: 0,
    max: 10,
  },
  points: {
    realistic: 22,
    normal: 30,
  },
  pyramid: {
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
}

export const attributes = {
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
}

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
