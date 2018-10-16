import React, { Component } from "react";
import PropTypes from "prop-types";

import Title from "../common/Title";
import Person from "../common/Person";

import "./index.scss";

class People extends Component {
  static propTypes = {
    people: PropTypes.array
  };
  static defaultProps = {
    people: []
  };

  get list() {
    const people = this.props.people.map((x, i) => <Person key={i} {...x} />);

    return <div className="list"> {people} </div>;
  }

  render() {
    return (
      <section className="People">
        <Title> People </Title>
        {this.list}
      </section>
    );
  }
}

export default People;
