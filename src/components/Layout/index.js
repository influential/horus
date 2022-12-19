import React from 'react';
import { GlobalStyle } from '../../helpers/GlobalStyle';
import Footer from '../Footer';
import Nav from '../Nav';
import { useLocation } from '@reach/router';


export default function Layout({ children }) {
  const location = useLocation();

  return (
    <React.Fragment>
        <GlobalStyle />
        <Nav page={location.pathname}/>
        
        { children }

        <Footer />
    </React.Fragment>
  )
}