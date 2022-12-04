import React from 'react';
import styled from 'styled-components';

import poster from '../../assets/hero-vid-still.png';
import heroVid from '../../assets/hero-vid.mp4';

import { Section } from '../Section';

import { Video } from '../Video';
import Logo from '../HorusLogo';
import Nav from '../Nav';
import KyberInfo from '../KyberInfo';


import { Hero, UpperHero } from '../Hero';
import Button from '../Button';




function HeroSection() {
  return (
    <StyledHeroSection>
        <Video src={heroVid} type="mp4" poster={poster} name="hero-vid"/>
        <UpperHero>
            <Nav />
        </UpperHero>
        <Hero>
            <h1>Kyber HR</h1>
            <Button text="Learn More" onClick={null}/>          
        </Hero>
        <KyberInfo />
        <Logo />
    </StyledHeroSection>
  )
}

export default HeroSection;

const StyledHeroSection = styled(Section)`
    
    .logo {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 0.75em;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .hero-vid {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        /* z-index: -1000; */
        overflow: hidden
    }

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`