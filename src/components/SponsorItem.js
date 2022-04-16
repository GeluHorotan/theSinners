import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// Colors
import { accent, secondary, saturatedRed } from '../Utility/Colors';

import { motion } from 'framer-motion';

const SponsorItem = ({ setImage, setAlt, setText, setVariants }) => {
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

  @media screen and (max-width: 768px) {
    display: block;
    margin: 10rem;
    @media screen and (max-width: 1024px) {
      display: block;
      margin: 10rem 0;
    }
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
    margin-left: 65rem;

    overflow-x: hidden;

    @media screen and (max-width: 768px) {
      display: block;
      width: 85%;
      margin: 4rem auto;
    }
    @media screen and (max-width: 1024px) {
      display: block;
      width: 85%;
      margin: 4rem auto;
    }
    @media screen and (max-width: 1200px) {
      display: block;
      width: 85%;
      margin: 4rem auto;
    }
    @media screen and (min-width: 1201px) {
      margin-left: 45rem;
      display: block;
    }
    @media screen and (min-width: 1700px) {
      margin-left: 65rem;
    }
  }
  &:nth-child(odd) {
    margin-right: 65rem;
    @media screen and (max-width: 768px) {
      display: block;
      width: 85%;
      margin: 4rem auto;
    }
    @media screen and (max-width: 1024px) {
      display: block;
      width: 85%;
      margin: 4rem auto;
    }
    @media screen and (max-width: 1200px) {
      display: block;
      width: 85%;
      margin: 4rem auto;
    }
    @media screen and (min-width: 1201px) {
      margin-right: 45rem;
      display: block;
    }
    @media screen and (min-width: 1700px) {
      margin-right: 65rem;
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
  margin: 1rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
  }
  @media screen and (max-width: 1024px) {
    width: 12rem;
  }
  @media screen and (max-width: 1200px) {
    width: 14rem;
  }
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

export default SponsorItem;
