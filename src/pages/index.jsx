import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout from '../components/Layout';
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <Home />
    <Services />
    <About />
    <Publications />
    <Contact />
  </Layout>
);

export default IndexPage;
