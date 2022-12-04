import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

function Nav() {
  return (
    <NavBar>
        <Links>
            <Link to='/' activeClassName="active">Home</Link>
            <Link to='/products' activeClassName="active">Products</Link>
            <Link to='/about' activeClassName="active">About</Link>
        </Links>
    </NavBar>
  )
}

const NavBar = styled.nav`
    position: relative;

    /* width: 100%; */
    display: flex;
    justify-content: center;
    /* background-color: rgba(0,0,0,0.5); */
`

const Links = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;

    .active {
            color: tomato;
        }

    a {
        text-decoration: none;
        color: white; 
        font-size: 1.5rem;
        padding: 1rem;
        transition: 0.25s;
        
        

        &:hover {
            color: tomato;
        }
    }
`

export default Nav;