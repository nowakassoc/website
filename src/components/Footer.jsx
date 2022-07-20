import React from 'react';
import Icon from './Icon';

const Footer = () => (
  <div id="footer">
    <div className="empty-col" />
    <div className="footer-address">
      <address>
        <p>
          Nowak and Associates, Inc.
          <br />
          309 Tutwiller Drive
          <br />
          Birmingham, Alabama &nbsp;35173
        </p>
      </address>
    </div>
    <div className="footer-social">
      <p>
        <a
          aria-label="Connect on LinkedIn"
          href="https://linkedin.com/in/martin-nowak-287764b"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="linkedin-in" collection="fab" className="icon-linkedin" />
          <br />
          Connect on LinkedIn
        </a>
      </p>
    </div>
    <div className="footer-copyright">
      <p>
        &copy; 2010 - {new Date().getFullYear()}
        <br />
        Nowak and Associates, Inc.
        <br />
        All Rights Reserved
      </p>
    </div>
    <div className="empty-col" />
  </div>
);

export default Footer;
