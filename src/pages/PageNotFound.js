import React from 'react';
import styled from 'styled-components';
import { primary } from '../Utility/Colors';
import Error404 from '../components/Error404';
import { Link } from 'react-router-dom';
import NavigationDisabler from '../Utility/NavigationDisabler';

import Button from '../components/Button';
import ErrorHandler from '../components/ErrorHandler';

const PageNotFound = () => {
  return (
    <Wrapper>
      <NavigationDisabler></NavigationDisabler>
      <ErrorHandler type='404'>
        {' '}
        <div className='back_to'>
          <div className='text'>
            We're sorry, the page you requested could not be found.
          </div>
          <Button
            isLink
            setLink='/'
            background='#f24976'
            bradius={'5rem'}
            isRipple
          >
            GO HOME
          </Button>
        </div>
      </ErrorHandler>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 3rem;
    color: ${primary};
    @media screen and (max-width: 677px) {
      font-size: 1rem;
    }
  }
  .back_to {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    button {
      margin-top: 1rem;
    }
  }
`;

export default PageNotFound;
