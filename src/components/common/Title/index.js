import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Title extends Component {
  static propTypes = {
    right: PropTypes.bool,
    light: PropTypes.bool,
    subtitle: PropTypes.string
  }
  static defaultProps = {
    right: false,
    light: false,
    subtitle: ''
  }

  get className () {
    const { right, light, subtitle } = this.props
    let className = 'Title'

    if (subtitle !== '') {
      className += ' hasSubtitle'
    }

    if (right) {
      className += ' right'
    }

    if (light) {
      className += ' light'
    }

    return className
  }

  get subtitle () {
    const { subtitle } = this.props

    if (subtitle === '') {
      return null
    }

    return <h2>{subtitle}</h2>
  }

  render () {
    const { children } = this.props
    return (
      <div className={this.className}>
        <h1>{children}</h1>
        {this.subtitle}
      </div>
    )
  }
}

export default Title
