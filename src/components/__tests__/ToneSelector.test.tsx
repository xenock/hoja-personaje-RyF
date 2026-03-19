import { useCharacterStore } from '@store/useCharacterStore'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { ToneSelector } from '../ToneSelector'

describe('ToneSelector', () => {
  beforeEach(() => {
    useCharacterStore.setState({
      tone: 'specialistHeroic',
      skills: {},
    })
  })

  it('renders all tone options', () => {
    render(<ToneSelector />)

    expect(screen.getByLabelText(/Especialista heroico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Versátil heroico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Especialista realista/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Versátil realista/i)).toBeInTheDocument()
  })

  it('has the default tone selected', () => {
    render(<ToneSelector />)
    expect(screen.getByLabelText(/Especialista heroico/i)).toBeChecked()
  })

  it('updates the store tone when a different option is selected', async () => {
    const user = userEvent.setup()
    render(<ToneSelector />)

    const versatileHeroicRadio = screen.getByLabelText(/Versátil heroico/i)
    await user.click(versatileHeroicRadio)

    expect(useCharacterStore.getState().tone).toBe('versatileHeroic')
    expect(versatileHeroicRadio).toBeChecked()
  })

  it('reset the store when tone changes', async () => {
    const user = userEvent.setup()

    useCharacterStore.setState({
      skills: { lookFor: 5 },
    })

    render(<ToneSelector />)

    const versatileRealisticRadio = screen.getByLabelText(/Versátil realista/i)
    await user.click(versatileRealisticRadio)

    expect(useCharacterStore.getState().skills).toEqual({})
  })
})
