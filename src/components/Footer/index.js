import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

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
      <AiOutlineTwitter className='icon' onClick={() => navigate('https://twitter.com/HorusArms')}/>
      <AiFillYoutube className='icon' onClick={() => navigate('https://www.youtube.com/channel/UC7mSF7v-7Z8l7q-4biK6SUw')}/>
      <AiOutlineInstagram className='icon' onClick={() => navigate('https://www.instagram.com/horusarms/')}/>
    </LinksContainer>
  )
}


const FooterContainer = styled.footer`
  padding: 2rem;
  width: 100%;
  
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
  

  .icon {
    cursor: pointer;
    margin: 5px;
    transition: 0.35s;
    
    &:hover {
      color: rgba(228,114,99)
    }
  }
`

