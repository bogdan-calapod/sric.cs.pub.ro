import React from 'react'
import { shallow } from 'enzyme'
import Community from './'

import TabBar from 'components/common/TabBar'

describe('Community', () => {
  it('renders without exploding', () => {
    shallow(<Community />)
  })

  it('renders a TabBar', () => {
    const wrapper = shallow(<Community />)
    expect(wrapper.find(TabBar)).toHaveLength(1)
  })

  it('displays passed content', () => {
    const props = {
      events: [
        {
          title: 'Security Summer School',
          text: 'test',
          image: 'nightout'
        }
      ]
    }
    const wrapper = shallow(<Community {...props} />)

    expect(wrapper.text()).toContain('Security Summer School')
    expect(wrapper.text()).toContain('text')
    expect(wrapper.find('img').props().src).toBe('nightout')
  })

  it('sets default image if none passed', () => {
    const props = {
      events: [
        {
          title: '',
          text: ''
        }
      ]
    }
    const wrapper = shallow(<Community {...props} />)
    expect(wrapper.find('img').props().src).toContain('default')
  })

  it('displays link with passed in url', () => {
    const props = {
      events: [
        {
          action: 'More info',
          url: 'http://x.com'
        }
      ]
    }
    const wrapper = shallow(<Community {...props} />)
    expect(wrapper.find('a').props().href).toBe('http://x.com')
    expect(wrapper.find(Button).text()).toContain('More info')
  })
})
