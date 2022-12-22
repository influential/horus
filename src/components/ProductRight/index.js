import React from 'react';
import styled from 'styled-components';
import ProductSpecs from '../ProductSpecs';


export default function ProductRight({ data, product, mobile }) {
    return (
      <RightSideContainer>
        <Overview>
            <h1>Overview</h1>
            <p>{ data.overview }</p>
        </Overview>

        <ProductSpecs productName={data.shorTitle} specs={data.specs} mobile={mobile}/>

        <BottomRightSide>
            <div className='right-side-box'>
                <h1 className='includes'>Includes</h1>
                <ul>
                    {data.includes.map((item, idx) => {
                        return(
                            <li key={idx}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='right-side-box'>
                <h1 className='retail'>Retail ${data.price}</h1>
            </div>

        </BottomRightSide>
      </RightSideContainer>
    )
}
  
const RightSideContainer = styled.div`
    width: 75%;
    /* margin: 20px; */
    padding: 25px;
    /* height: 400px; */
    /* border: 1px solid red; */

    .includes {
        font-size: 2rem;
        margin-bottom: 5px;
        margin-top: 20px;
    }

    li {
        margin-left: 20px;
        margin-bottom: 5px;
    }

    .retail {
        margin-top: 20px;
    }
    
    

    @media (max-width: 1400px) {
            /* flex-direction: column; */
            /* width: 50%; */
            
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;

    }
    `

    const Overview = styled.div`
        width: 80%;
        margin-bottom: 30px;
        /* margin-top: 30px; */

        h1 {
            margin-bottom: 10px;
            /* margin: 5px; */

        }

        p {
            font-size: 1.25rem;
            margin-bottom: 10px;
        }

        @media (max-width: 1500px) {
            width: 100%;
            /* margin: 10px; */
            /* padding: 20px; */
            margin: 0;
        }
`
  
    const BottomRightSide = styled.div`
        margin: auto 0;
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        /* justify-content: space-around; */
        
        .bottom-right-content {
            display: flex;
            justify-content: center;
        }

        @media (max-width: 1500px) {
            display: flex;
            justify-content: space-around;
            .right-side-box {
                width: 50%;
            }
        }
    `