import React from 'react'
import { shallow } from 'enzyme'
import CareerPerspectives from './'

describe('CareerPerspectives', () => {
  it('renders without exploding', () => {
    shallow(<CareerPerspectives />)
  })

  it('renders passed in props', () => {
    const props = {
      texts: [
        {
          title: 'hello',
          text: 'text'
        },
        {
          title: 'hello2',
          text: 'text2'
        }
      ]
    }

    const wrapper = shallow(<CareerPerspectives {...props} />)

    expect(wrapper.text()).toContain('hello')
    expect(wrapper.text()).toContain('text')
    expect(wrapper.text()).toContain('hello2')
    expect(wrapper.text()).toContain('text2')
  })
})
