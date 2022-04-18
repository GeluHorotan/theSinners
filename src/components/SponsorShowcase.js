import React from 'react';
import styled from 'styled-components';

// Colors
import { primary } from '../Utility/Colors';

const SponsorShowcase = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  width: 100%;
  background: ${primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SponsorShowcase;