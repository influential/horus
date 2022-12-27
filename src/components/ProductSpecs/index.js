import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

export default function ProductSpecs({ page, specs }) {
    return (
        <SpecsContainer page={page}>
            <div className='content'>
                <h1>Specs</h1>
                <SpecsContent page={page} specs={specs}/>
            </div>
            
            {page !== '/' ? null : <StaticImage className='specs-img' src='../../assets/home-specs.jpg' alt=''/>}
        </SpecsContainer>
    )
}
  
const SpecsContent = ({ page, specs }) => {
    const specNameMap = {
        "bodyMaterial": "Body Material",
        "eyeRelief": "Eye Relief",
        "reticleColor": "Reticle Color",
        "mountType": "Mount Type",
        "weight": "Weight",
        "length": "Length",
        "dimensions": "Dimensions",
        "magnification": "Magnification",
        "fov": "Field of View",
        "finish": "Finish",
        "illumination": "Illumination",
        "warranty": "Warranty",
        "coating": "Coating",
        "installation": "Installation",
        "reduction": "Reduction",
        "treatments": "Treatments",
        "angle": "Angle"
    }

    return (
        <SpecsContentContainer page={page}>
            {Object.entries(specs).map(([spec, value], idx) => {
                // console.log(`${spec}:${value}`)
                return (value === null 
                    ? null 
                    : <Specbox page={page} key={idx} spec={specNameMap[spec]} value={value}/>
                )
            })}
        </SpecsContentContainer>
    )
}

const Specbox = ({ page, spec, value }) => {
    return (
        <SpecboxContainer>
            <h2 className='spec'><u>{ spec }</u></h2>
            <p className='value'>{ value }</p>
        </SpecboxContainer>
    )
}

const SpecsContainer = styled.div`
    width: 100%;
    display: flex;
    overflow: none;
    flex-direction: column;
    z-index: 10;
    /* position: relative; */
    margin: ${ props => props.page !== '/' ? '0px' : '0px' };
    height: ${ props => props.page !== '/' ? 'auto' : '100vh' };
    position: ${props => props.page !== '/' ? null : 'relative'};
    
    .specs-img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }

    .content {
        z-index: 10;
        width: ${ props => props.page !== '/' ? ' null' : '30%' };
        margin: ${ props => props.page !== '/' ? '0px 10px 0px 0px' : '0px 0px 10px 70px' };
        
        h1 {
            font-size: ${ props => props.page !== '/' ? '2rem' : '3rem' };
            margin-bottom: 10px;
            margin: ${ props => props.page !== '/' ? '0px 0px 20px 0px' : '70px 0px 10px 0px' };
            z-index: 10;
        }
    }

    @media (max-width: 1200px) {
            /* flex-direction: column; */
            width: 100%;
            /* justify-content: center; */
            /* align-items: center; */
            margin: ${ props => props.page !== '/' ? '0px' : '0px' };

            .content {
                width: ${ props => props.page !== '/' ? ' null' : '80%' };
                margin: 0 auto;
            }
    }

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0;
        height: auto;
        
        h1 {
            /* margin: 20px 0px 20px 0px; */
            margin: ${ props => props.page !== '/' ? '0' : '20px 0px 20px 0px' };
        }

        .content {
            width: 100%;
            margin: 0px 0px 20px 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`

const SpecsContentContainer = styled.div`
    z-index: 10;
    /* width: 900px; */
    border-radius: 5px;
    width: 100%;
    /* padding: 10px; */
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        /* width: 80%; */
        height: 100%;
        margin: ${props => props.page !== '/' ? '0 auto' : null};

    }

    @media (max-width: 768px) {
        margin: ${ props => props.page !== '/' ? '0px' : '20px' };
        width: ${props => props.page !== '/' ? '100%' : '90%'};
    }
`

const SpecboxContainer = styled.div`
    padding: 1rem;
    text-align: center;
    width: 150px;
    /* width: 11rem; */
    height: 100px;

    .spec {
        margin: 10px;
        font-size: 1rem;
        color: white;
    }

    .value {
        margin: 10px;
        font-size: 1rem;
        color: lightgray;
    }

    @media (max-width: 768px) {
        justify-content: center;
        padding: 5px;
        margin: 0;
    }
`

