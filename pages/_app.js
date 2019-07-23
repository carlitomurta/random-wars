import App, { Container } from 'next/app';
import React from 'react';
import { Navbar } from '../components';
import '../static/theme/general.scss';
import 'isomorphic-fetch';

export default class RWApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    );
  }
}
