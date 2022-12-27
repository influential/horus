import React from 'react';
import styled from 'styled-components';
import poster from '../../assets/hero-vid-still.jpg';
import heroVid from '../../assets/hero-vid-small.mp4';
import { Section } from '../Section';
import { Video } from '../Video';
import { HomeLogo } from '../HorusLogo';
import KyberInfo from '../KyberInfo';
import { Hero } from '../Hero';
import Button from '../Button';
import { navigate } from 'gatsby';


export default function HeroSection() {
  return (
    <StyledHeroSection>
        {/* <Video type="mp4" poster={poster} name="hero-vid"/> */}
        <Video src={heroVid} type="mp4" poster={poster} name="hero-vid"/>
        <Hero>
            <h1 className='learn-more'>Kyber HR</h1>
            <Button className='button' text="Learn More" onClick={() => navigate('/about')}/>          
        </Hero>
        <KyberInfo />
        <HomeLogo />
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled(Section)`
    position: relative;
    z-index: 10;
    height: 100vh;
    display: flex;
    justify-content: center;
    
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
        height: 100%;
        /* height: 100vh; */
        object-fit: cover;
        z-index: -1000;
        overflow: hidden;
    }

    .learn-more {
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`