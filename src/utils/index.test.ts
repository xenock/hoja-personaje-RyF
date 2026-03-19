import { describe, expect, it } from 'vitest'
import { clamp, groupSkills } from '.'

describe('groupSkills', () => {
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

describe('clamp', () => {
  it('should return the value if it is within range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  it('should return the minimum if the value is below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
  })

  it('should return the maximum if the value is above range', () => {
    expect(clamp(15, 0, 10)).toBe(10)
  })

  it('should work with negative ranges', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
    expect(clamp(0, -5, 5)).toBe(0)
    expect(clamp(10, -5, 5)).toBe(5)
  })
})
