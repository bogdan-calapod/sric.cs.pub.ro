import React from 'react'
import { shallow } from 'enzyme'
import Person from './'

describe('Person', () => {
  it('renders without exploding', () => {
    shallow(<Person />)
  })

  it('displays default image if none passed', () => {
    const wrapper = shallow(<Person />)
    const image = wrapper.find('img').props().src
    expect(image).toContain('default')
  })

  it('displays passed in text', () => {
    const props = {
      name: 'Test',
      position: 'test'
    }
    const wrapper = shallow(<Person {...props} />)
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('test')
  })

  it('only displays name in small version', () => {
    const props = {
      small: true,
      name: 'name',
      position: 'position'
    }
    const wrapper = shallow(<Person {...props} />)
    expect(wrapper.text()).toContain('name')
    expect(wrapper.text()).not.toContain('position')
  })

  it('displays passed image', () => {
    const props = {
      image: 'image'
    }
    const wrapper = shallow(<Person {...props} />)
    const image = wrapper.find('img').props().src
    expect(image).toBe('image')
  })
})
