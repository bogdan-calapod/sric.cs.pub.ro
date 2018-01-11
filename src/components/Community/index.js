import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TabBar from 'components/common/TabBar'
import Title from 'components/common/Title'
import Button from 'components/common/Button'

import Markdown from 'react-markdown'

import defaultImage from './assets/default.jpg'
import nightout from './assets/nightout.jpg'

import './index.scss'

class Community extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        action: PropTypes.string,
        url: PropTypes.string
      })
    )
  }
  static defaultProps = {
    events: []
  }

  state = { active: '' }

  componentDidMount () {
    const { events } = this.props

    if (events.length === 0) {
      return
    }

    let active = events[0].title
    this.setState({ ...this.state, active })
  }

  onChange = active => this.setState({ ...this.state, active })

  get activeEvent () {
    const { events } = this.props
    const { active } = this.state

    return events.filter(x => x.title === active)[0]
  }

  get tabs () {
    const { events } = this.props
    const { active } = this.state
    const { onChange } = this
    const tabs = events.map(x => x.title)

    const props = {
      tabs,
      active,
      onChange
    }

    return <TabBar {...props} />
  }

  get content () {
    const { activeEvent } = this
    const { url, action } = activeEvent

    return (
      <div className='content'>
        <img src={this.image} alt='Event photo' />
        <div className='text'>
          <Markdown source={activeEvent.text} />
          <a href={url} target='_blank'>
            <Button>{action}</Button>
          </a>
        </div>
      </div>
    )
  }

  get image () {
    const { image } = this.activeEvent

    switch (image) {
      case 'nightout':
        return nightout
      default:
        return defaultImage
    }
  }

  render () {
    const { active } = this.state

    if (active === '') {
      return null
    }

    return (
      <section className='Community'>
        <Title right> Community </Title>
        {this.tabs}
        {this.content}
      </section>
    )
  }
}

export default Community
