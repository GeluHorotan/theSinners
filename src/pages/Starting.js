import React from 'react';
// Page Components
import Logo from '../components/Logo';
import Button from '../components/Button';
import DotaLogo from '../components/DotaLogo';
// Style
import styled from 'styled-components';
import { primary } from '../Utility/Colors';

const Starting = () => {
  return (
    <DivStyle>
      <Logo />

      <Button setIcon={<DotaLogo />} isLink setLink='/homepage'>
        <h5>BEGIN YOUR JOURNEY</h5>
      </Button>
    </DivStyle>
  );
};

const DivStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  background: ${primary};
`;

export default Starting;
