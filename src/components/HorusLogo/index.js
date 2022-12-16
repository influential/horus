import React from 'react';
import styled from 'styled-components';


import { StaticImage } from 'gatsby-plugin-image';


function HorusLogo({ data }) {
  return (
        <StaticImage 
            src='../../assets/horus-logo.png'
            alt='logo'
            placeholder='blurred'
            objectPosition={'100%'}
            width={200}
            height={300}
            className='logo'
        />
    )
}

export default HorusLogo;

export const Logo = styled(HorusLogo)`
   /* margin-left: 200px; */
`