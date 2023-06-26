import React, { Component } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";

// @ContactForm made with Formspree: https://formspree.io/
function ContactForm() {
  // initialize hooks
  const [state, handleSubmit] = useForm("xbjedlkn");
  // return message when email successfully sent
  if (state.succeeded) {
      return <p className="thanks">Thanks for connecting with me!</p>;
  }
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" className="contact-btn" disabled={state.submitting}>Submit</button>
      </form>
    </div>
  );
}
class Contact extends Component {
  render() {
    const variants = {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    };
    const childAnimation = {
      initial: { opacity: 0, y: 60 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 60 },
    };
    return (
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
        className="content-section three"
      >
        <div className="main-content">
          <motion.div variants={childAnimation} transition={{ duration: 0.5 }} className="contact-me">
            <h2 className="white">Contact me</h2>
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    );
  }
}
export default Contact;