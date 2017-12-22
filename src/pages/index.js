import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

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
