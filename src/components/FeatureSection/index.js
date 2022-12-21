import React from 'react';
import styled from 'styled-components';
import { Section } from '../Section';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Video } from '../Video';
import poster from '../../assets/poster-feat3-still.png';
import feature3 from '../../assets/feature3.mp4';

export default function FeatureSection({ align, image, textData, video }) {
    return (
        <StyledFeatureSection>
            <ContentContainer>
                {align === 'right' 
                    ? <RightAligned image={image} textData={textData} video={video}/> 
                    : <LeftAligned image={image} textData={textData} video={video}/>
                }
                {/* <RightAligned image={image} textData={textData} video={video}/> */}
            </ContentContainer>
        </StyledFeatureSection>
    )
}

const RightAligned = ({image, textData, video}) => {
    return (
        <>  
            <ImageHalf>
                { video === 'true'
                    ? <Video className='feature3-vid' type="mp4" src={feature3} poster={poster} name="feature3-vid"/> 
                    : <GatsbyImage className='gatsby-image' image={image} alt='image' placeholder='blurred'/> 
                }
                
            </ImageHalf>
            <TextHalf>
                <hr />
                <h4 className='title'>{ textData.title }</h4>
                <h1 className='main-idea'>{ textData.mainIdea }</h1>
                <p className='text-data'>{ textData.text }</p>
            </TextHalf>
        </>
    )
}

const LeftAligned = ({image, textData, video}) => {
    return (
        <>
            <TextHalf>
                <hr />
                <h4 className='title'>{ textData.title }</h4>
                <h1 className='main-idea'>{ textData.mainIdea }</h1>
                <p className='text-data'>{ textData.text }</p>
            </TextHalf>
            <ImageHalf>
                <GatsbyImage 
                    image={image} 
                    alt='image'
                    placeholder='blurred'
                />
            </ImageHalf>
            
        </>
    )
}

const StyledFeatureSection = styled(Section)`

`

const ContentContainer = styled.div`
    display: flex;
    padding: 20px;

    @media (max-width: 768px) {
        display: inline-block;
    }
    
`
const TextHalf = styled.div`
    /* margin: 10px; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    /* border: 1px solid red; */
    color: white;

    @media (max-width: 768px) {
        width: 100%;
    }

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
        /* padding: 10px; */
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

    .text-data {
        padding: 10px;
        line-height: 2rem;
        font-size: 1.25rem;
        color: lightgray;

    }
`

const ImageHalf = styled.div`
    width: 85%;
    margin: 10px;
    /* border: 1px solid red; */

    @media (max-width: 768px) {
        margin: 0;
        width: 100%;
    }

    .gatsby-image {
        background-color: #312624;
    }

    .feature3-vid {
        width: 100%;
    }
`
