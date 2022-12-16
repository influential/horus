import React from 'react';
import { GlobalStyle } from '../../helpers/GlobalStyle';


export default function Layout({ children }) {
  return (
    <React.Fragment>
        <GlobalStyle />
        
        { children }
    </React.Fragment>
  )
}