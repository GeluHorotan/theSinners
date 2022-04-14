import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import Button from '../components/Button';
// Images
import Logo from '../img/logo.png';
// Global Style
import { accent, desaturatedRed, brown } from '../components/Colors';
// Animation
import { motion } from 'framer-motion';
import { navUl, navLogo } from './animation';

const Navigation = () => {
  return (
    <>
      <NavigationStyle>
        <Link to='/homepage'>
          <motion.img
            variants={navLogo}
            initial='hidden'
            animate='show'
            id='logo'
            src={Logo}
            alt=''
          />
        </Link>

        <motion.ul variants={navUl} initial='hidden' animate='show'>
          <li>
            <Button isLink setLink='/'>
              ABOUT
            </Button>
          </li>
          <li>
            <Button isLink setLink='/'>
              NEWS
            </Button>
          </li>
          <li>
            <Button isLink setLink='/'>
              TEAMS
            </Button>
          </li>
          <li>
            <Button isLink setLink='/'>
              SHOP
            </Button>
          </li>
          <li>
            <Button isLink setLink='/'>
              CONTACT
            </Button>
          </li>
        </motion.ul>
      </NavigationStyle>

      <nav></nav>
    </>
  );
};

const NavigationStyle = styled.nav`
  min-height: 10vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 7rem;
  background: ${accent};
  position: sticky;
  top: 0;
  z-index: 10;
  filter: drop-shadow(0 0.2rem 0.3rem ${brown});

  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }

  #top {
    background: none;
  }
  #right {
    background: none;
  }
  #left {
    background: none;
  }
  #bottom {
    height: 3px;
    background: ${desaturatedRed};
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }
  #logo {
    width: 3rem;
  }
`;

export default Navigation;
