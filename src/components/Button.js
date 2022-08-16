import React, { useRef } from 'react';
import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';

// Global Style
import { secondary } from '../Utility/Colors';
import { Link } from 'react-router-dom';

const rippleEffect = (e) => {
  e.preventDefault();
  let ripple = document.createElement('span');
  ripple.classList.add('ripple');
  let x = e.clientX - e.target.offsetX;
  let y = e.clientY - e.target.offsetY;
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  e.target.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 500);
};

const Button = ({
  setClassName,
  isLink,
  children,
  setVariants,
  setInitial,
  setAnimate,
  setText,
  setLink,
  setIcon,
  setId,
  action,
  bradius,
  background,

  isRipple,
}) => {
  return (
    <ButtonStyle
      bradius={bradius}
      background={background}
      className={setClassName}
      variants={setVariants}
      initial={setInitial}
      animate={setAnimate}
      id={setId}
      onClick={(e) => {
        if (isRipple) {
          rippleEffect(e);
        }
        if (action) {
          action();
        }
      }}
    >
      {isLink === true ? (
        <Link to={setLink}>
          {' '}
          <div className='contains'>
            {setIcon} {children}{' '}
          </div>
        </Link>
      ) : (
        children
      )}
    </ButtonStyle>
  );
};

const ButtonStyle = styled(motion.button)`
  font-family: futura-pt, sans-serif;
  font-weight: 700;
  font-style: normal;

  padding: 0.6rem 1.25rem;
  cursor: pointer;
  position: relative;
  display: inline-block;
  letter-spacing: 4px;
  text-decoration: none;
  background: ${(props) => (!props.background ? 'none' : props.background)};
  border-radius: ${(props) => props.bradius};
  border: none;
  color: ${secondary};
  overflow: hidden;
  transition: filter 250ms ease-in-out;

  &:hover {
    filter: brightness(1.4);
  }

  span.ripple {
    position: absolute;
    height: 400px;
    width: 400px;
    background: #fff;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.5;
    animation: blink 0.5s linear infinite;
  }
  a {
    text-decoration: none;
    color: ${secondary};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes blink {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.5;
    }
    100% {
      height: 400px;
      width: 400px;
      opacity: 0;
    }
  }
`;

export default Button;
