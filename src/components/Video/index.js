import React from 'react';
// import styled from 'styled-components';

export function Video({ src, poster, type, name }) {
  return (
    <video autoPlay muted loop poster={poster} className={name}>
        <source src={src} type={`video/${type}`} />
    </video>
  )
}
