import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button';
// Images
import Logo from '../img/logo.png';
// Global Style
import {
  accent,
  desaturatedRed,
  brown,
  secondary,
  primary,
} from '../Utility/Colors';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

// Animation
import { motion } from 'framer-motion';
import { navUl, navLogo, comingTop } from './animation';

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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

      <IconContext.Provider value={{ color: `${secondary}` }}>
        <nav>
          <SidebarStyles className={sidebar ? 'active' : ''}>
            <UlStyle variants={comingTop} initial='hidden' animate='show'>
              <BarsStyle>
                <li>
                  <FaIcons.FaBars
                    className={sidebar ? 'hidden' : 'visible'}
                    onClick={showSidebar}
                  />

                  <AiIcons.AiOutlineClose
                    className={sidebar ? 'visible' : 'hidden'}
                    onClick={showSidebar}
                  />
                </li>
              </BarsStyle>

              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/homepage'
                  setIcon={<AiIcons.AiOutlineTeam />}
                >
                  <div className='margin-text'>ABOUT</div>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/homepage'
                  setIcon={<FaIcons.FaNewspaper />}
                >
                  <div className='margin-text'>NEWS</div>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/homepage'
                  setIcon={<FaIcons.FaPeopleArrows />}
                >
                  <div className='margin-text'>TEAMS</div>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/homepage'
                  setIcon={<AiIcons.AiOutlineShoppingCart />}
                >
                  {' '}
                  <div className='margin-text'> SHOP</div>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/homepage'
                  setIcon={<FaIcons.FaNewspaper />}
                >
                  <div className='margin-text'>CONTACT</div>
                </Button>
              </li>
            </UlStyle>
          </SidebarStyles>
        </nav>
      </IconContext.Provider>
    </>
  );
};

const NavigationStyle = styled.nav`
  min-height: 10vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4rem;
  background: ${accent};
  position: sticky;
  overflow: hidden;
  top: 0;
  z-index: 10;
  filter: drop-shadow(0 0.2rem 0.3rem ${brown});
  overflow-x: hidden;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }

  #top,
  #right,
  #left {
    background: none;
  }

  #bottom {
    height: 3px;
    background: ${desaturatedRed};
  }
  a {
    color: ${secondary};
    text-decoration: none;
    font-size: 1rem;
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 1rem;
    position: relative;
  }
  #logo {
    width: 3rem;
  }
`;

const SidebarStyles = styled.div`
  width: 2rem;
  background: ${accent};
  height: 100vh;
  position: fixed;
  z-index: 10;
  align-items: center;
  opacity: 0.85;

  #top,
  #bottom,
  #left,
  #right {
    background: none;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const UlStyle = styled(motion.ul)`
  list-style: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li:first-child {
    margin: 1.5rem 0;
    width: 100%;
  }

  li:first-child:hover {
    transform: scale(1);
    background: none;
  }

  li {
    padding: 0.5rem 0;
    width: 100%;
    transition: 0.4s all ease-in-out;
  }
  li:hover {
    background: ${primary};
    transform: scale(1.03);
  }
  a {
    font-size: 1rem;
  }
  button {
    padding: 0.6rem 0.5rem;
  }
`;

const BarsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  width: 100%;
  font-size: 1rem;
`;

export default Navigation;
