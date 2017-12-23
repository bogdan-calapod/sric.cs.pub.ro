import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class TextRow extends Component {
  static propTypes = {
    children: PropTypes.any,
    image: PropTypes.string,
    right: PropTypes.bool
  }
  static defaultProps = {
    children: '',
    image: '',
    right: false
  }

  get className () {
    const { right } = this.props
    let className = 'TextRow'

    if (right) {
      className += ' right'
    }

    return className
  }

  get image () {
    const { image } = this.props

    if (image === '') {
      return null
    } else {
      return <img src={image} alt='' />
    }
  }

  render () {
    const { children } = this.props

    return (
      <div className={this.className}>
        {children}
        {this.image}
      </div>
    )
  }
}

export default TextRow
