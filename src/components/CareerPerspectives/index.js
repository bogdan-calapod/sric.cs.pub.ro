import React, { Component } from "react";
import PropTypes from "prop-types";

import Title from "../common/Title";
import TextRow from "../common/TextRow";

import researcher from "./assets/researcher.png";
import auditor from "./assets/auditor.png";
import engineer from "./assets/engineer.png";

class CareerPerspectives extends Component {
  static propTypes = {
    texts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        image: ""
      })
    )
  };
  static defaultProps = {
    texts: [
      {
        title: "Security Researcher",
        text:
          "One further step in the academic world will be to take on a PhD position, or similar researcher jobs can also be found in the industry. SRIC prepares future researchers by teaching a diverse number of programming languages, advanced topics on operating systems, cryptography, network security and others. Moreover, we also provide the background for solid forensics and reverse engineering, promoting desire for edge technology.",
        image: researcher
      },
      {
        title: "Security Auditor",
        text:
          "A security auditor’s job is to provide a detailed report of systems security for a company. These reports will be used to enhance the global security of the enterprise and to help the company make necessary changes to boost the integrity of their infrastructure. During the SRIC master, you will learn how to use auditing tools required to perform such an operation and what are the laws and procedures governing security, making you suitable for following such a career.",
        image: auditor
      },
      {
        title: "Security Network Engineer",
        text:
          "A security network engineer is vital to any large organisation and should provide security services for networks, data centers and endpoints by deploying, configuring and administration of many devices including firewalls, VPNs, IPS, and other more. We, at SRIC, provide the hands-on experience required for such a job, by partnering with top-vendors and bringing the latest technology into the class. You will learn how to protect your servers and network devices from the industry leaders.",
        image: engineer
      }
    ]
  };

  get texts() {
    const { texts } = this.props;

    return texts.map((x, i) => (
      <TextRow key={i} image={x.image} text={x.text} right={i % 2 !== 0}>
        <Title right={i % 2 !== 0} light>
          {x.title}
        </Title>
      </TextRow>
    ));
  }

  render() {
    return (
      <section className="CareerPerspectives">
        <Title> Career Perspectives </Title>
        {this.texts}
      </section>
    );
  }
}

export default CareerPerspectives;
