import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'components/common/Title'
import TextRow from 'components/common/TextRow'

class CareerPerspectives extends Component {
  static propTypes = {
    texts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        image: ''
      })
    )
  }
  static defaultProps = {
    texts: [
      {
        title: 'Security Researcher',
        text: 'One further step in the academic world will be to take on a PhD position, or similar researcher jobs can also be found in the industry. SRIC prepares future researchers by teaching a diverse number of programming languages, advanced topics on operating systems, cryptography, network security and others. Moreover, we also provide the background for solid forensics and reverse engineering, promoting desire for edge technology.',
        image: 'http://localhost:8000/static/why.ca554d96.png'
      },
      {
        title: 'Security Researcher',
        text: 'One further step in the academic world will be to take on a PhD position, or similar researcher jobs can also be found in the industry. SRIC prepares future researchers by teaching a diverse number of programming languages, advanced topics on operating systems, cryptography, network security and others. Moreover, we also provide the background for solid forensics and reverse engineering, promoting desire for edge technology.',
        image: 'http://localhost:8000/static/why.ca554d96.png'
      },
      {
        title: 'Security Researcher',
        text: 'One further step in the academic world will be to take on a PhD position, or similar researcher jobs can also be found in the industry. SRIC prepares future researchers by teaching a diverse number of programming languages, advanced topics on operating systems, cryptography, network security and others. Moreover, we also provide the background for solid forensics and reverse engineering, promoting desire for edge technology.',
        image: 'http://localhost:8000/static/why.ca554d96.png'
      }
    ]
  }

  get texts () {
    const { texts } = this.props

    return texts.map((x, i) => (
      <TextRow key={i} image={x.image} text={x.text} right={i % 2 !== 0}>
        <Title right={i % 2 !== 0} light>{x.title}</Title>
      </TextRow>
    ))
  }

  render () {
    return (
      <section className='CareerPerspectives'>
        <Title> Career Perspectives </Title>
        {this.texts}
      </section>
    )
  }
}

export default CareerPerspectives
