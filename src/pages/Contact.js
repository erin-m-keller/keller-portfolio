import React, { Component } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

// @ContactForm made with Formspree: https://formspree.io/
function ContactForm() {
  // initialize hooks
  const [state, handleSubmit] = useForm("xbjedlkn");
  const formAnimation = {
    initial: { opacity: 0, x: 200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };
  // return message when email successfully sent
  if (state.succeeded) {
      return <h1 className="thanks">Thanks for connecting with <span className="emphasis">me!</span>.</h1>;
  }
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <motion.label htmlFor="name" variants={formAnimation} transition={{ duration: 1.5 }}>
          Your Name:
          <motion.input id="name" name="name" type="text" transition={{ duration: 1.5 }} required />
        </motion.label>
        <motion.label htmlFor="email" variants={formAnimation} transition={{ duration: 1.5 }}>
          Email Address:
          <motion.input id="email" type="email" name="email" transition={{ duration: 1.5 }} required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </motion.label>
        <motion.label htmlFor="message" variants={formAnimation} transition={{ duration: 1.5 }}>
          Message:
          <motion.textarea id="message" name="message" transition={{ duration: 1.5 }} required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </motion.label>
        <motion.button
          type="submit"
          className="contact-btn"
          disabled={state.submitting}
          variants={formAnimation}
          transition={{ duration: 1.5 }}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}
class Contact extends Component {
  render() {
    const parentElem = {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    };
    const childElem = {
      initial: { opacity: 0, y: 60 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 60 },
    };
    return (
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={parentElem}
        transition={{ duration: 0.3 }}
        className="content-section three"
      >
        <div className="main-content">
          <motion.div variants={childElem} transition={{ duration: 0.5 }} className="contact-me container">
            <h1 className="header-title">Contact <span className="emphasis">me</span>. <FontAwesomeIcon icon={faAddressCard} /></h1>
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    );
  }
}
export default Contact;