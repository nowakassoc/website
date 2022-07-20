import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/Layout';

const FormSuccessPage = () => (
  <Layout>
    <Container>
      <Helmet>
        <title>Thank You!</title>
      </Helmet>
      <br />
      <br />
      <br />
      <div align="center">
        <h1>Thank You!</h1>
        <p>Your Message is being Forwarded.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Container>
  </Layout>
);

export default FormSuccessPage;
