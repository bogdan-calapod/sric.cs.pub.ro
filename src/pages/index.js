import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../components/Header";
import WhySric from "../components/WhySric";
import CareerPerspectives from "../components/CareerPerspectives";
import Community from "../components/Community";
import People from "../components/People";
import Contact from "../components/Contact";

import Button from "../components/common/Button";

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

class Home extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <Header />
        <WhySric />
        <CareerPerspectives />
        <Community events={events} />
        <People />
        <Contact />
      </div>
    );
  }
}

export default Home;
