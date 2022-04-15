import React from 'react';
import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';

// Global Style
import { secondary } from '../Utility/Colors';
import { Link } from 'react-router-dom';

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
}) => {
  return (
    <ButtonStyle
      className={setClassName}
      variants={setVariants}
      initial={setInitial}
      animate={setAnimate}
    >
      <SpanStyle id='top'></SpanStyle>
      <SpanStyle id='bottom'></SpanStyle>
      <SpanStyle id='right'></SpanStyle>
      <SpanStyle id='left'></SpanStyle>

      {isLink === true ? (
        <Link to={setLink}>
          {' '}
          {setIcon} {children}{' '}
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
  font-size: 2rem;
  padding: 0.6rem 1.25rem;
  cursor: pointer;

  position: relative;
  display: inline-block;
  letter-spacing: 4px;
  text-decoration: none;
  background: none;
  border: none;
  color: ${secondary};

  a {
    text-decoration: none;
    color: ${secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

const SpanStyle = styled.span`
  position: absolute;
  display: block;
  background: linear-gradient(rgb(246, 81, 102), rgb(105, 35, 54));

  transition: transform ease-in-out 0.2s;

  &#top {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition-delay: 0s;
  }
  ${ButtonStyle}:hover &#top {
    transform: scaleX(1);
    transform-origin: left;
  }

  &#bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition-delay: 0.4s;
  }
  ${ButtonStyle}:hover &#bottom {
    transform: scaleX(1);
    transform-origin: right;
  }

  &#right {
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom;
    transition-delay: 0.2s;
  }
  ${ButtonStyle}:hover &#right {
    transform: scaleY(1);
    transform-origin: top;
  }
  &#left {
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition-delay: 0.6s;
  }
  ${ButtonStyle}:hover &#left {
    transform: scaleY(1);
    transform-origin: bottom;
  }
`;

export default Button;
