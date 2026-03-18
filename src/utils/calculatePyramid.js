export const groupAbilities = (entries) => {
  if (!entries) return {}
  return Object.entries(entries).reduce((group, [skill, value]) => {
    return {
      ...group,
      [value]: [...(group[value] || []), ability],
    }
  }, {})
}
