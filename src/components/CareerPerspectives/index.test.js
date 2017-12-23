import React from 'react'
import { shallow } from 'enzyme'
import CareerPerspectives from './'

describe('CareerPerspectives', () => {
  it('renders without exploding', () => {
    shallow(<CareerPerspectives />)
  })
})
