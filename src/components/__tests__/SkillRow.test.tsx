import { useCharacterStore } from '@store/useCharacterStore'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { SkillRow } from '../SkillRow'

describe('SkillRow', () => {
  const mockSkill = {
    id: 'lookFor' as const,
    label: 'Buscar',
    attribute: 'perception' as const,
  }

  beforeEach(() => {
    useCharacterStore.setState({
      attributes: { perception: 4, intelligence: 4, dexterity: 4, physical: 4 },
      skills: {},
    })
  })

  it('renders skill label and initial value', () => {
    render(<SkillRow {...mockSkill} />)
    expect(screen.getByText(/Buscar/i)).toBeInTheDocument()
    expect(screen.getByRole('spinbutton')).toHaveValue(0)
  })

  it('calculates the total (attribute + skill)', () => {
    useCharacterStore.setState({
      attributes: { perception: 8, intelligence: 4, dexterity: 4, physical: 4 },
      skills: { lookFor: 2 },
    })

    render(<SkillRow {...mockSkill} />)

    expect(screen.getByText(/10/)).toBeInTheDocument()
  })

  it('updates store when skill value changes', () => {
    render(<SkillRow {...mockSkill} />)

    const input = screen.getByRole('spinbutton')
    fireEvent.change(input, { target: { value: '5' } })

    expect(useCharacterStore.getState().skills.lookFor).toBe(5)
  })

  it('reflects attribute changes in the total', () => {
    const { rerender } = render(<SkillRow {...mockSkill} />)

    expect(screen.getByText(/4/)).toBeInTheDocument()

    act(() => {
      useCharacterStore.setState({
        attributes: {
          perception: 6,
          intelligence: 4,
          dexterity: 4,
          physical: 4,
        },
      })
    })

    rerender(<SkillRow {...mockSkill} />)
    expect(screen.getByText(/6/)).toBeInTheDocument()
  })
})
