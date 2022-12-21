import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

export default function ProductSpecs({ page, specs }) {
    useEffect(() => {
        console.log("PAGE: ", page)
    },[page])
    return (
        <SpecsContainer page={page}>
            <div className='content'>
                <h1>Specs</h1>
                <SpecsContent page={page} specs={specs}/>
            </div>
            
            {page !== '/' ? null : <StaticImage className='specs-img' src='../../assets/home-specs.png' alt=''/>}
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
                console.log(`${spec}:${value}`)
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
        /* width: 100%; */
        margin: ${ props => props.page !== '/' ? '0px 10px 0px 0px' : '0px 0px 10px 70px' };
        
        h1 {
            font-size: ${ props => props.page !== '/' ? '2rem' : '3rem' };
            margin-bottom: 10px;
            margin: ${ props => props.page !== '/' ? '0px 0px 20px 0px' : '70px 0px 10px 0px' };
            z-index: 10;
        }
    }

    @media (max-width: 1500px) {
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
    width: 900px;
    border-radius: 5px;
    
    padding: 10px;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1500px) {
        width: 80%;
        height: 100%;
        margin: ${props => props.page !== '/' ? '0 auto' : null};
    }
`

const SpecboxContainer = styled.div`
    padding: 1.5rem;
    text-align: center;
    width: 203px;
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

    @media (max-width: 1500px) {
        justify-content: center;
        padding: 5px;
        
        margin: 0;
    }
`

