import React, { Component } from "react";

import Header from "../components/Header";
import WhySric from "../components/WhySric";
import CareerPerspectives from "../components/CareerPerspectives";
import Community from "../components/Community";
import People from "../components/People";
import Contact from "../components/Contact";
import Schedule, { Course } from "../components/Schedule";

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

const courses: Course[] = [
  {
    semester: 1,
    active: true,
    name: "Computer and Network Security",
    roname: "Securitatea Calculatoarelor și Rețelelor",
    description:
      "Computer and Network Security class covers the topic of computer and network security, from advanced cryptographic techniques, innovative algorithms, security protocols and policies, trust ensuring infrastructures and specific technologies for securing networks. At the end of this class, the students should be able to: develop a complex security policy for ensuring the safety of the provided services, identify threats and vulnerabilities at network and operating system level, identify types of attacks and mitigate them, identify the vulnerabilities of layer 2 and 3 equipments, implement a solution for ensuring a high level of security for the equipments, monitor the network, servers and workstations for identifying and stopping attacks, configuring a firewall, an IDS/IPS and an AAA system. This class also has an important practical component, which includes: configuring routers that define the network perimeter with the use of specific instruction set for ensuring a high level of security, configuring layer 2 and 3 equipments in a safe manner, configuring a firewall for allowing basic network operations, configuring an IDS/IPS, configuring AAA both on routers and switches.",
    url: "http://ocw.cs.pub.ro",
    image: "http://picsum.photos/100?random",
    teachers: ["Ion Popescu", "Andrei Ionescu"],
    buttonText: "hello"
  },
  {
    semester: 1,
    active: false,
    name: "Elective Course",
    roname: "Securitatea Calculatoarelor și Rețelelor",
    description:
      "Computer and Network Security class covers the topic of computer and network security, from advanced cryptographic techniques, innovative algorithms, security protocols and policies, trust ensuring infrastructures and specific technologies for securing networks. At the end of this class, the students should be able to: develop a complex security policy for ensuring the safety of the provided services, identify threats and vulnerabilities at network and operating system level, identify types of attacks and mitigate them, identify the vulnerabilities of layer 2 and 3 equipments, implement a solution for ensuring a high level of security for the equipments, monitor the network, servers and workstations for identifying and stopping attacks, configuring a firewall, an IDS/IPS and an AAA system. This class also has an important practical component, which includes: configuring routers that define the network perimeter with the use of specific instruction set for ensuring a high level of security, configuring layer 2 and 3 equipments in a safe manner, configuring a firewall for allowing basic network operations, configuring an IDS/IPS, configuring AAA both on routers and switches.",
    url: "http://ocw.cs.pub.ro",
    image: "http://picsum.photos/100?random",
    teachers: ["Ion Popescu", "Andrei Ionescu"],
    buttonText: "hello"
  },
  {
    semester: 2,
    active: true,
    name: "Computer and Network Securitsy",
    roname: "Securitatea Calculatoarelor și Rețelelor",
    description:
      "Computer and Network Security class covers the topic of computer and network security, from advanced cryptographic techniques, innovative algorithms, security protocols and policies, trust ensuring infrastructures and specific technologies for securing networks. At the end of this class, the students should be able to: develop a complex security policy for ensuring the safety of the provided services, identify threats and vulnerabilities at network and operating system level, identify types of attacks and mitigate them, identify the vulnerabilities of layer 2 and 3 equipments, implement a solution for ensuring a high level of security for the equipments, monitor the network, servers and workstations for identifying and stopping attacks, configuring a firewall, an IDS/IPS and an AAA system. This class also has an important practical component, which includes: configuring routers that define the network perimeter with the use of specific instruction set for ensuring a high level of security, configuring layer 2 and 3 equipments in a safe manner, configuring a firewall for allowing basic network operations, configuring an IDS/IPS, configuring AAA both on routers and switches.",
    url: "http://ocw.cs.pub.ro",
    image: "http://picsum.photos/100?random",
    teachers: ["Ion Popescu", "Andrei Ionescu"],
    buttonText: "hello"
  }
];

class Home extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <Header />
        <Schedule courses={courses} />
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
