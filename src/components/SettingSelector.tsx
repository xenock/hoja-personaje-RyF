import { type Setting, skills } from '../rules'
import { useCharacterStore } from '../store/useCharacterStore'

export function SettingSelector() {
  const currentSetting = useCharacterStore((state) => state.setting)
  const setSetting = useCharacterStore((state) => state.setSetting)

  return (
    <fieldset>
      <legend>Entorno de juego</legend>
      <select
        value={currentSetting}
        onChange={(e) => setSetting(e.target.value as Setting)}
      >
        {(Object.keys(skills) as Setting[]).map((key) => (
          <option key={key} value={key}>
            {key === 'actual'
              ? 'Actual'
              : key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>
    </fieldset>
  )
}
