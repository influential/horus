import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import SpecsBg from '../../assets/home-specs.png';
import { StaticImage } from 'gatsby-plugin-image';

export default function BottomSection() {
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
        <Specs />

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

const Specs = () => {
    return (
        <SpecsContainer>
            <SpecsContent />
            <StaticImage className='specs-img' src='../../assets/home-specs.png' alt=''/>
        </SpecsContainer>
    )
}

const SpecsContent = () => {
    return (
        <div className='content-wrapper content'>
            <h1 className='main-idea content specs-title'>Specs</h1>
            <SpecsContentContainer>
                <Specbox spec='Weight' value='5.8 Ounces'/>
                <Specbox spec='Finish' value='LINE-X coated in matte Gray'/>
                <Specbox spec='Dimensions' value='130mm x 48.33mm x 55.2mm'/>
                <Specbox spec='Illumination' value='Fiber Optic cable and Tritium'/>
                <Specbox spec='Magnification' value='4x'/>
                <Specbox spec='Reticle Color' value='Red'/>
                <Specbox spec='Body Material' value='Titanium / Aluminum'/>
                <Specbox spec='Warranty' value='2 years'/>
                <Specbox spec='Eye Relief' value='1.55 Inches'/>
                <Specbox spec='Field of View' value='28 Feet at 100 yards'/>
                <Specbox spec='' value=''/>
                <Specbox spec='' value=''/>

            </SpecsContentContainer>
        </div>
        
    )
}




const SpecsContainer = styled.div`
    width: 100%;
    /* height: 100%; */
    height: 100vh;
    overflow: none;
    position: relative;
    display: flex;
    flex-direction: column;

    .specs-img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }

    .content {
        z-index: 10;
    }


    .content-wrapper {
        .specs-title {
            font-size: 3rem;
            margin: 70px 0px 10px 40px;
        }

        @media (max-width: 768px) {
            /* flex-direction: row; */
            justify-content: center;
            align-items: center;
           

            .specs-title {
                font-size: 3rem;
                margin: 0px 0px 20px 0;
                
            }
        }
    }
    
`

const SpecsContentContainer = styled.div`
    z-index: 10;
    width: 900px;
    border-radius: 5px;
    /* height: 50%; */
    padding: 10px;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    margin: 0px 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 80%;
        height: 100%;
        /* margin: 0; */
        
        /* justify-content: space-around; */
    }
`

const Specbox = ({ spec, value }) => {
    return (
        <SpecboxContainer>
            <h2 className='spec'><u>{ spec }</u></h2>
            <p className='value'>{ value }</p>
        </SpecboxContainer>
    )
}

const SpecboxContainer = styled.div`
    padding: 1.5rem;
    text-align: center;
    width: 200px;

    .spec {
        margin: 10px;
        font-size: 1rem;
    }

    .value {
        margin: 10px;
        font-size: 1.25rem;
    }

    @media (max-width: 768px) {
        justify-content: center;
        padding: 5px;
        
        margin: 0;
    }
`


const SmallSection = styled.section`
    width: 100%;
    background-color: #312624;
    color: white;

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
        padding: 10px;
        color: rgba(228,114,99);
    }

    .main-idea {
        padding: 10px;
        font-size: 2rem;
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

