import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import Button from 'components/common/Button'

import '../index.scss'

class Home extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Home
