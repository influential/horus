import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GatsbyImage } from 'gatsby-plugin-image';


export default function ProductLeftSide({ data }) {
    return (
        <LeftSideContainer>
            <h1 className='title'>{data.title}</h1>
            <div className='carousel-wrapper'>
                <Carousel className='carousel' showThumbs={false} infiniteLoop={true}>
                    {
                        data.images.map((image, idx) => {
                            // console.log(image.childrenImageSharp[0].gatsbyImageData)
                            return (
                                <div key={idx}>
                                    <GatsbyImage 
                                        image={image.childrenImageSharp[0].gatsbyImageData} 
                                        alt='image'
                                        placeholder='outline'
                                        loading='eager'
                                    />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </LeftSideContainer>
    )
}
  
  const LeftSideContainer = styled.div`
    width: 100%;
    /* height: 100%; */
    /* width: 1500px; */
    /* padding: */
    /* margin: 20px; */
    display: flex;
    flex-direction: column;
    padding: 20px;

    .carousel-wrapper {
        @media (max-width: 1400px) {
            /* flex-direction: column; */
            width: 75%;
            display: flex;
            justify-content: center;
        }

        @media (max-width: 768px) {
            /* flex-direction: column; */
            width: 100%;
            display: flex;
            justify-content: center;

        }
    }

    .carousel {
        width: 100%;
    }
  
    @media (max-width: 1400px) {
        width: 75%;
        margin: 0;
  
        .title {
          text-align: center;
          margin-top: 15px;
        }
    }
    
    @media (max-width: 1400px) {
        width: 100%;
        align-items: center;
        padding: 0;
        
    }
  
    /* border: 1px solid green; */
  
    .title {
      font-size: 3rem;
      margin-bottom: 5px;
    }
  `