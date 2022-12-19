import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

export default function Products() {
  return (
    <Layout>
      <ProductsContainer>
        {/* <Product />
        <Product />
        <Product /> */}
      </ProductsContainer>
    </Layout>
  )
}

const ProductsContainer = styled.div`
  width: 100%;

  display: flex;
`