import React, { Component } from 'react'
import PropTypes from 'prop-types'

import user from './user.svg'
import pass from './pass.svg'

import './index.scss'

class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    label: '',
    type: 'text',
    onChange: () => {}
  }

  state = {
    value: ''
  }

  onChange = e => {
    this.setState({ ...this.state, value: e.target.value })
    this.props.onChange(e.target.value)
  }

  get className () {
    const { value } = this.state
    let className = 'TextInput'

    if (value !== '') {
      className += ' filled'
    }

    return className
  }

  get icon () {
    const { type, label } = this.props
    let src

    if (label === 'Nume de utilizator') {
      src = user
    } else if (type === 'password') {
      src = pass
    } else {
      return null
    }

    return <img src={src} className='image' alt='' />
  }

  render () {
    const { label, type } = this.props
    const { value } = this.state

    return (
      <div className={this.className}>
        <input type={type} value={value} onChange={this.onChange} />
        <label>{label}</label>
        {this.icon}
      </div>
    )
  }
}

export default TextInput
