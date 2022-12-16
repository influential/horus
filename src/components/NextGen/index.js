import React from 'react';
import styled from 'styled-components';

export default function NextGen() {
  return (
    <NextGenWrapper>
        <h1>INTRODUCING THE NEXT GENERATION OF OPTIC SUPERIORITY</h1>
    </NextGenWrapper>
  )
}

const NextGenWrapper = styled.div`
    background-color: #312624;
    width: 100%;
    color: white;
    text-align: center;
    padding: 160px 50px;
    font-size: 2rem;
    margin-top: 180px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 100px;
    }
`

