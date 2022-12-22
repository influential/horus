import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
// import { Section } from '../components/Section';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import NextGen from '../components/NextGen';
import BottomSection from '../components/BottomSection';
import { useWindowDimensions } from '../hooks/useWindowDimensions';


export const pageQuery = graphql`
  query FeatureData {
    images: allFile(filter: {name: {regex: "/feature/"}}, sort: {name: ASC}) {
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
    const dimensions = useWindowDimensions();
    const home = 
    typeof window !== 'undefined' ? 
        dimensions.winWidth > 768 
            ? <Alternating data={data}/>    // Desktop
            : <Stacked data={data}/>    // Mobile
        : null;

    return (
        <Layout location={location}>
            {home}
        </Layout>
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


