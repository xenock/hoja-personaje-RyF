export const groupAbilities = (entries) => {
  if (!entries) return {}
  return Object.entries(entries).reduce((group, [ability, value]) => {
    return {
      ...group,
      [value]: [...(group[value] || []), ability],
    }
  }, {})
}
