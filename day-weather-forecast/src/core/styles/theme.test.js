import theme from 'core/styles/theme'

describe('theme test', () => {
  test('should show correctly theme', () => {
    expect(theme).toMatchSnapshot()
  })
})
