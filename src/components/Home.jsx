import React from 'react';
import Icon from './Icon';
import profilePic from '../assets/images/Martin_Nowak.png';
import profilePicMobile from '../assets/images/Martin_Nowak_sm.png';

const Home = () => (
  <section id="section-home">
    <div className="home-col-left">
      <span id="home" className="section-link" />
      <h1>Nowak and Associates, Inc.</h1>
      <h2 className="tagline">Healthcare and Business Consulting</h2>
      <p>
        <img
          src={profilePicMobile}
          alt="Martin C. Nowak - Nowak and Associates"
          className="home-portrait-mobile"
        />
        Nowak and Associates offers experienced business operations and 
        care delivery strategies for MDs and hospitals.  For individual clients, 
        services include personalized advice to individuals and families for 
        selecting best doctors and hospitals.  Nowak provides consultancy in 
        a variety of medical-legal circumstances including malpractice and 
        class action, both plaintiff and defense.  Services also include 
        business plan development, investment proposal reviews, and inventor guidance.
        <br />
        <a
          aria-label="Contact Nowak and Associates"
          href="#contact"
          id="home-contact"
        >
          <Icon icon="envelope" className="icon-link" />
          Contact Nowak &amp; Associates
        </a>
      </p>
    </div>
    <div className="home-col-right">
      <img
        src={profilePic}
        alt="Martin C. Nowak - Nowak and Associates"
        className="home-portrait"
      />
    </div>
  </section>
);

export default Home;
