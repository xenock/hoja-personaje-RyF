import { config, type Tone } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'

export function ToneSelector() {
  const tone = useCharacterStore((state) => state.tone)
  const setTone = useCharacterStore((state) => state.setTone)

  return (
    <fieldset>
      <legend>Tono de la partida</legend>
      {Object.entries(config.tone).map(([key, { label }]) => (
        <label htmlFor={key} key={key}>
          <input
            id={key}
            type="radio"
            name="tone"
            value={key}
            checked={tone === key}
            onChange={(e) => setTone(e.target.value as Tone)}
          />
          {label}
        </label>
      ))}
    </fieldset>
  )
}
