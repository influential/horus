import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
// import { Section } from '../components/Section';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import NextGen from '../components/NextGen';
import BottomSection from '../components/BottomSection';
import { useDimensions } from '../hooks/useDimensions';


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

export default function Home({ data }) {
  const dimensions = useDimensions();

  return (
    <Layout>
      <HeroSection />
      <NextGen />
      <FeatureSection 
        align='right' 
        image={data.images.edges[0].node.childrenImageSharp[0].gatsbyImageData}
        textData={data.textData.nodes[0].feature1} 
      />
      <FeatureSection 
        align={dimensions.winWidth < 768 ? 'right' : 'left'} 
        image={data.images.edges[1].node.childrenImageSharp[0].gatsbyImageData}
        textData={data.textData.nodes[0].feature2} 
      />
      <FeatureSection 
        align='right' 
        video='true'
        textData={data.textData.nodes[0].feature3} 
      />
      <FeatureSection 
        align={dimensions.winWidth < 768 ? 'right' : 'left'} 
        image={data.images.edges[3].node.childrenImageSharp[0].gatsbyImageData}
        textData={data.textData.nodes[0].feature4} 
      />
      <BottomSection specs={data.kyberSpecs} mobile={dimensions.winWidth < 768 ? 'false' : 'true'}/>
    </Layout>
  )
}


