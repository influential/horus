import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Link, navigate } from 'gatsby';

import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <FooterContainer>
        <hr />
        <FooterIcons />
        <FooterLinks />
        <p className='copyright'>&copy; {year} Horus Arms</p>
      </FooterContainer>
    </>
    
  )
}

const FooterIcons = () => {
  return (
    <IconsContainer>
    
    </IconsContainer>
  )
  
}

const FooterLinks = () => {
  return (
    <LinksContainer>
        <a href='https://twitter.com/HorusArms' target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter className='icon'/>
        </a>
        <a href='https://www.youtube.com/channel/UC7mSF7v-7Z8l7q-4biK6SUw' target="_blank" rel="noopener noreferrer">
            <AiFillYoutube className='icon' />
        </a>
        <a href='https://www.instagram.com/horusarms/' target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className='icon' />
        </a>
    </LinksContainer>
  )
}


const FooterContainer = styled.footer`
  padding: 2rem;
  width: 100%;
  z-index: 10;
  
  background-color: #312624;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
      margin: 10px;
      height: 1px;
      background: lightgray;
      border: none;
      width: 100%;
  }

  hr:before {
    position: absolute;
    display: block;
    content: '';
    height: 5px;
    width: 30px;
    background-color: lightgray;
  }

    .copyright {
      color: lightgray;
    }
`

const IconsContainer = styled.div`

`
const LinksContainer = styled.div`
    display: flex;
    color: lightgray;
    padding: 10px;
    font-size: 2.5rem;

    a {
        text-decoration: none;
        color: lightgray;
    }

    .icon {
        cursor: pointer;
        margin: 5px;
        transition: 0.35s;
        
        &:hover {
        color: rgba(228,114,99)
        }
    }
`

