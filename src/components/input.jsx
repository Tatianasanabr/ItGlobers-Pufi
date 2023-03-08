import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../styles/input.css"


function ContactForm() {
  const [state, handleSubmit] = useForm("xwkjbgoj");
  if (state.succeeded) {
      return <p className="finalState">Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="formEmail">
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ingresa tu email'
        className='inputEmail'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className="input-container">
      </div>
      <button type="submit" disabled={state.submitting}>
      <i className="fa fa-location-arrow" disabled={state.submitting}></i>
      </button>
    </form>
  );
}

export default ContactForm;

