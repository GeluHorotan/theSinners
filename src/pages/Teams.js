import React from 'react';
import styled from 'styled-components';
import { NikeCard } from '../components/nikeCard';

// Utility
import { primary } from '../Utility/Colors';

const Teams = () => {
  return (
    <BackgroundStyle>
      <NikeCard />
    </BackgroundStyle>
  );
};

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: ${primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Teams;
