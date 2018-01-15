import React from 'react'
import { shallow } from 'enzyme'
import Contact from './'

describe('Contact', () => {
  it('renders without exploding', () => {
    shallow(<Contact />)
  })
})
