import { useFormContext } from 'react-hook-form'
import { config } from '../db'

export function PyramidSelector() {
  const { register } = useFormContext()

  return (
    <fieldset>
      <legend>Tono de la partida</legend>
      {Object.entries(config.pyramid).map(([key, { label }]) => (
        <label htmlFor={key} key={key}>
          <input id={key} type="radio" {...register('pyramid')} value={key} />
          {label}
        </label>
      ))}
    </fieldset>
  )
}
