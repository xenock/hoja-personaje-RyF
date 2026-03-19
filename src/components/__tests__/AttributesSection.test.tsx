import { useCharacterStore } from '@store/useCharacterStore'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { AttributesSection } from '../AttributesSection'

describe('AttributesSection', () => {
  beforeEach(() => {
    useCharacterStore.setState({
      attributes: {
        perception: 4,
        intelligence: 4,
        dexterity: 4,
        physical: 4,
      },
    })
  })

  it('renders all four attributes', () => {
    render(<AttributesSection />)
    expect(screen.getByLabelText(/Percepción/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Inteligencia/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Destreza/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Físico/i)).toBeInTheDocument()
  })

  it('shows the correct levels from the store', () => {
    useCharacterStore.setState({
      attributes: { perception: 8, intelligence: 4, dexterity: 4, physical: 4 },
    })
    render(<AttributesSection />)
    expect(screen.getByLabelText(/Percepción/i)).toHaveValue(8)
    expect(screen.getByLabelText(/Inteligencia/i)).toHaveValue(4)
    expect(screen.getByLabelText(/Destreza/i)).toHaveValue(4)
    expect(screen.getByLabelText(/Físico/i)).toHaveValue(4)
  })

  it('updates the store when an attribute is changed', async () => {
    render(<AttributesSection />)

    const input = screen.getByLabelText(/Físico/i)
    fireEvent.change(input, { target: { value: '7' } })

    expect(useCharacterStore.getState().attributes.physical).toBe(7)
  })

  it('applies clamping (min/max) logic when values are out of bounds', async () => {
    render(<AttributesSection />)

    const input = screen.getByLabelText(/Físico/i)

    fireEvent.change(input, { target: { value: '20' } })
    expect(useCharacterStore.getState().attributes.physical).toBe(10)

    fireEvent.change(input, { target: { value: '1' } })
    expect(useCharacterStore.getState().attributes.physical).toBe(4)
  })
})
