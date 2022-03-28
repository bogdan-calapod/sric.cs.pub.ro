import React, { Component } from "react";

import Title from "../common/Title";
import TextRow from "../common/TextRow";
import Button from "../common/Button";

import HowToApply from "../HowToApply";

import Modal from "rodal";

import image from "./assets/why.png";

import "rodal/lib/rodal.css";
import "./index.scss";

class WhySric extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () =>
    this.setState({ ...this.state, modalOpen: !this.state.modalOpen });

  render() {
    const { modalOpen } = this.state;
    return (
      <section className="WhySric">
        <Title> Why Sric ? </Title>
        <TextRow image={image}>
          <p>
            Security professionals are increasingly called upon to migrate from
            the boundaries and gates of information systems to the very core of
            digital infrastructure design and management. Information systems
            are permeating all fields of daily lives, from the intimate zones of
            the household to the corporate world. Appliances become
            interconnected in the Internet of Things; people work, chat, and
            observe reality through mobile connections; entire continents of
            business migrate to the cloud. Meanwhile, the stakes of malicious
            attacks become higher, and vulnerabilities increase, in the mismatch
            of old and new technologies and interconnected platforms.
          </p>
          <p>
            Join SRIC to gain indepth knowledge, hands-on mastery and broader
            perspectives on a variety of technologies of cybersecurity. Make
            your voice heard in the SRIC community of alumni, professors,
            students and security specialists.
          </p>
          <p>
            If you enjoy making computing systems work, hardening and securing
            system components and continuously improving IT infrastructures, you
            are the ideal candidate for the SRIC masters program.
          </p>
        </TextRow>
        <Button image="arrow" onClick={this.toggleModal}>
          How to apply ?
        </Button>

        <Modal
          width={1200}
          height={600}
          visible={modalOpen}
          onClose={this.toggleModal}
          className="HowToApplyModal"
        >
          <HowToApply />
        </Modal>
      </section>
    );
  }
}

export default WhySric;
