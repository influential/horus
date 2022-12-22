// import React from 'react';
import styled from 'styled-components';

// export function HeroBase() {
//   return (
//     <div>
        
//     </div>
//   )
// }

export const UpperHero = styled.div`
    /* z-index: -100; */
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    /* margin-top: 150px; */
    /* top: 0; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    font-weight: normal;
    font-size: 5em;
`

export const Hero = styled.div`
    /* z-index: -100; */
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 150px;
    /* top: 0; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    font-weight: normal;
    font-size: 5em;



    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        margin-top: 120px;
    }
`