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
  
        {/* <ProductSpecs product={product} mobile={mobile}/> */}

        {/* {product === 'kyber' && <KyberSpecs />} */}
        {/* {product === 'kiros' && <KirosSpecs />} */}
        <ProductSpecs productName={data.shorTitle} specs={data.specs} mobile={mobile}/>

        {/* {product === 'hr45' && <Hr45Specs />} */}


        <BottomRightSide>
          <div>
            <h1 className='includes'>Includes</h1>
            <ul>
                {data.includes.map((item, idx) => {
                    return(
                        <li key={idx}>{item}</li>
                    )
                })}
            </ul>
          </div>
          <h1 className='retail'>Retail ${data.price}</h1>
        </BottomRightSide>
      </RightSideContainer>
    )
}
  
const RightSideContainer = styled.div`
    width: 100%;
    margin: 20px;
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

    @media (max-width: 1500px) {
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

        text {
            font-size: 1.25rem;
        }

        @media (max-width: 1500px) {
            width: 100%;
            /* margin: 10px; */
            padding: 20px;
            margin: 0;
        }
`
  
    const BottomRightSide = styled.div`
        margin: auto 0;
        width: 100%;
        margin-bottom: 20px;

        @media (max-width: 1500px) {
            display: flex;
            justify-content: space-around;
        }
    `