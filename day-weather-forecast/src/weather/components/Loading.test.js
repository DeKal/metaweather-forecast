import React from 'react'
import { render } from '@testing-library/react'
import Loading from 'weather/components/Loading'

describe('Loading test', () => {
  test('should render correctly', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })
})
