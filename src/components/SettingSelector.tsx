import { type Setting, skills } from '@rules'
import { useCharacterStore } from '@store/useCharacterStore'

export function SettingSelector() {
  const currentSetting = useCharacterStore((state) => state.setting)
  const setSetting = useCharacterStore((state) => state.setSetting)

  return (
    <fieldset>
      <legend>Entorno de juego</legend>
      {(Object.keys(skills) as Setting[]).map((key) => (
        <label htmlFor={key} key={key}>
          <input
            id={key}
            type="radio"
            name="setting"
            value={key}
            checked={currentSetting === key}
            onChange={(e) => setSetting(e.target.value as Setting)}
          />
          {key === 'actual'
            ? 'Actual'
            : key.charAt(0).toUpperCase() + key.slice(1)}
        </label>
      ))}
    </fieldset>
  )
}
