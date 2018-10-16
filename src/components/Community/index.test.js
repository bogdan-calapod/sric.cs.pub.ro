import React from 'react'
import { shallow } from 'enzyme'
import Community from './'

import Button from 'components/common/Button'
import TabBar from 'components/common/TabBar'
import Markdown from 'react-markdown'

describe('Community', () => {
  it('renders without exploding', () => {
    shallow(<Community />)
  })

  it('renders a TabBar', () => {
    const props = {
      events: [
        { 
          title: 'Test',
          text: 'Test',
          image: 'Test'
        }
      ]
    }
    const wrapper = shallow(<Community {...props} />)
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

    expect(wrapper.find(TabBar).props().tabs).toContain(
      'Security Summer School'
    )
    expect(wrapper.find(Markdown).props().source).toContain('test')
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
    expect(wrapper.find(Button).props().children).toContain('More info')
  })
})
