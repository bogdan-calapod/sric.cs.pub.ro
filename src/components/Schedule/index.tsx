/**
 * Schedule
 */

import React, { Component, ReactNodeArray } from "react";

import Title from "../common/Title";

import TableRow from "./components/TableRow";
import "./index.scss";
import CourseDetails from "./components/CourseDetails";

export interface Course {
  semester: 1 | 2 | 3 | 4;
  active: boolean;
  name: string;
  roname: string;
  description: string;
  url: string;
  logo: string;
  teachers: string[];
  buttonText: string;
}

export interface Option {
  title: string;
  disabled?: boolean;
  tooltip?: string;
}

interface IProps {
  courses: Course[];
}

interface IState {
  active: Course;
}

const DUMMY_COURSE: Course = {
  semester: 1,
  active: false,
  name: "",
  roname: "",
  description: "",
  url: "",
  logo: "",
  teachers: [],
  buttonText: ""
};

class Schedule extends Component<IProps, IState> {
  public state: IState = {
    active: null
  };

  componentDidMount() {
    const { courses } = this.props;
    const active = courses[0];
    this.setState({ active });
  }

  updateSelection = (selected: string): void => {
    const { courses } = this.props;
    const active = courses.find(course => course.name === selected);

    this.setState({ active });
  };

  get options(): Array<Option[]> {
    const { courses } = this.props;

    return [
      courses.filter(course => course.semester === 1),
      courses.filter(course => course.semester === 2),
      courses.filter(course => course.semester === 3),
      courses.filter(course => course.semester === 4)
    ].map(courses =>
      courses.map(
        (course: Course): Option => ({
          title: course.name,
          disabled: !course.active
        })
      )
    );
  }

  get selected(): Course {
    const { active } = this.state;

    if (active) {
      return active;
    } else {
      return DUMMY_COURSE;
    }
  }

  get rows(): ReactNodeArray {
    const getTitle = (key: number): string => {
      switch (key) {
        case 0:
          return "First";
        case 1:
          return "Second";
        case 2:
          return "Third";
        case 3:
          return "Fourth";
        default:
          return "";
      }
    };

    return this.options.map((semester, key) => (
      <TableRow
        title={`${getTitle(key)} semester`}
        options={semester}
        selected={this.selected.name}
        onChange={this.updateSelection}
      />
    ));
  }

  public render() {
    return (
      <section className="Schedule">
        <Title right>Courses</Title>
        {this.rows}
        <CourseDetails course={this.selected} />
      </section>
    );
  }
}

export default Schedule;
