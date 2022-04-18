import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../Button';

import { Marginer } from '../marginer';
import SinnersLogo from '../../img/logo.png';

// Utility
import { desaturatedRed, accent, secondary } from '../../Utility/Colors';

const Card = ({
  topText,
  cardColor,
  buttonText,
  nickname,
  name,
  location,
  age,
  position,
  signatureHeroes,
  signatureHeroesClassName = 'heroes',
  src,
  cardType,
  children,
  className,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  if (cardType === 'player') {
    return (
      <StyledDiv className={className}>
        <motion.div
          className='container'
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <div className='player-image-container' id={cardColor}>
            <motion.div
              className='player-image'
              style={{ x, y, rotateX, rotateY, rotate: '0', z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: 'grabbing' }}
            >
              {src && <img src={src} alt='card' />}
            </motion.div>
            {topText && <h2 className='top-text'>{topText}</h2>}
          </div>
          <div className='nickname-container'>
            {nickname && <h4 className='nickname'>{nickname}</h4>}
          </div>
          <div className='player-details-container'>
            <div className='player-details'>
              <div className='horizontal-container'>
                <div className='medium-text'>
                  {name && <h6>Name: {name}</h6>}
                  {location && <h6>Location: {location}</h6>}
                  {age && <h6>Age: {age}</h6>}
                  {position && <h6>Position: {position}</h6>}

                  {signatureHeroes && (
                    <div className={signatureHeroesClassName}>
                      {signatureHeroes.map((heroIcon, index) => (
                        <div className={`d2mh ${heroIcon}`} key={index}>
                          {' '}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Button setId={cardColor}>
                {' '}
                <div id='btn-text'>{buttonText}</div>
              </Button>
              <Marginer direction='vertical' margin='1.2em' />

              <div className='small-logo'>
                <img src={SinnersLogo} alt='test' />
              </div>
            </div>
          </div>
        </motion.div>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <motion.div
        className='container'
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {children}
      </motion.div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 300px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: ${accent};
    color: ${secondary};
    position: relative;
    cursor: grab;

    .player-image-container {
      width: 100%;
      height: 250px;
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: ${desaturatedRed};
      border-top-right-radius: 2rem;
      border-top-left-radius: 2rem;

      .player-image {
        width: auto;
        height: 100%;
        z-index: 1;
        position: absolute;
        user-select: none;
        align-self: center;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;

        img {
          width: auto;
          height: 100%;
          user-select: none;
          margin-top: 0.05rem;
        }
      }

      h2.top-text {
        align-self: flex-start;
        justify-content: center;
      }
    }
    .nickname-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem;
      h4.nickname {
        color: ${secondary};
      }
    }

    .player-details-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .heroes {
        display: flex;
        justify-content: center;
        margin: 1rem;

        gap: 1rem;
      }

      button {
        width: 100%;
        border-radius: 1rem;
        &:hover {
          transform: scale(1.04);
        }
        #top,
        #bottom,
        #left,
        #right {
          display: none;
        }
      }

      .player-details {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 2.5rem 0.5rem 0 0.5rem;

        .small-logo {
          width: 100%;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 0.5rem;

          img {
            width: auto;
            height: 1.5rem;
          }
        }

        .horizontal-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .medium-text {
            font-size: 1rem;
            color: ${secondary};
            font-weight: 400;
          }
        }
      }
    }
  }
`;

export default Card;