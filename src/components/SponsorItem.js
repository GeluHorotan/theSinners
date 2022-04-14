import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// Colors
import { accent, secondary, saturatedRed } from './Colors';

const SponsorItem = ({ setImage, setAlt, setText }) => {
  return (
    <MainContainer>
      <ImgStyle src={setImage} alt={setAlt} />

      <SecondaryContainer>
        <PStyle>{setText}</PStyle>

        <Button setClassName='red' isLink setLink='/'>
          SHOP NOW
        </Button>
      </SecondaryContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  align-items: center;
  margin: 8rem auto;
  background: ${accent};
  border-radius: 3rem;
  padding: 2rem;
  transition: 0.4s all ease;

  &:hover {
    background: ${secondary};

    transform: scale(1.03);
  }
  &:hover p {
    color: ${accent};
  }

  &:nth-last-child(5) {
    margin-top: 10rem;
  }

  &:nth-child(even) {
    margin-left: 65rem;
  }
  &:nth-child(odd) {
    margin-right: 65rem;
  }

  a {
    font-size: 1.5rem;
    color: ${saturatedRed};
  }
  &:hover a {
    color: ${accent};
   
  }

  button {
    transition: 0.5s all ease;
    border-radius: 2rem;

    margin-top: 1rem;
  }

  &:hover button {
    transform: scale(1.2);
    color: ${accent};
  
  }

  #top {
    background: none;
  }
  #bottom {
    background: none;
  }
  #left {
    background: none;
  }
  #right {
    background: none;
  }
`;
const PStyle = styled.p`
  color: white;
`;

const ImgStyle = styled.img`
  align-items: center;
  justify-content: center;
  width: 15rem;
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 1rem;
`;

export default SponsorItem;
