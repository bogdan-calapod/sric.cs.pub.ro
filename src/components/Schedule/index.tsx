/**
 * Schedule
 */

import React, { Component } from "react";

import TableRow from "./components/TableRow";
import "./index.scss";

export interface Course {
  semester: 1 | 2;
  name: string;
  roname: string;
  description: string;
  url: string;
  image: string;
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
  active: Course | null;
}

class Schedule extends Component<IProps, IState> {
  public state: IState = {
    active: null
  };

  get options() {
    return [];
  }

  public render() {
    return (
      <section className="Schedule">
        <TableRow
          title="First Semester"
          options={[
            { title: "Computer and Network Security", disabled: false },
            { title: "Computer and Network Security2", disabled: false },
            { title: "Computer and Network Security3", disabled: false },
            { title: "elective course", disabled: true },
            { title: "elective course", disabled: true },
            { title: "elective course", disabled: true }
          ]}
          selected="Computer and Network Security"
          onChange={opt => alert(opt.title)}
        />
        <TableRow
          title="First Semester"
          options={[
            { title: "Computer and Network Security4", disabled: false },
            { title: "Computer and Network Security5", disabled: false },
            { title: "Computer and Network Security6", disabled: false },
            { title: "elective course", disabled: true },
            { title: "elective course", disabled: true },
            { title: "elective course", disabled: true }
          ]}
          selected="Computer and Network Security5"
        />
      </section>
    );
  }
}

export default Schedule;
