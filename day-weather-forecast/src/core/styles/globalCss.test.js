import React from 'react'
import { render } from '@testing-library/react'
import GlobalCss from 'core/styles/globalCss'

describe('globalStyle test', () => {
  test('should render correctly', () => {
    const { container } = render(<GlobalCss />)
    expect(container).toMatchSnapshot()
  })
})
