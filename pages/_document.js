import Document, {
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Link from 'next/link';

import styled from 'styled-components';
// import { BrowserRouter /*, Link*/ } from 'react-router-dom';

const isServer = typeof(window) === 'undefined';

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props => sheet.collectStyles(<App { ...props } />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  renderFromServer() {
    // const { StaticRouter } = require('react-router');
    // const { page } = this.props.__NEXT_DATA__;

    // return (
    //   <StaticRouter location={page}>
    //     { this._render() }
    //   </StaticRouter>
    // );
  }

  renderFromClient() {
    // return (
    //   <BrowserRouter>
    //     { this._render() }
    //   </BrowserRouter>
    // );
  }

  _render() {
    console.log(this.props.styleTags);

    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>

        <body>
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

          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

  render() {
    return this._render();

    // TODO: figure this out, can't get client routes to work since they don't seem to exist on the client
    //       not sure if we just pluck react router 4 and manage routes separately or something, but that's a bit of a hassle.
    if (isServer) {
      return this.renderFromServer();
    }

    return this.renderFromClient();
  }
}

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavBarItem = styled.div `
  padding: 1rem;
  transition: background-color ease-in-out 250ms;

  :hover {
    background-color: #eee;
  }
`;