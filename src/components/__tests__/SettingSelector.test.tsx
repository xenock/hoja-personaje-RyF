import { useCharacterStore } from '@store/useCharacterStore'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { SettingSelector } from '../SettingSelector'

describe('SettingSelector', () => {
  beforeEach(() => {
    // Reset store state to a known baseline
    useCharacterStore.setState({
      setting: 'actual',
      skills: {},
    })
  })

  it('renders all setting options', () => {
    render(<SettingSelector />)

    expect(screen.getByLabelText(/Actual/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Medieval/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Cifi/i)).toBeInTheDocument()
  })

  it('has the default setting selected', () => {
    render(<SettingSelector />)
    expect(screen.getByLabelText(/Actual/i)).toBeChecked()
  })

  it('updates the store setting when a different option is selected', async () => {
    const user = userEvent.setup()
    render(<SettingSelector />)

    const medievalRadio = screen.getByLabelText(/Medieval/i)
    await user.click(medievalRadio)

    expect(useCharacterStore.getState().setting).toBe('medieval')
    expect(medievalRadio).toBeChecked()
  })

  it('resets skills when setting changes', async () => {
    const user = userEvent.setup()

    useCharacterStore.setState({
      skills: { lookFor: 5 },
    })

    render(<SettingSelector />)

    const cifiRadio = screen.getByLabelText(/Cifi/i)
    await user.click(cifiRadio)

    expect(useCharacterStore.getState().skills).toEqual({})
  })
})
