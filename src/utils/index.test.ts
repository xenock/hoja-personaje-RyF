import { describe, it, expect } from 'vitest'
import { groupSkills } from '.'

describe('groupAbilities', () => {
  it('should return an empty object if no entries are provided', () => {
    expect(groupSkills()).toEqual({})
    expect(groupSkills(null)).toEqual({})
  })

  it('should group skills by their numerical values', () => {
    const skills = {
      athletics: 3,
      brawl: 3,
      shoot: 2,
      investigate: 2,
      drive: 1,
    }

    const expected = {
      1: ['drive'],
      2: ['shoot', 'investigate'],
      3: ['athletics', 'brawl'],
    }

    expect(groupSkills(skills)).toEqual(expected)
  })
})
