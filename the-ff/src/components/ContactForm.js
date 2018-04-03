import React from 'react';

const ContactForm = () => {
  return (
    <section classNameName="bg home-bg2" id="contactForm">
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label for="first_name">Your Name (required)</label>
        </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Your Email (required)</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          This is an inline input field:
          <div className="input-field inline">
            <input id="email_inline" type="email" className="validate"/>
            <label for="email_inline">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
      </div>
    </form>
  </div>
    </section>
  )
}
export default ContactForm;
