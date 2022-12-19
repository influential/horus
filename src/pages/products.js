import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const pageQuery = graphql`
  query ProductsData {
    images: allFile(filter: {name: {regex: "/products/"}}, sort: {name: ASC}) {
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
        products1 {
          title
          description
        }
        products2 {
          title
          description
        }
        products3 {
          title
          description
        }
      }
    }
  }
`

export default function Products({ data }) {
  return (
    <Layout>
      <ProductsContainer>
        <Product 
          image={data.images.edges[0].node.childrenImageSharp[0].gatsbyImageData} 
          title={data.textData.nodes[0].products1['title']} 
          description={data.textData.nodes[0].products1['description']}
        />
        <Product 
          image={data.images.edges[1].node.childrenImageSharp[0].gatsbyImageData} 
          title={data.textData.nodes[0].products2['title']} 
          description={data.textData.nodes[0].products2['description']}
        />
        <Product 
          image={data.images.edges[2].node.childrenImageSharp[0].gatsbyImageData} 
          title={data.textData.nodes[0].products3['title']} 
          description={data.textData.nodes[0].products3['description']}
        />
      </ProductsContainer>
    </Layout>
  )
}

const ProductsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d3c6c6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Product = ({ image, title, description }) => {
  return (
    <ProductContainer>
      <GatsbyImage 
        image={image} 
        alt='image'
        placeholder='blurred'
      />
      <h1>{ title }</h1>
      <p>{ description }</p>
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  width: 500px;
  text-align: center;
  margin: 20px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    padding: 10px;
  }
`

