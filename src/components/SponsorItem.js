import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// Colors
import { accent, secondary, saturatedRed } from '../Utility/Colors';

import { motion } from 'framer-motion';

const SponsorItem = ({ setImage, setAlt, setText, setVariants }) => {
  console.log(setVariants);
  return (
    <MainContainer
      variants={setVariants}
      initial='hidden'
      animate='show'
      whileHover='hover'
    >
      <ImgStyle src={setImage} alt={setAlt} />

      <SecondaryContainer>
        <PStyle>{setText}</PStyle>

        <Button isLink setLink='/'>
          SHOP NOW
        </Button>
      </SecondaryContainer>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 35%;
  align-items: center;
  margin: 8rem auto;
  background: ${accent};
  border-radius: 3rem;
  padding: 2rem;
  overflow: hidden;

  @media screen and (max-width: 934px) {
    display: block;
    border-radius: 0;
  }

  &:hover {
    background: ${secondary};
    transition: 0.4 all ease-in-out;
    box-shadow: -1px 1px 1.2rem 0.8rem #0e0e0e;
  }
  &:hover p {
    color: ${accent};
  }

  &:nth-last-child(5) {
    margin-top: 10rem;
  }

  &:nth-child(even) {
    margin-left: 35rem;

    @media screen and (max-width: 934px) {
      margin-left: 0;
      display: block;
    }
    @media screen and (max-width: 1024) {
      margin-left: 0;
      display: block;
    }
  }
  &:nth-child(odd) {
    margin-right: 35rem;
    @media screen and (max-width: 934px) {
      margin-right: 0;
      display: block;
    }
    @media screen and (max-width: 1024) {
      margin-right: 0;
      display: block;
    }
  }

  a {
    font-size: 1.5rem;
    color: ${saturatedRed};
  }
  &:hover a {
    color: ${accent};
  }

  button {
    border-radius: 2rem;
    transition: 0.4s all ease-in-out;
    margin-top: 1rem;
  }

  &:hover button {
    transform: scale(1.1);
    color: ${accent};
  }

  #top,
  #bottom,
  #left,
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
