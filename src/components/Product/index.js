import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import ProductLeft from '../ProductLeft';
import ProductRight from '../ProductRight';

export default function Product({ pageContext }) {
    // const dimensions = useDimensions();

    useEffect(() => {
        console.log(pageContext.product);
    });

    return (
        <Layout>
            <ProductContainer>
                <ProductLeft 
                    product={pageContext.product.shortTitle} 
                    data={pageContext.product}
                />
                <ProductRight 
                    product={pageContext.product.shortTitle} 
                    data={pageContext.product} 
                />
            </ProductContainer>
        </Layout>
    )
}

const ProductContainer = styled.div`
  width: 100%;
  background-color: #d3c6c6;
  display: flex;
  justify-content: center;

  @media (max-width: 1500px) {
      flex-direction: column;
  }
` 