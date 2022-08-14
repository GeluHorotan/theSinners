import React from 'react';
import Error404 from './Error404';
import styled from 'styled-components';

const ErrorHandler = ({ children }) => {
  return (
    <Wrapper>
      <Error404></Error404>
      <div className='error_header'>{children}</div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    height: 20rem;
  }
  .error_header {
    width: 100%;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
  }
`;
export default ErrorHandler;
