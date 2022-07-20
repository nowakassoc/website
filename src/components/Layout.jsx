import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import '../assets/css/app.css';
import Footer from './Footer';
import Header from './Header';
import NavScrollTop from './NavScrollTop';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            language
            description
            brandHeading
            brandTagline
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <meta
            name="description"
            content="Nowak and Associates is a health care and business consulting firm.  Services include business development, strategic planning, advice to law firms, and retreat facilitation."
          />
          <meta
            name="author"
            content="Martin C. Nowak, Nowak and Associates, Inc."
          />
          <meta name="distribution" content="global" />
          <meta name="Resource-Type" content="document" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Cache-Control" content="no-cache" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta httpEquiv="Content-Style-Type" content="text/css" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <html lang={data.site.siteMetadata.language} />
        </Helmet>

        <div className="container-fixed">
          <div className="wrapper header">
            <div className="col-empty" />

            <div className="col-main">
              <Header
                brandHeading={data.site.siteMetadata.brandHeading}
                brandTagline={data.site.siteMetadata.brandTagline}
              />
            </div>

            <div className="col-empty" />
          </div>
        </div>

        <div className="wrapper">
          <div className="col-empty" />

          <div id="col-main">
            <div className="content">{children}</div>
          </div>

          <div className="col-empty" />
        </div>

        <Footer />
        <NavScrollTop />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
