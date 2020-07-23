const { runAthenaQuery } = require('../athena-query')

describe('Athena Query', () => {
  it('get data', async () => {
    const result = await runAthenaQuery()
    expect(result.Items.length).toBeGreaterThan(1)
  })
})
