import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GatsbyImage } from 'gatsby-plugin-image';



export default function ProductLeftSide({ data }) {
    return (
        <LeftSideContainer>
            <h1 className='title'>{data.title}</h1>
            <Carousel showThumbs={false} infiniteLoop={true}>
                {
                    data.images.map((image, idx) => {
                        // console.log(image.childrenImageSharp[0].gatsbyImageData)
                        return (
                            <div key={idx}>
                                <GatsbyImage 
                                    image={image.childrenImageSharp[0].gatsbyImageData} 
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