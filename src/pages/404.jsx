import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <Container my={3}>Page not found</Container>
      <p>The requested page is unavailable.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
