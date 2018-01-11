import React from 'react'
import { shallow } from 'enzyme'
import TabBar from './'

describe('TabBar', () => {
  it('renders without exploding', () => {
    shallow(<TabBar />)
  })

  it('renders passed in tabs', () => {
    const wrapper = shallow(<TabBar tabs={['a', 'b']} />)

    expect(wrapper.text()).toContain('a')
    expect(wrapper.text()).toContain('b')
  })

  it('renders active tab', () => {
    const props = {
      active: 'a',
      tabs: ['a', 'b']
    }
    const wrapper = shallow(<TabBar {...props} />)
    const { className } = wrapper.find('.tab').first().props()
    expect(className).toContain('active')
  })

  it('calls passed function on click', () => {
    const props = {
      tabs: ['a'],
      onChange: jest.fn()
    }
    const wrapper = shallow(<TabBar {...props} />)
    const tab = wrapper.find('.tab')
    tab.simulate('click', { target: { textContent: props.tabs[0] } })

    expect(props.onChange).toBeCalledWith('a')
  })
})
