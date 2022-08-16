import React from 'react';
import styled from 'styled-components';

import ErrorUnderConstruction from './ErrorUnderConstruction';
import Error404 from './Error404';

const ErrorHandler = ({ children, type }) => {
  return (
    <Wrapper>
      {type === 'under_construction' && (
        <>
          <ErrorUnderConstruction
            className={'under_construction_svg'}
          ></ErrorUnderConstruction>
          <div className='error_header'>{children}</div>
        </>
      )}
      {type === '404' && (
        <>
          <Error404 className={'404_svg'}></Error404>

          <div className='error_header'>{children}</div>
        </>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .404_svg {
    @media screen and (max-width: 1000px) {
      height: 35vh;
    }
    @media screen and (max-width: 500px) {
      height: 25vh;
    }
  }
  .under_construction_svg {
    @media screen and (max-width: 1000px) {
      height: 35vh;
    }
    @media screen and (max-width: 500px) {
      height: 25vh;
    }
  }
`;
export default ErrorHandler;
