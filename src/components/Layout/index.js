import React from 'react';
import { GlobalStyle } from '../../helpers/GlobalStyle';
import Footer from '../Footer';


export default function Layout({ children }) {
  return (
    <React.Fragment>
        <GlobalStyle />
        
        { children }

        <Footer />
    </React.Fragment>
  )
}