import React from 'react'
import { shallow } from 'enzyme'
import Button from './'

describe('Button', () => {
  it('renders without exploding', () => {
    shallow(<Button />)
  })

  it('runs passed function on click', () => {
    const props = {
      onClick: jest.fn()
    }
    const wrapper = shallow(<Button {...props} />)
    wrapper.simulate('click')
    expect(props.onClick).toBeCalled()
  })

  it('prints content', () => {
    const wrapper = shallow(<Button>hello</Button>)
    expect(wrapper.text()).toContain('hello')
  })

  it('shows image based on prop', () => {
    const wrapper = shallow(<Button image='arrow' />)
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
