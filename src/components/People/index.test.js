import React from 'react'
import { shallow } from 'enzyme'
import People from './'

import Person from 'components/common/Person'

describe('People', () => {
  it('renders without exploding', () => {
    shallow(<People />)
  })

  it('renders corresponding amount of persons', () => {
    const props = {
      people: Array(10).fill({
        name: '',
        position: '',
        image: ''
      })
    }
    const wrapper = shallow(<People {...props} />)
    expect(wrapper.find(Person)).toHaveLength(10)
  })
})
