import React from 'react'
import { shallow } from 'enzyme'
import WhySric from './'

describe('WhySric', () => {
  it('renders without exploding', () => {
    shallow(<WhySric />)
  })
})
