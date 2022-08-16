import React from 'react';
import Button from '../components/Button';
import ErrorHandler from '../components/ErrorHandler';
import NavigationDisabler from '../Utility/NavigationDisabler';
import styled from 'styled-components';
import { primary } from '../Utility/Colors';

const UnderConstruction = () => {
  return (
    <Wrapper>
      <NavigationDisabler></NavigationDisabler>
      <ErrorHandler type='under_construction'>
        {' '}
        <div className='back_to'>
          <Button
            isLink
            setLink='/'
            background={primary}
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

  display: flex;
  background: #ffe89e;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export default UnderConstruction;
