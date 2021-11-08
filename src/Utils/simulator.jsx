export const simulateYears = (
  r,
  startPopulation,
  maxPopulation,
  startYear,
  numberOfYears
) => {
  let data = [
    ['Year', 'Population'],
    [startYear, startPopulation],
  ]

  for (let i = 2; i <= numberOfYears; i++) {
    const prevPopulation = data[i - 1][1]
    const ratio = prevPopulation / maxPopulation
    let newPopulation = maxPopulation * (r * ratio * (1 - ratio))
    if (newPopulation >= maxPopulation) {
      newPopulation = maxPopulation
    }

    data.push([startYear + i, parseInt(newPopulation)])
  }

  return data
}
