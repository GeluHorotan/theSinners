import React from 'react';
import styled from 'styled-components';
import { primary } from '../Utility/Colors';
import Error404 from '../components/Error404';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <Error404></Error404>
      <div className='back_to'>
        <h1>PAGE NOT FOUND</h1> <Link to='/'>BACK TO HOMEPAGE</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #9c9c9c;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-weight: 700;
    font-size: 5rem;
    margin-right: 1rem;
    color: #16005c;
  }
  .back_to {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-size: 2rem;
    }
  }
`;

export default PageNotFound;
