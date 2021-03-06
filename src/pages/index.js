import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';
import fetch from 'isomorphic-fetch';

export default function IndexPage({ message = '' }) {
  return (
    <Layout>
      <Head>
        <title>Welcome to the page</title>
      </Head>

      <Container>
        <InlinedHeader>{message}</InlinedHeader>
      </Container>
    </Layout>
  );
}

// Method used to get data both in the client and in the server.
IndexPage.getInitialProps = async function () {
  const response = await fetch('http://localhost:8000/api/ping');
  const message = await response.text();

  return { message };
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InlinedHeader = styled.h1`
  color: #36f;
  display: inline;
`;
