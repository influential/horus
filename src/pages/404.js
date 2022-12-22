import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

export default function Error404() {
  return (
    <Layout location='404'>
        <Container>
            <h1>404</h1>
            <h2>Sorry, that page doesn't exist.</h2>
        </Container>
    </Layout>
  )
}

const Container = styled.div`
    background-color: #d3c6c6;
    width: 100%;
    /* height: 100vh; */
    padding: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3.5rem;
    }
    
    h2 {
        font-size: 2.5rem;
    }
`