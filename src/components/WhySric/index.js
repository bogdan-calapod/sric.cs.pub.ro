import React, { Component } from 'react'

import Title from 'components/common/Title'
import TextRow from 'components/common/TextRow'
import Button from 'components/common/Button'

import image from './assets/why.png'

import './index.scss'

class WhySric extends Component {
  render () {
    return (
      <section className='WhySric'>
        <Title> Why Sric ? </Title>
        <TextRow image={image}>
          <p>
            Security professionals are increasingly called upon to migrate from the boundaries and gates of information systems to the very core of digital infrastructure design and management. Information systems are permeating all fields of daily lives, from the intimate zones of the household to the corporate world. Appliances become interconnected in the Internet of Things; people work, chat, and observe reality through mobile connections; entire continents of business migrate to the cloud. Meanwhile, the stakes of malicious attacks become higher, and vulnerabilities increase, in the mismatch of old and new technologies and interconnected platforms.
          </p>
          <p>
            Join SRIC to gain indepth knowledge, hands-on mastery and broader perspectives on a variety of technologies of cybersecurity. Make your voice heard in the SRIC community of alumni, professors, students and security specialists.
          </p>
          <p>
            If you enjoy making computing systems work, hardening and securing system components and continuously improving IT infrastructures, you are the ideal candidate for the SRIC masters program.
          </p>
        </TextRow>
        <Button image='arrow'>How to apply ? </Button>
      </section>
    )
  }
}

export default WhySric