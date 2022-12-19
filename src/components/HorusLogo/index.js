import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export function HomeLogo() {
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

export function MainLogo() {
    return (
          <StaticImage 
              src='../../assets/horus-logo.png'
              alt='logo'
              placeholder='blurred'
              objectPosition={'100%'}
              width={70}
              height={150}
              className='logo'
          />
      )
  }
