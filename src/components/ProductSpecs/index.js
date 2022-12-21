import React from 'react';
import styled from 'styled-components';

export default function ProductSpecs({ specs, mobile }) {
    return (
        <SpecsContainer>
            <h1>Specs</h1>
            <SpecsContent specs={specs} mobile={mobile}/>
        </SpecsContainer>
    )
}
  
const SpecsContent = ({ specs, mobile }) => {
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
        <SpecsContentContainer>
            {Object.entries(specs).map(([spec, value], idx) => {
                console.log(`${spec}:${value}`)
                return (value === null 
                    ? null 
                    : <Specbox key={idx} spec={specNameMap[spec]} value={value}/>
                )
            })}
        </SpecsContentContainer>
    )
}

const Specbox = ({ spec, value }) => {
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
    flex-direction: column;
    z-index: 10;

    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
    }

    @media (max-width: 1500px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        
        .specs-title {
            margin: 0px 0px 20px 0px;
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
        margin: 0 auto;
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

