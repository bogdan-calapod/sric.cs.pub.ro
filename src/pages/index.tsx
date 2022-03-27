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
      "Do you want to gain an edge and make new friends in the cybersecurity community? The next edition of the Security Summer School will take place online in June-July 2022!\n\n The 9th edition will feature a new track: Security Essentials targeted at those making their first steps in the world of security. We'll also feature a mini-track on Hardware Security. This mini-track won't have a CTF, and will be accessible to all participants from the Binary and Web tracks.\n\nIn 2021, the 8th edition of the Security Summer School engaged 31 participants and 16 trainers for 128 hours of training and contests, on two tracks - Binary and Web, between June 27 - August 1, 2021. Students went through an in-depth tour of what it means to discover, successfully exploit and patch a software vulnerability, developing the necessary skills and insights for such an endeavor.\n\nThe final CTF contest was the highlight of the summer school, as students were able to showcase their new skills.",
    image: "default",
    action: "More info",
    url: "https://security.cs.pub.ro/summer-school/wiki/"
  },
  {
    title: "ACS IXIA CTF 2022",
    text: "ACS IXIA CTF will take place starting from Saturday, April 9, 2022, 11am EEST, until Sunday, April 10, 2022, 11pm EEST.\n\nIn order to take part in the CTF contest, you have to register a team. In order to win one of the three prizes, you need a one person team. If you took part in the previous contests for ACS IXIA CTF, then you may already have an account and you can use that; use password recovery if you don't recall the password.\n\nPrize winners will be announced after the contest; they need to submit a write up of their solutions and proof of their being a school or university bachelor students. Anyone can take part in ACS IXIA CTF, but only school and university bachelor students in Romanian universities are eligible for prizes. There will be three prizes:\n\n -          first prize: monitor\n-          second prize: smartwatch\n-          third prize: gaming chair\n",
    image: "nightout",
    action: "More info"d,
    url: "https://acs-ixia-ctf.security.cs.pub.ro/home"
  }
];

const people = [
  {
    name: "Ion Bică",
    position: "Professor",
    image: "/photos/ionbica.png"
  },
  {
    name: "Marius Bunget",
    position: "Assistant Professor",
    image: "/photos/mariusbunget.png"
  },
  {
    name: "Mihai Carabaș",
    position: "Assistant Professor",
    image: "/photos/mihaicarabas.png"
  },
  {
    name: "Mihai Chiroiu",
    position: "Assistant Professor",
    image: "/photos/mihaichiroiu.png"
  },

  {
    name: "Răzvan Deaconescu",
    position: "Assistant Professor",
    image: "/photos/razvandeaconescu.png"
  },
  {
    name: "Adrian Furtună",
    position: "Assistant Professor",
    image: "/photos/adrianfurtuna.jpg"
  },
  {
    name: "Laura Gheorghe",
    position: "Assistant Professor",
    image: "/photos/lauragheorghe.png"
  },
  {
    name: "Dragoș Niculescu",
    position: "Professor",
    image: "/photos/dragosniculescu.png"
  },
  {
    name: "Radu Petean",
    position: "Assistant Professor",
    image: "/photos/radupetean.png"
  },
  {
    name: "Răzvan Rughiniș",
    position: "Professor",
    image: "/photos/razvanrughinis.jpg"
  },
  {
    name: "Nicolae Țăpuș",
    position: "Professor",
    image: "/photos/nicolaetapus.jpg"
  }
];

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
        <WhySric />
        <Schedule courses={this.courses} />
        <CareerPerspectives />
        <Community events={events} />
        <People people={people} />
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
