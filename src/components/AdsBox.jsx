import React from 'react';
import styled from 'styled-components';

const AdsBox = ({ adsIcon, text}) => {
    return (
        <AdsBoxContainer>
            <img src={adsIcon} alt="info-icon" />
            <h4>{text}</h4>
        </AdsBoxContainer>
    );
};

const AdsBoxContainer = styled.div`
    padding: 22px 0 13px 0;
    background: #FFF4EA;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 83px 0 63px 0;

    h4 {
        font-family: circular-std-bold;
        margin-left: 26px;
        color: #000;
    }

    @media screen and (max-width: 1200px){
        padding: 22px 12px 13px 12px;
    }

    @media screen and (max-width: 1024px){
        margin: 40px 0 63px 0;
    }
    @media screen and (max-width: 640px){
        font-size: 14px;
        margin: 40px 0 33px 0;
    }
`

export default AdsBox;
