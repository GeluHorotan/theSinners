import React from 'react';
import styled from 'styled-components';

import { createPortal } from 'react-dom';

import { primary, secondary } from '../Utility/Colors';

// Test Logos

import First from '../img/1.svg';

const Modal = ({ nickname, src, cardColor, name, SinnersLogo }) => {
  console.log(name);
  const splittedName = name.split(' ');
  console.log(splittedName);

  return createPortal(
    <StyledModal>
      <div className='modal-background'>
        <div className='modal-container'>
          <div className='top-container' id={cardColor}>
            {' '}
            <img className='playerImg' src={src} alt='' />{' '}
            <img className='sinnersLogo' src={First} alt='' />
            <h1 className='team-name'>
              THE <br /> SINNERS
            </h1>
          </div>
          <div className='header'>
            <h3 className='name'>
              {' '}
              {splittedName[0]} "{nickname}" {splittedName[1]}
            </h3>
          </div>
          <div className='body'>
            <p>TEST</p>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    </StyledModal>,
    document.getElementById('portal')
  );
};

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0 auto;
  height: 100%;
  color: ${primary};
  display: flex;
  z-index: 11;
  position: fixed;
  top: 0;
  align-items: center;
  overflow: scroll;
  justify-content: center;

  .modal-background {
    width: 100%;
    height: 100vh;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      background: ${secondary};

      width: 90%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      justify-content: center;

      .top-container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: flex-end;

        justify-content: center;

        .playerImg {
          z-index: 1;
        }

        .sinnersLogo {
          position: absolute;
          right: 40%;
          bottom: 15%;
          height: 80%;
        }
        h1.team-name {
          position: absolute;
          font-size: 10rem;

          right: 15%;
          bottom: 35%;
          text-align-last: start;
          line-height: 10rem;
        }
      }
    }
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    .name {
      letter-spacing: 2px;
    }
  }
  .body {
    width: 95%;
    margin: 0 auto;
    padding: 2rem;
  }
`;

export default Modal;
