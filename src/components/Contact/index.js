import React, { Component } from "react";
import PropTypes from "prop-types";

import Title from "../common/Title";
import TextInput from "../common/TextInput";
import Button from "../common/Button";

import fb from "./assets/fb.svg";
import mail from "./assets/mail.svg";
import map from "./assets/map.svg";

import "./index.scss";

class Contact extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <section className="Contact">
        <Title right> Contact </Title>
        <header>
          <a href="mailto:sric@systems.cs.pub.ro">
            <div className="info">
              <img src={mail} alt="" />
              sric@systems.cs.pub.ro
            </div>
          </a>
          <div className="info">
            <img src={map} alt="" />
            Precis 708, Campus UPB, Iuliu Maniu 6F, București
          </div>
          <a href="https://fb.me/systems.cs.pub.ro" target="_blank">
            <div className="info">
              <img src={fb} alt="" />
              /systems.cs.pub.ro
            </div>
          </a>
        </header>

        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <TextInput label="Name" />
          <TextInput label="Email" />
          <TextInput label="Message" textarea />
          <Button>Send</Button>
        </form>
        <iframe
          name="contactMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11395.67765989447!2d26.065345296387896!3d44.43481521563508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c5d638d499%3A0xfc9bc5cf6c25e0bc!2sCentrul+PRECIS!5e0!3m2!1sro!2sro!4v1516021178554"
          frameBorder="0"
          allowFullScreen
        />
      </section>
    );
  }
}

export default Contact;
