import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Markdown from 'react-markdown'

import './index.scss'

class TextRow extends Component {
  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    image: PropTypes.string,
    right: PropTypes.bool
  }
  static defaultProps = {
    children: '',
    text: '',
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
    const { children, text } = this.props

    return (
      <div className={this.className}>
        <div className='text'>
          <Markdown source={text} />
          {children}
        </div>
        {this.image}
      </div>
    )
  }
}

export default TextRow
