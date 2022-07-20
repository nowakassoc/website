import React from 'react';
import Icon from './Icon';

const NavScrollTop = () => (
  <div className="nav-scroll-top">
    <a aria-label="Scroll to Top" href="#col-main">
      <Icon icon="chevron-up" className="icon-nav-scroll-top" />
    </a>
  </div>
);

export default NavScrollTop;
