import React, { Component, Fragment } from "react";

import Header from "../components/Header";
import WhySric from "../components/WhySric";
import CareerPerspectives from "../components/CareerPerspectives";
import Community from "../components/Community";
import People from "../components/People";
import Contact from "../components/Contact";
import Schedule, { Course } from "../components/Schedule";
import { graphql } from "gatsby";

import "../index.scss";

const events = [
  {
    title: "Security Summer School",
    text:
      "Do you want to gain an edge and make new friends in the cybersecurity community? The next edition of the Security Summer School will take place in June 2018! \n\nIn 2016, the third edition of the Security Summer School engaged students between June 20th and July 25th, at the Faculty of Automatic Control and Computers, UPB, focusing on Practical Software Exploitation. Students went through an in-depth tour of what it means to discover, successfully exploit and patch a software vulnerability, developing the necessary skills and insights for such an endeavor. \n\n Activities took place during three intensive training sessions per week, as well as two Capture the Flag (CTF) contests which were held mid-term and at the end of the summer school. \n\nThe final CTF contest was the highlight of the summer school, as students were able to showcase their new skills.",
    image: "default",
    action: "More info",
    url: "https://security.cs.pub.ro/summer-school/wiki/"
  },
  {
    title: "Hacker's Night Out",
    text:
      "What’s the point of keeping the world cybersafe if we don’t get to tell all those fabulous stories?\n\nAre you a SRIC student? Are you a SRIC teacher? Are you something else? Hold up your wizard night plans for Friday, October 21rd 2016, and join us to Hackers’ Night Out! We’ll be board-gaming, karaoking, musicing, dancing and hacking all around in Room 706 PRECIS from 20:00 till dawn. Don’t knock, come in!\n\n    Please address your inquires to the master of ceremonies at sric@systems.cs.pub.ro",
    image: "nightout",
    action: "E-mail MC",
    url: "mailto:sric@systems.cs.pub.ro"
  }
];

const person = {
  name: "Ion Popescu",
  position: "Teaching Assistant",
  image:
    "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
};

interface RawCourse {
  semester: "1" | "2" | "3" | "4";
  active: "TRUE" | "FALSE";
  name: string;
  roname: string;
  desc: string;
  logo: string;
  teachers: string;
  url: string;
  customButton: string;
}

interface IProps {
  data: {
    dataJson: {
      courses: RawCourse[];
    };
  };
}

class Home extends Component<IProps> {
  static defaultProps: Partial<IProps> = {
    data: {
      dataJson: { courses: [] }
    }
  };

  get courses(): Course[] {
    const {
      data: {
        dataJson: { courses }
      }
    } = this.props;
    return courses.map(
      (course: RawCourse): Course => ({
        ...course,
        active: course.active === "TRUE",
        description: course.desc,
        teachers: course.teachers ? course.teachers.split(",") : [],
        semester: parseInt(course.semester) as 1 | 2 | 3 | 4,
        buttonText: course.customButton || "View materials"
      })
    );
  }

  render() {
    if (this.props.data.dataJson === null) {
      return null;
    }

    return (
      <Fragment>
        <Header />
        <Schedule courses={this.courses} />
        <WhySric />
        <CareerPerspectives />
        <Community events={events} />
        <People />
        <Contact />
      </Fragment>
    );
  }
}

export default ({ data }) => <Home data={data} />;

export const query = graphql`
  {
    dataJson {
      courses {
        semester
        active
        name
        roname
        desc
        url
        logo
        teachers
        customButton
      }
    }
  }
`;
