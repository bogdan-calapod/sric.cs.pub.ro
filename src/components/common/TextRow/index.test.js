import React from 'react'
import { shallow } from 'enzyme'
import TextRow from './'

describe('TextRow', () => {
  it('renders without exploding', () => {
    shallow(<TextRow />)
  })

  it('renders children text', () => {
    const wrapper = shallow(<TextRow>Hello</TextRow>)
    expect(wrapper.text()).toContain('Hello')
  })

  it('renders image based on prop', () => {
    const wrapper = shallow(<TextRow image='test.jpg' />)
    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find('img').props().src).toBe('test.jpg')
  })

  it('renders right based on prop', () => {
    const wrapper = shallow(<TextRow right />)
    expect(wrapper.hasClass('right')).toBe(true)
  })
})
