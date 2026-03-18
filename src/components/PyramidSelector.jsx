import { config } from '../db'
import { useCharacterStore } from '../store/useCharacterStore'

export function PyramidSelector() {
  const { pyramid, setPyramid } = useCharacterStore()

  return (
    <fieldset>
      <legend>Tono de la partida</legend>
      {Object.entries(config.pyramid).map(([key, { label }]) => (
        <label htmlFor={key} key={key}>
          <input
            id={key}
            type="radio"
            name="pyramid"
            value={key}
            checked={pyramid === key}
            onChange={(e) => setPyramid(e.target.value)}
          />
          {label}
        </label>
      ))}
    </fieldset>
  )
}
