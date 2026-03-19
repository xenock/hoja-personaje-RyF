import { useCharacterStore } from '@store/useCharacterStore'
import { act, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { SkillsGrid } from '../SkillsGrid'

describe('SkillsGrid', () => {
  beforeEach(() => {
    useCharacterStore.setState({
      setting: 'actual',
      attributes: { perception: 4, intelligence: 4, dexterity: 4, physical: 4 },
      skills: {},
    })
  })

  it('renders skills for the "actual" setting by default', () => {
    render(<SkillsGrid />)
    expect(screen.getByText(/Buscar/i)).toBeInTheDocument()
    expect(screen.getByText(/Historia/i)).toBeInTheDocument()
  })

  it('changes rendered skills when setting changes', () => {
    const { rerender } = render(<SkillsGrid />)
    expect(screen.queryByText(/Cabalgar/i)).not.toBeInTheDocument()

    act(() => {
      useCharacterStore.setState({ setting: 'medieval' })
    })
    rerender(<SkillsGrid />)

    expect(screen.getByText(/Cabalgar/i)).toBeInTheDocument()
    expect(screen.queryByText(/Informática/i)).not.toBeInTheDocument()
  })
})
