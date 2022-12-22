import React, { useEffect } from 'react';
import { GlobalStyle } from '../../helpers/GlobalStyle';
import Footer from '../Footer';
import Nav from '../Nav';

export default function Layout({ location, children }) {
  useEffect(() => {
    console.log("Location: ", location);
  });

  return (
    <React.Fragment>
        <GlobalStyle />
        <Nav location={location.pathname}/>
        <main>{ children }</main>
        <Footer />
    </React.Fragment>
  )
}