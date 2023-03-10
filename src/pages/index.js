import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../components/Layout/HomeLayout';
import { graphql } from 'gatsby';
// import { Section } from '../components/Section';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import NextGen from '../components/NextGen';
import BottomSection from '../components/BottomSection';


export const pageQuery = graphql`
  query FeatureData {
    images: allFile(filter: {name: {regex: "/feature/"}}, sort: {name: ASC}) {
      edges {
        node {
          id
          name
          childrenImageSharp {
            gatsbyImageData(formats: WEBP, webpOptions: {quality: 80})
          }
        }
      }
    }
    textData: allHelpersJson {
      nodes {
        feature1 {
          text
          title
          mainIdea
        }
        feature2 {
          text
          title
          mainIdea
        }
        feature3 {
          text
          title
          mainIdea
        }
        feature4 {
          text
          title
          mainIdea
        }
      }
    } 
  }
`

export default function Home({ location, data }) {
    return (
        <HomeLayout location={location}>
            {/* {home} */}
            <DesktopHome>
                <Alternating data={data}/>
            </DesktopHome>
            <MobileHome>
                <Stacked data={data}/>
            </MobileHome>
        </HomeLayout>
    )
}


const Stacked = ({ data }) => {
    return (
        <>
            <HeroSection />
            <NextGen />
            <FeatureSection 
                align='right' 
                image={data.images.edges[0].node.childrenImageSharp[0].gatsbyImageData}
                textData={data.textData.nodes[0].feature1} 
            />
            <FeatureSection 
                align='right' 
                image={data.images.edges[1].node.childrenImageSharp[0].gatsbyImageData}
                textData={data.textData.nodes[0].feature2} 
            />
            <FeatureSection 
                align='right' 
                video='true'
                textData={data.textData.nodes[0].feature3} 
            />
            <FeatureSection 
                align='right'
                image={data.images.edges[3].node.childrenImageSharp[0].gatsbyImageData}
                textData={data.textData.nodes[0].feature4} 
            />
            <BottomSection specs={data.kyberSpecs}/>
        </>
    )
}

const Alternating = ({ data }) => {
    return (
        <>
            <HeroSection />
            <NextGen />
            <FeatureSection 
                align='right' 
                image={data.images.edges[0].node.childrenImageSharp[0].gatsbyImageData}
                textData={data.textData.nodes[0].feature1} 
            />
            <FeatureSection 
                align='left' 
                image={data.images.edges[1].node.childrenImageSharp[0].gatsbyImageData}
                textData={data.textData.nodes[0].feature2} 
            />
            <FeatureSection 
                align='right' 
                video='true'
                textData={data.textData.nodes[0].feature3} 
            />
            <FeatureSection 
                align='left' 
                image={data.images.edges[3].node.childrenImageSharp[0].gatsbyImageData}
                textData={data.textData.nodes[0].feature4} 
            />
            <BottomSection specs={data.kyberSpecs}/>
        </>
    )
}

const MobileHome = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`

const DesktopHome = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`


