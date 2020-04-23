import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InlinedHeader = styled.h1`
  display: inline;
`;

const Index = ()  => (
  <>
    <Head>
      <title>About us</title>
    </Head>

    <Container>
      <InlinedHeader>About who now?</InlinedHeader>
    </Container>
  </>
);

export default Index;
