import React from 'react';
// Page Components
import Logo from '../components/Logo';
import Button from '../components/Button';
// Style
import styled from 'styled-components';
import { primary, desaturatedRed } from '../Utility/Colors';

// Animations

import { popup } from '../components/animation';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Starting = () => {
  return (
    <DivStyle>
      <Logo />
      {/* <Button  setLink='/'> <Logo/> </Button> */}
      <Button
        isLink
        setVariants={popup}
        setInitial='hidden'
        setAnimate='show'
        setIcon={<FontAwesomeIcon id='openBook' size='1x' icon={faBookOpen} />}
        setLink='/homepage'
      >
        <h4> BEGIN YOUR JOURNEY</h4>
      </Button>
    </DivStyle>
  );
};

const DivStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${primary};
  overflow-x: visible;

  #openBook {
    color: ${desaturatedRed};
    margin-right: 0.5rem;
  }
`;

export default Starting;
