import React, { Component, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

// @ContactForm made with Formspree: https://formspree.io/
function ContactForm() {
  // initialize hooks
  const [state, handleSubmit] = useForm("xbjedlkn");
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [msgVal, setMsgVal] = useState('');
  const [showNameRequired, setShowNameRequired] = useState(false);
  const [showEmailRequired, setShowEmailRequired] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const [showMsgRequired, setShowMsgRequired] = useState(false);
  // animation params for form
  const formAnimation = {
    initial: { opacity: 0, x: 200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };
  // show error when field is empty on blur
  const handleBlur = (val) => {
    if (val === 'name') {
      if (nameVal.trim() === '') {
        setShowNameRequired(true);
        setTimeout(() => {
          setShowNameRequired(false);
        }, 1000);
      } else {
        setShowNameRequired(false);
      }
    } else if (val === 'email') {
      if (emailVal.trim() === '') {
        setShowEmailRequired(true);
        setTimeout(() => {
          setShowEmailRequired(false);
        }, 1000);
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailVal.trim())) {
          setShowInvalidEmail(false);
        } else {
          setShowInvalidEmail(true);
          setTimeout(() => {
            setShowInvalidEmail(false);
          }, 1000);
        }
        setShowEmailRequired(false);
      }
    } else if (val === 'msg') {
      if (msgVal.trim() === '') {
        setShowMsgRequired(true);
        setTimeout(() => {
          setShowMsgRequired(false);
        }, 1000);
      } else {
        setShowMsgRequired(false);
      }
    }
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
          <motion.input id="name" name="name" type="text" transition={{ duration: 1.5 }} onChange={(e) => setNameVal(e.target.value)} onBlur={() => handleBlur('name')} required />
          {showNameRequired && <span className="tag tag-sm">Name is required.</span>}
        </motion.label>
        <motion.label htmlFor="email" variants={formAnimation} transition={{ duration: 1.5 }}>
          Email Address:
          <motion.input id="email" type="email" name="email" transition={{ duration: 1.5 }} onChange={(e) => setEmailVal(e.target.value)} onBlur={() => handleBlur('email')} required />
          {showEmailRequired && <span className="tag tag-sm">Email is required.</span>}
          {showInvalidEmail && <span className="tag tag-sm">A valid email address is required.</span>}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </motion.label>
        <motion.label htmlFor="message" variants={formAnimation} transition={{ duration: 1.5 }}>
          Message:
          <motion.textarea id="message" name="message" transition={{ duration: 1.5 }} onChange={(e) => setMsgVal(e.target.value)} onBlur={() => handleBlur('msg')} required />
          {showMsgRequired && <span className="tag tag-sm">Message is required.</span>}
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
    const formAnimation = {
      initial: { opacity: 0, x: 200 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 200 },
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
            <motion.div variants={formAnimation} transition={{ duration: 1.5 }}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    );
  }
}
export default Contact;