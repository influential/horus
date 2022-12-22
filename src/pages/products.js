import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';


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

export default function Products({ location, data }) {
  return (
    <Layout>
      <Container>
        <ProductsContainer>
          <ProductCard
            href={'/products/kyber'} 
            image={data.images.edges[0].node.childrenImageSharp[0].gatsbyImageData} 
            title={data.textData.nodes[0].products1['title']} 
            description={data.textData.nodes[0].products1['description']}
          />
          <ProductCard
            href={'/products/kiros'} 
            image={data.images.edges[1].node.childrenImageSharp[0].gatsbyImageData} 
            title={data.textData.nodes[0].products2['title']} 
            description={data.textData.nodes[0].products2['description']}
          />
          <ProductCard
            href={'/products/hr45'} 
            image={data.images.edges[2].node.childrenImageSharp[0].gatsbyImageData} 
            title={data.textData.nodes[0].products3['title']} 
            description={data.textData.nodes[0].products3['description']}
          />
        </ProductsContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  background-color: #d3c6c6;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    height: 100%;
  }
`

const ProductsContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-color: #d3c6c6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
      text-decoration: none;
      color: black;
  }
`

const ProductCard = ({ image, title, description, href }) => {
  return (
    <Link to={href}>
      <ProductContainer>
        <GatsbyImage 
          image={image} 
          alt='image'
          placeholder='blurred'
        />
        <h1 className='title'>{ title }</h1>
        <p className='description'>{ description }</p>
      </ProductContainer>
    </Link>
    
  )
}

const ProductContainer = styled.div`
  width: 500px;
  text-align: center;
  margin: 20px;
  cursor: pointer;
  transition: 0.25s;

  .title {
    margin: 10px;
  }

  .description {
    font-size: 1.1rem;
  }

  &:hover {
    padding: 10px;
  }
`

