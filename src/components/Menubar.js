import React from 'react';
import styled from 'styled-components';

const Menubar = ({ children, className }) => {
  return <MenubarStyles className={className}>{children}</MenubarStyles>;
};

const MenubarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 2.5rem;

  color: white;
`;

export default Menubar;
