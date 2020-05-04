import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About us</title>
      </Head>

      <Container>
        <InlinedHeader>About who now?</InlinedHeader>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InlinedHeader = styled.h1`
  display: inline;
`;
