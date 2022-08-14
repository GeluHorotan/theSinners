import React from 'react';
import styled from 'styled-components';
import { primary } from '../Utility/Colors';
import Error404 from '../components/Error404';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';

const PageNotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <Error404></Error404>
      <div className='back_to'>
        <div className='text'>
          We're sorry, the page you requested could not be found. <br />
          Please go back to the homepage.{' '}
        </div>{' '}
        <Button
          isLink
          setLink='/'
          background='#16005c'
          bradius={'5rem'}
          isRipple
        >
          GO HOME
        </Button>
      </div>
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
  svg {
    width: 100%;
    height: 75vh;
    @media screen and (max-width: 1000px) {
      height: 35vh;
    }
    @media screen and (max-width: 500px) {
      height: 25vh;
    }
  }
  nav {
    display: none;
  }
  .text {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    color: #16005c;
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
    @media screen and (max-width: 677px) {
      padding: 0;
    }

    button {
      margin-top: 1rem;
    }
  }
`;

export default PageNotFound;
