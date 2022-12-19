import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 200px;
    background-color: tomato;
    color: white;
    margin: 0 auto;
    padding: .35em 0.75em;
    text-align: center;
    cursor: pointer;
    transition: 0.25s;
    font-size: 1.5rem;
    border-radius: 5px;
    

    &:hover {
        background: rgba(0,0,0,0.25);
        color: white;
    }
`


export default function Button({text, onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
        { text }
    </ButtonContainer>
  )
}

