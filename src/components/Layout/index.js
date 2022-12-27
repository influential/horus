import React from 'react';
import { GlobalStyle } from '../../helpers/GlobalStyle';
import Footer from '../Footer';
import { Nav } from '../Nav';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Nav />
            <main>{ children }</main>
            <Footer />
        </React.Fragment>
    )
}