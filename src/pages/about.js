import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

export default function About() {
  return (
    <Layout location='about'>
      <Container>
        <AboutContainer>
          <AboutBox>
            <h1 className='title'>Our Mission</h1>
            <text className='text'>At Horus we strike to manufacture top of line products that save lives. We do this by using combining creative designs with industry leading engineering. All of our products are crafted with the intention that whether you are a civilian, Law Enforcement or Military you will gain a tactical advantage when operating your firearm.</text>
          </AboutBox>
          <AboutBox>
            <h1 className='title'>About Horus Arms</h1>
            <text className='text'>We strive to create a company with employees that are like minded, and industry professionals. Currently we are building a diverse team with the intentions to support the firearms industry but also help and support the communities we live and work in.</text>
          </AboutBox>
          <AboutBox>
            <h1 className='title'>Made in America</h1>
            <text className='text'>All of our products that are available come with our guarantee the they are machined, manufactured, engineered and designed at our companies headquarters in Fort Worth. Having our production warehouses in Texas allows us to help support the people of Fort Worth by employing over 100 members of the community.</text>
          </AboutBox>
          <AboutBox>
            <h1 className='title'>Headquarters</h1>
            <text className='text'>14551 Lilyfrost Drive, P.O. Box  637781, Fort Worth, Texas</text>
          </AboutBox>
        </AboutContainer>
      </Container>
      
    </Layout>
  )
}

const Container = styled.div`
  background-color: #312624;
  height: 100vh;
  width: 100%;
`

const AboutContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  background-color: #312624;
  
`

const AboutBox = styled.div`
  width: 500px;
  margin: 20px;
  text-align: center;
  padding: 30px;
  border-radius: 15px;

  .title {
    color: rgba(228,114,99);
    margin-bottom: 5px;
  }

  .text {
    color: lightgray;
  }
`