import React, { Component } from 'react'
import PropTypes from 'prop-types'

import systems from './assets/systems.svg'
import upb from './assets/upb.svg'
import globe from './assets/globe.svg'
import logo from './assets/logo.svg'

import './index.scss'

class Header extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Header'>
        <div className='logos'>
          <img src={systems} alt='' />
          <img src={upb} alt='' />
        </div>
        <div className='stage'>
          <img src={globe} alt='' className='globe' />
          <img src={logo} alt='' className='logo' />
        </div>
      </div>
    )
  }
}

export default Header
