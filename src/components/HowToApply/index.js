import React, { Component } from "react";
import PropTypes from "prop-types";

import Title from "../common/Title";

import "./index.scss";

class HowToApply extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <section className="HowToApply">
        <Title>How to apply ?</Title>
        <div className="step first registration">
          <h1>Registration</h1>
          <p>
            Admission - Session July 2022 - Calendar to be announced on <a href="https://acs.pub.ro/admitere/masterat/">https://acs.pub.ro/admitere/masterat/</a>
          </p>
        </div>
        <div className="step left prep">
          <h1>Prep for admission exam</h1>
          <p>
            The admission exam consists of two stages: the closed-ended quiz and
            the presentation of the research theme.
          </p>
        </div>
        <div className="step admission">
          <h1>Admission exam</h1>
          <ul className="right">
            <li className="location">
              <h1>Location</h1>
              <h2>Faculty of Automatic Control and Computers, UPB</h2>
            </li>
          </ul>
          <ul className="right">
            <li className="calendar">
              <h1>Date</h1>
              <h2>To be announced</h2>
            </li>
          </ul>
          <ul className="right">
            <li className="clock">
              <h1>Duration</h1>
              <h2>120 minutes</h2>
            </li>
          </ul>
          <ul className="right">
            <li className="exam">
              <h1>Structure</h1>
              <h2>4 tests for the closed-question quiz exam</h2>
              <h2>
                1 test comprising the written presentation of the selected
                research theme
              </h2>
            </li>
          </ul>
        </div>
        <div className="step left signing">
          <h1>Signing the study contract</h1>
          <p>
            After admission, students will register and conclude the study
            contract.
          </p>
          <ul>
            <li className="calendar">
              <h1>Registration for the SRIC program</h1>
              <h2>To be announced</h2>
            </li>
            <li>
              <h1>Selecting optional courses and signing the contract</h1>
              <h2>To be announced</h2>
            </li>
          </ul>
        </div>
        <div className="step research">
          <h1>Selecting the research project</h1>
          <p>
            Students may select one of the research topics proposed by academic
            staff, or they may advance their own topic, in agreement with a
            coordinating professor.
          </p>
        </div>
      </section>
    );
  }
}

export default HowToApply;
