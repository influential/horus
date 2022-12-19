import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const pageQuery = graphql`
  query ProductData {
    images: allFile(filter: {name: {regex: "/purchase-muzzle/"}}, sort: {name: ASC}) {
      edges {
        node {
          id
          name
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default function KirosProduct({ data }) {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    // console.log(winWidth)
    console.log(windowDimenion)

    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDimenion]);
  
  return (
    <Layout>
      <ProductContainer>
        <TopContainer>
          <LeftSide data={data}/>
          <RightSide data={data} mobile={windowDimenion.winWidth < 768 ? 'false' : 'true'}/>
        </TopContainer>
      </ProductContainer>
    </Layout>
  )
}

const ProductContainer = styled.div`
  
`

const TopContainer = styled.div`
  width: 100%;
  background-color: #d3c6c6;
  display: flex;
  justify-content: center;

  @media (max-width: 1500px) {
      flex-direction: column;
  }
` 

const LeftSide = ({ data }) => {
  return (
    <LeftSideContainer>
      <h1 className='title'>Kiros HR Muzzle Break</h1>
      <Carousel showThumbs={false} infiniteLoop={true}>
          {
            data.images.edges.map((image, idx) => {
              console.log(image.node.childrenImageSharp[0].gatsbyImageData)
                return (
                  <div key={idx}>
                    <GatsbyImage 
                      image={image.node.childrenImageSharp[0].gatsbyImageData} 
                      alt='image'
                      placeholder='outline'
                    />
                  </div>
                )
            })
          }
        </Carousel>
    </LeftSideContainer>
  )
}

const LeftSideContainer = styled.div`
  width: 100%;
  width: 1500px;
  margin: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
      width: 100%;
      margin: 0;

      .title {
        text-align: center;
        margin-top: 15px;
      }
  }

  /* border: 1px solid green; */

  .title {
    font-size: 3rem;
    margin-bottom: 5px;
  }
`

const RightSide = ({ data, mobile }) => {
  return (
    <RightSideContainer>
      <Overview>
          <h1>Overview</h1>
          <text>Optimal muzzle break options for mid range calibers, such as .556 .300 blackout and .223. Great product for shooters looking for an advantage in any scenario. Provides great recoil reduction while not sacrificing flash reduction.</text>
      </Overview>
      
      <Specs mobile={mobile}/>
      <BottomRightSide>
        <div>
          <h1 className='includes'>Includes</h1>
          <ul>
            <li>Cleaning Kit</li>
            <li>Horus Arms Sticker</li>
            <li>Warranty card</li>
          </ul>
        </div>
        
        <h1 className='retail'>Retail $195.00</h1>
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



const Specs = ({ mobile }) => {
  return (
      <SpecsContainer>
          <SpecsContent mobile={mobile}/>
      </SpecsContainer>
  )
}

const SpecsContent = ({ mobile }) => {
  return (
      <div className='content'>
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
              {mobile === 'true' 
                  ?
                      <>
                          <Specbox spec='' value=''/>
                          <Specbox spec='' value=''/>
                      </> 
                  : null
              }
              
          </SpecsContentContainer>
      </div>
      
  )
}


const SpecsContainer = styled.div`
  width: 100%;
  /* height: 200px; */
  
  
  /* height: 100vh; */
  /* overflow: none; */
  /* position: relative; */
  display: flex;
  flex-direction: column;

  .specs-title {
      font-size: 2rem;
      margin-bottom: 10px;
      /* margin: 70px 0px 10px 40px; */
  }

  @media (max-width: 1500px) {
      justify-content: center;
      align-items: center;
      text-align: center;
      
      .specs-title {
          margin: 0px 0px 20px 0px;
          
      }
  }

  .content {
      z-index: 10;
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
  /* margin: 0px 50px; */
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
const BottomRightSide = styled.div`
  margin: auto 0;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1500px) {
      display: flex;
      justify-content: space-around;
  }
`