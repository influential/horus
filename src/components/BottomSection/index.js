import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import Button from '../Button';
import { navigate } from 'gatsby';
import ProductSpecs from '../ProductSpecs';

export default function BottomSection({ mobile }) {
    const kyberSpecs = {
        "weight": "5.8 Ounces",
        "dimensions": "130mm x 48.33mm x 55.2mm",
        "magnification": "4x",
        "bodyMaterial": "Titanium / Aluminum",
        "eyeRelief": "1.55 in.",
        "fov": "28 Feet at 100 yards",
        "finish": "LINE-X coated in matte Gray",
        "illumination": "Fiber Optic cable and Tritium",
        "reticleColor": "Red",
        "warranty": "2 years"
    }

    return (
        <SmallSection>
            
            <h4 className='title'>REAL WORLD TESTING</h4>
            {/* <h1 className='main-idea'>Real World Testing</h1> */}
            
            <StarboxContainer>
                <Starbox title='Drop Test' />   
                <Starbox title='Vibration Test' />                
                <Starbox title='Elevation Test' />             
                <Starbox title='Temperature Test' />              
                <Starbox title='Illumination Test' />
            </StarboxContainer>
            <hr />
            {/* <HomeKyberSpecs mobile={mobile}/> */}
            <ProductSpecs page='/' specs={kyberSpecs} mobile={mobile}/>
            <h1 className='experience-header'>Experience Unparalleled Performance with Horus Arms</h1>
            <p className='header-subtext'>At Horus not only do we offer superiority with our optics but with other enhanced  accessories as well.</p>
            <Button className='discover-button' text="Discover" onClick={() => navigate('/products')}/>
        </SmallSection>
    )
}

const Starbox = ({ title }) => {
    return (
        <StyledStarbox>
            <Rating title={title}/>
        </StyledStarbox>
    )
}

const Rating = ({ title }) => {
    return (
        <>
            <h4>{ title }</h4>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
        </>
    )
}

const SmallSection = styled.section`
    width: 100%;
    background-color: #312624;
    color: white;
    padding-bottom: 20px;

    /* border: 1px solid red; */

    hr {
        margin: 10px;
        height: 1px;
        background: rgba(228,114,99);
        border: none;
    }

    hr:before {
        position: absolute;
        display: block;
        content: '';
        height: 5px;
        width: 30px;
        background-color: rgba(228,114,99);
    }

    .title {
        margin: 0px 0px 10px 40px;
        padding: 10px;
        color: rgba(228,114,99);
    }

    .main-idea {
        padding: 10px;
        font-size: 2rem;
    }

    .experience-header {
        width: 100%;
        text-align: center;
        padding: 3rem;
        padding-bottom: 5px;
        font-size: 3.5rem;
        color: rgba(228,114,99);

    }

    .header-subtext{
        text-align: center;
        width: 100%;
        font-size: 1.5rem;
        padding: 5px;
        margin-bottom: 15px;
    }

    .discover-button {
        width: 100px;
        margin: 0 auto;
    }

`

const StarboxContainer = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 15px;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
    }
    
`

const StyledStarbox = styled.div`
    text-align: center;
    font-size: 1rem;
    color: lightgray;

    @media (max-width: 768px) {
        padding: 10px;
    }

    .star {
        color: rgba(228,114,99);
        font-size: 1.6rem;
        margin-top: 10px;
        margin-right: 5px;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`

