import React from 'react'
import { shallow } from 'enzyme'
import TextInput from './'

describe('TextInput', () => {
  it('renders without exploding', () => {
    shallow(<TextInput />)
  })

  it('switches type based on prop', () => {
    const wrapper = shallow(<TextInput type='password' />)
    const input = wrapper.find('input')

    expect(input.props().type).toBe('password')
  })

  it('displays label', () => {
    const wrapper = shallow(<TextInput label='test' />)
    expect(wrapper.text()).toContain('test')
  })
})
