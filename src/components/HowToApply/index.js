import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'components/common/Title'

import './index.scss'

class HowToApply extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <section class='HowToApply'>
        <Title>How to apply ?</Title>
        <div class='step first registration'>
          <h1>Registration</h1>
          <p>
            The SRIC Master's Program offers
            {' '}
            <span>30 places subsidized</span>
            {' '}
            by the state budget, and
            {' '}
            <span>10 places with a tuition fee</span>
            .
          </p>
          <ul class='right'>
            <li class='calendar'>
              <h1>Early registration</h1>
              <h2>July 11 - 22 2016</h2>
            </li>
            <li>
              <h1>Summer registration</h1>
              <h2>August 29 - September 13 2016</h2>
            </li>
          </ul>
          <ul class='right'>
            <li class='clock'>
              <h1>Opening times</h1>
              <h2>Monday - Friday, 9:00 - 15:00</h2>
            </li>
          </ul>
          <ul class='right'>
            <li class='dollar'>
              <h1>Registration fee</h1>
              <h2>125 RON</h2>
            </li>
          </ul>
        </div>
        <div class='step left prep'>
          <h1>Prep for admission exam</h1>
          <p>
            The admission exam consists of two stages: the closed-ended quiz and the presentation of the research theme.
          </p>
          <div class='split'>
            <h1>Closed-ended quiz</h1>
            <p>
              For the quiz exam students must select 4 disciplines and study the respective bibliography.
            </p>
          </div>
          <div class='split'>
            <h1>Presentation of research theme</h1>
            <p>
              Candidates have to choose a research theme and prepare to present it in writing.
            </p>
          </div>
        </div>
        <div class='step admission'>
          <h1>Admission exam</h1>
          <ul class='right'>
            <li class='location'>
              <h1>Location</h1>
              <h2>Faculty of Automatic Control and Computers, UPB</h2>
            </li>
          </ul>
          <ul class='right'>
            <li class='calendar'>
              <h1>Date</h1>
              <h2>September 15 2016</h2>
            </li>
          </ul>
          <ul class='right'>
            <li class='clock'>
              <h1>Duration</h1>
              <h2>120 minutes</h2>
            </li>
          </ul>
          <ul class='right'>
            <li class='exam'>
              <h1>Structure</h1>
              <h2>4 tests for the closed-question quiz exam</h2>
              <h2>
                1 test comprising the written presentation of the selected research theme
              </h2>
            </li>
          </ul>
        </div>
        <div class='step left signing'>
          <h1>Signing the study contract</h1>
          <p>
            After admission, students will register and conclude the study contract.
          </p>
          <ul>
            <li class='calendar'>
              <h1>Registration for the SRIC program</h1>
              <h2>September 18 2016</h2>
            </li>
            <li>
              <h1>Selecting optional courses and signing the contract</h1>
              <h2>October 3 - 14 2016</h2>
            </li>
          </ul>
        </div>
        <div class='step research'>
          <h1>Selecting the research project</h1>
          <p>
            Students may select one of the research topics proposed by academic staff, or they may advance their own topic, in agreement with a coordinating professor.
          </p>
          <ul class='right'>
            <li class='calendar'>
              <h1>
                Academic staff present open research directions to students
              </h1>
              <h2>October 13 2016, 19.00</h2>
            </li>
            <li>
              <h1>Research topic selection deadline for students</h1>
              <h2>October 21 2016</h2>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default HowToApply
