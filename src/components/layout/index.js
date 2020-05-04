import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      <NavBar>
        <NavBarItem>
          <Link href="/">
            <a>Index</a>
          </Link>
        </NavBarItem>

        <NavBarItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavBarItem>
      </NavBar>

      <div>{children}</div>
    </>
  );
}

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavBarItem = styled.div`
  padding: 0.25rem;
  transition: background-color ease-in-out 250ms;

  :hover {
    background-color: #eee;
  }

  a {
    width: 100%;
    height: 100%;
  }
`;
