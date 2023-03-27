import React from 'react';
import Icon from './Icon';

const Contact = () => (
  <section id="section-contact">
    <div className="contact-header">
      <span id="contact" className="section-link" />
      <h2>Contact Nowak &amp; Associates</h2>
    </div>
    <div className="contact-left-col">
      <address>
        <strong>Address:</strong>
        <br />
        Martin C. Nowak
        <br />
        President
        <br />
        Nowak and Associates, Inc.
        <br />
        309 Tutwiller Drive
        <br />
        Trussville, Alabama 35173
      </address>
    </div>

    <div className="contact-right-col">
      <address>
        <strong>Phone:</strong>
        <br />
        <a aria-label="Call 205-520-4336" href="tel:+205-520-4336">
          (205) 520-4336
        </a>
        <br />
        <br />
        <strong>Email:</strong>
        <br />
        <a
          aria-label="Email martinnowak@charter.net"
          href="mailto:martinnowak@charter.net"
        >
          martinnowak@charter.net
        </a>
      </address>
    </div>

    <div className="contact-form-col">
      <form
        id="form-contact"
        name="form-contact"
        method="POST"
        action="https://getform.io/f/e78dab96-9f67-4e06-ab7f-8fa66a35f14f"
      >

        <input type="hidden" name="_state" style="display:none !important" />

        <fieldset>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="organization">
            Organization
            <input
              id="organization"
              name="organization"
              placeholder="Your Organization"
              type="text"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              name="email"
              placeholder="Your E-mail"
              type="email"
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="phone">
            Phone
            <input
              id="phone"
              name="phone"
              placeholder="Your Phone Number (optional)"
              type="tel"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="message">
            Message
            <textarea
              cols="22"
              id="message"
              name="message"
              placeholder="Type your message here...."
              required
              rows="5"
              wrap="virtual"
            />
          </label>
        </fieldset>

        <button
          name="form-contact-submit"
          type="submit"
          id="form-contact-submit"
        >
          <Icon icon="envelope" collection="far" className="icon-contact" />{' '}
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
