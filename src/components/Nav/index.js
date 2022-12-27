import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MainLogo } from '../HorusLogo';

export function Nav() {
    return (
        <MainNavBar>
            <MainNavContainer>
                <Link to='/' activeClassName="active">
                    <MainLogo className='logo'/>
                </Link>
                <div></div>
                <div></div>
                <MainLinks>
                    <Link to='/' activeClassName="active">Home</Link>
                    <Link to='/products' activeClassName="active">Products</Link>
                    <Link to='/about' activeClassName="active">About</Link>
                </MainLinks>
            </MainNavContainer>
            <hr />
        </MainNavBar>
    )
}

export function HomeNav() {
    return (
        <HomeNavBar>
            <HomeLinks>
                <Link to='/' activeClassName="active">Home</Link>
                <Link to='/products' activeClassName="active">Products</Link>
                <Link to='/about' activeClassName="active">About</Link>
            </HomeLinks>
        </HomeNavBar>
    )
}

const MainNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
        cursor: pointer;

        
    }
`

const MainNavBar = styled.nav`
    width: 100%;
    /* height: 150px; */
    display: flex;
    flex-direction: column;
    background-color: #312624;
    padding: 0.5rem;

    hr {
      margin: 10px;
      height: 1px;
      background: lightgray;
      border: none;
      width: 98%;
    }

    hr:before {
        position: absolute;
        display: block;
        content: '';
        height: 5px;
        width: 30px;
        background-color: lightgray;
    }
    
`

const MainLinks = styled.div`
    /* width: 100%; */
    /* height: auto; */
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

const HomeNavBar = styled.nav`
    position: absolute;
    z-index: 100;

    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: rgba(0,0,0,0.5); */
`

const HomeLinks = styled.div`
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