import React, { Component } from 'react'
import PropTypes from 'prop-types'

import arrow from './assets/arrow.svg'
import download from './assets/download.svg'
import plane from './assets/plane.svg'

import './index.scss'

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string
  }
  static defaultProps = {
    onClick: () => {},
    image: ''
  }

  get className () {
    let className = 'Button'

    return className
  }

  get image () {
    const { image } = this.props

    switch (image) {
      case 'arrow':
        return <img src={arrow} alt='' />
      case 'download':
        return <img src={download} alt='' />
      case 'plane':
        return <img src={plane} alt='' />
      default:
        return null
    }
  }

  render () {
    const { onClick, children } = this.props

    return (
      <button onClick={onClick} className={this.className}>
        {children}
        {this.image}
      </button>
    )
  }
}

export default Button
