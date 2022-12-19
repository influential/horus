import React from 'react';
import styled from 'styled-components';

function KyberInfo() {
  return (
    <KyberBox>
        <KyberStat>
            <h3 className='category'>Power</h3>
            <h5 className='stat'>Fiber Optic Charging</h5>
        </KyberStat>
        <KyberStat>
            <h3 className='category'>Waterproof</h3>
            <h5 className='stat'>10m</h5>
        </KyberStat>
        <KyberStat>
            <h3 className='category'>Materials</h3>
            <h5 className='stat'>Titanium-Aluminum</h5>
        </KyberStat>
    </KyberBox>
  )
}

export default KyberInfo;

const KyberStat = styled.div`
    margin: 10px;
    @media (max-width: 768px) {
        margin: 3px;
        
    }

`

const KyberBox = styled.div`
    position: absolute;
    width: 800px;
    height: 120px;
    background-color: white;
    border-radius: 4px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    left: 0;
    bottom: 0;
    
    margin: 0px 0px 100px 100px;

    @media (max-width: 768px) {
        margin: 0px 0px 100px 19px;
        /* margin-top: 200px; */
        width: 500px;
    }
`