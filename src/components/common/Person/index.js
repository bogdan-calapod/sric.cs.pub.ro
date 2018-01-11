import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Person extends Component {
  static propTypes = {
    small: PropTypes.bool,
    name: PropTypes.string,
    position: PropTypes.string,
    image: PropTypes.string
  }
  static defaultProps = {
    small: false,
    name: '',
    position: '',
    image: ''
  }

  get image () {
    const { image } = this.props
    return image
  }

  get photo () {
    return (
      <div class='image'>
        <div class='wrap'>
          <img src={this.image} />
        </div>
      </div>
    )
  }

  get className () {
    const { small } = this.props
    let className = 'Person'

    if (small) {
      className += ' small'
    }

    return className
  }

  get name () {
    const { name, position, small } = this.props
    let subtitle = small ? null : <h3>{position}</h3>

    return (
      <div className='name'>
        <h1> {name} </h1>
        {subtitle}
      </div>
    )
  }

  render () {
    return (
      <div className={this.className}>
        {this.photo}
        {this.name}
      </div>
    )
  }
}

export default Person
