import React from 'react'
import { render } from '@testing-library/react'
import SearchBar, { matchQueryToListCity } from 'weather/components/SearchBar'

const list = [
  {
    title: 'London',
    woeid: 44418
  },
  {
    title: 'Lond',
    woeid: 44418
  },
  {
    title: 'Lo',
    woeid: 44418
  }
]

describe('SearchBar test', () => {
  test('render correctly SearchBar for normal case', () => {
    const { container } = render(
      <SearchBar placeholder="Search" label="label" list={list} />
    )
    expect(container).toMatchSnapshot()
  })

  test('render correctly SearchBar for error case', () => {
    const { container } = render(
      <SearchBar placeholder="Search" label="label" error />
    )
    expect(container).toMatchSnapshot()
  })

  test('render correctly SearchBar for disabled case', () => {
    const { container } = render(
      <SearchBar placeholder="Search" label="label" disabled />
    )
    expect(container).toMatchSnapshot()
  })

  describe('matchQueryToListCity test', () => {
    test('given a string, should return a match city', () => {
      const city = matchQueryToListCity(list, 'lond')
      const wanted = {
        title: 'Lond',
        woeid: 44418
      }
      expect(city).toEqual(wanted)
    })

    test('given list only one city, should return a match city', () => {
      const listWithOneCity = [
        {
          title: 'London',
          woeid: 44418
        }
      ]
      const city = matchQueryToListCity(listWithOneCity, 'lond')
      const wanted = {
        title: 'London',
        woeid: 44418
      }
      expect(city).toEqual(wanted)
    })

    test('given an unmatched string, should return null in case not found', () => {
      const city = matchQueryToListCity(list, 'loz')
      const wanted = null
      expect(city).toEqual(wanted)
    })

    test('given a query, should return back that query', () => {
      const city = matchQueryToListCity(list, {
        title: 'Lo',
        woeid: 44418
      })
      const wanted = {
        title: 'Lo',
        woeid: 44418
      }
      expect(city).toEqual(wanted)
    })
  })
})
