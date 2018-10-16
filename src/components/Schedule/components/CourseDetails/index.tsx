/**
 * CourseDetails
 */

import React, { Component } from "react";
import { Course } from "../..";
import Title from "../../../common/Title";
import Button from "../../../common/Button";

import "./index.scss";

interface IProps {
  course: Course;
}

class CourseDetails extends Component<IProps> {
  public static defaultProps: Partial<IProps> = {};

  openUrl = () => window.open(this.props.course.url, "_newtab");

  get teachers() {
    const { course } = this.props;
    return course.teachers.map(teacher => <span>{teacher}</span>);
  }

  public render() {
    const { course } = this.props;

    return (
      <div className="CourseDetails">
        <Title subtitle={course.roname}>{course.name}</Title>
        <div className="teachers">{this.teachers}</div>
        <div className="content">
          <p>{course.description}</p>
          <div className="sidebar">
            <img src={course.logo} />

            <Button onClick={this.openUrl}>{course.buttonText}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetails;
