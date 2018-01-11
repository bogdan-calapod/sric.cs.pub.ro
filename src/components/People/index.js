import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'components/common/Title'
import Person from 'components/common/Person'

import './index.scss'

class People extends Component {
  static propTypes = {
    people: PropTypes.array
  }
  static defaultProps = {
    people: Array(10).fill({
      name: 'Ion Pop',
      position: 'Tester',
      image: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto'
    })
  }

  get list () {
    const people = this.props.people.map((x, i) => <Person key={i} {...x} />)

    return <div className='list'> {people} </div>
  }

  render () {
    return (
      <section className='People'>
        <Title> People </Title>
        {this.list}
      </section>
    )
  }
}

export default People
