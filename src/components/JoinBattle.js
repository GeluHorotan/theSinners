import React from 'react';
import styled from 'styled-components';
import { obsH2 } from '../Utility/Colors';
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
      <button>
        <a
          target='_blank'
          href='https://store.steampowered.com/app/570/Dota_2/'
          rel='noreferrer'
        >
          PLAY FREE NOW
        </a>
      </button>
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

  @media screen and (max-width: 900px) {
    padding: 3rem 5rem;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 5rem;
  }
  button {
    width: 15rem;
    background: ${obsH2};
    padding: 1rem;
    border-radius: 2rem;
    margin: 1rem 0;
    border: none;
    a {
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      color: #fff;
    }
  }
`;

export default JoinBattle;
