import React from 'react'
import renderer from 'react-test-renderer'
import Box from '../Box'

describe('Box', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Box backgroundColor='black' />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
