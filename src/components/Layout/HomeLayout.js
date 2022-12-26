import React, { useEffect } from 'react';
import { GlobalStyle } from '../../helpers/GlobalStyle';
import Footer from '../Footer';
import { HomeNav } from '../Nav';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <HomeNav />
            <main>{ children }</main>
            <Footer />
        </React.Fragment>
    )
}