import React from 'react'
import { shallow } from 'enzyme'
import HowToApply from './'

describe('HowToApply', () => {
  it('renders without exploding', () => {
    shallow(<HowToApply />)
  })
})
