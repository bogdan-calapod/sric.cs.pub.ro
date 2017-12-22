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
        <h2>.</h2>
        <Button image='arrow'> How to apply </Button>
        <Button image='download'> How to apply </Button>
        <Button image='plane'> How to apply </Button>
        <h2>.</h2>
      </div>
    )
  }
}

export default Home
