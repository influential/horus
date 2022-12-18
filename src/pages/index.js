import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
// import { Section } from '../components/Section';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import NextGen from '../components/NextGen';
import { Section } from '../components/Section';
import BottomSection from '../components/BottomSection';



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
      <HeroSection />
      <NextGen />
      <FeatureSection 
        align='right' 
        image={data.images.edges[0].node.childrenImageSharp[0].gatsbyImageData}
        textData={data.textData.nodes[0].feature1} 
      />
      <FeatureSection 
        align={windowDimenion.winWidth < 768 ? 'right' : 'left'} 
        image={data.images.edges[1].node.childrenImageSharp[0].gatsbyImageData}
        textData={data.textData.nodes[0].feature2} 
      />
      <FeatureSection 
        align='right' 
        video='true'
        textData={data.textData.nodes[0].feature3} 
      />
      <FeatureSection 
        align={windowDimenion.winWidth < 768 ? 'right' : 'left'} 
        image={data.images.edges[3].node.childrenImageSharp[0].gatsbyImageData}
        textData={data.textData.nodes[0].feature4} 
      />
      <BottomSection />
        
      

    </Layout>
  )
}


