import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import WhySric from 'components/WhySric'
import CareerPerspectives from 'components/CareerPerspectives'

import TabDisplay from 'components/common/TabDisplay'

import Button from 'components/common/Button'

import '../index.scss'

class Home extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div>
        <Header />
        <WhySric />
        <CareerPerspectives />
        <TabDisplay tabs={['Security Summer School', 'Hackers Night Out']} />
      </div>
    )
  }
}

export default Home
