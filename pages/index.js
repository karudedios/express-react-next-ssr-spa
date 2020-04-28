import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Head>
      <title>Welcome to the page</title>
    </Head>

    <Container>
      <InlinedHeader>Hello World!</InlinedHeader>
    </Container>
  </Layout>
);

const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InlinedHeader = styled.h1 `
  color: #36f;
  display: inline;
`;
