import { config } from '@rules'
import { useCharacterStore } from '@store/useCharacterStore'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ToneSummary } from '../ToneSummary'

describe('ToneSummary', () => {
  beforeEach(() => {
    useCharacterStore.setState({
      tone: 'specialistHeroic',
      skills: {},
    })
  })

  it('renders limits for the current tone dynamically', () => {
    const tone = useCharacterStore.getState().tone
    const toneConfig = config.tone[tone]

    render(<ToneSummary />)

    toneConfig.maxSkillsPerLevel.forEach((max, index) => {
      const level = index + 1
      const label = max === 1 ? 'habilidad' : 'habilidades'
      const regex = new RegExp(`${max} ${label} de nivel ${level}:`, 'i')
      expect(screen.getByText(regex)).toBeInTheDocument()
    })
  })

  it('lists skills assigned to each level', () => {
    useCharacterStore.setState({
      skills: {
        lookFor: 1,
        warn: 1,
        drive: 2,
      },
    })

    render(<ToneSummary />)

    const level1Section = screen.getByText(
      /3 habilidades de nivel 1:/i,
    ).parentElement
    expect(level1Section).toHaveTextContent(/Buscar/i)
    expect(level1Section).toHaveTextContent(/Advertir\/Notar/i)

    const level2Section = screen.getByText(
      /3 habilidades de nivel 2:/i,
    ).parentElement
    expect(level2Section).toHaveTextContent(/Conducir/i)
  })

  it('applies limit class when at the exact limit', () => {
    useCharacterStore.setState({
      skills: {
        lookFor: 1,
        warn: 1,
        athletics: 1,
      },
    })

    render(<ToneSummary />)

    const text = screen.getByText(/3 habilidades de nivel 1:/i)
    expect(text.className).toMatch(/limit/)
  })

  it('applies off class when over the limit', () => {
    useCharacterStore.setState({
      skills: {
        lookFor: 1,
        warn: 1,
        athletics: 1,
        dance: 1,
      },
    })

    render(<ToneSummary />)

    const text = screen.getByText(/3 habilidades de nivel 1:/i)
    expect(text.className).toMatch(/off/)
  })
})
