import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const JoinBattle = () => {
  return (
    <Wrapper>
      <div className='header_text'>
        <span className='Minor'>Join the</span>
        <br />
        Battle
      </div>
      <div className='horizontal_bar'></div>
      <Button
        isRipple
        setClassName={'call_to_action'}
        setLink='https://store.steampowered.com/app/570/Dota_2/'
      >
        PLAY FREE NOW
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/background4.png');
  width: 100%;
  margin: 40px auto;
  background-size: cover;
  background-repeat: none;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 50px 150px;
`;

export default JoinBattle;
