import React from 'react';
import PropTypes from 'prop-types';
import imgLogo from '../assets/images/Nowak_Associates.png';
import NavMenu from './NavMenu';

const Header = ({ brandHeading, brandTagline }) => (
  <header className="top">
    <div className="logo">
      <a aria-label="Link to Home" href="#home">
        <img src={imgLogo} alt={`${brandHeading} - ${brandTagline}`} />
      </a>
    </div>
    <NavMenu />
  </header>
);

Header.propTypes = {
  brandHeading: PropTypes.string.isRequired,
  brandTagline: PropTypes.string.isRequired,
};

export default Header;
