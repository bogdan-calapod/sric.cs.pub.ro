import React from 'react'
import { shallow } from 'enzyme'
import Title from './'

describe('Title', () => {
  it('renders without exploding', () => {
    shallow(<Title />)
  })

  it('renders passed content', () => {
    const wrapper = shallow(<Title>Hello</Title>)
    expect(wrapper.text()).toContain('Hello')
  })

  it('renders title on right based on prop', () => {
    const wrapper = shallow(<Title right />)
    expect(wrapper.hasClass('right')).toBe(true)
  })

  it('renders subtitle if passed in', () => {
    const wrapper = shallow(<Title subtitle='hello'>Hello</Title>)

    expect(wrapper.text()).toContain('hello')
  })

  it('renders light title if passed in', () => {
    const wrapper = shallow(<Title light />)
    expect(wrapper.hasClass('light')).toBe(true)
  })
})
