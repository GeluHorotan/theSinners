import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button';
import { SidebarData } from './SidebarData';
// Images
import Logo from '../img/logo.png';
// Global Style
import { accent, desaturatedRed, brown, secondary } from '../components/Colors';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
// Animation
import { motion } from 'framer-motion';
import { navUl, navLogo } from './animation';

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
        <MenuBarsStyle className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </MenuBarsStyle>
        <Hamburger>
          <nav
            className={sidebar ? 'nav-menu active' : 'nav-menu'}
            onClick={showSidebar}
          >
            <XStyle>
              <Link to='#'>
                <AiIcons.AiOutlineClose />
              </Link>
            </XStyle>
            <ul className='nav-menu-items'>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <h6> {item.title} </h6>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Hamburger>
      </IconContext.Provider>
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
    color: ${secondary};
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

const MenuBarsStyle = styled.div`
  .menu-bars {
    margin-left: 2rem;
    font-size: 1.5rem;
    background: none;
    position: fixed;
    z-index: 5;
    top: 4%;
    filter: drop-shadow(0.15rem 0.15rem 0.05rem #000000);
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const XStyle = styled.span`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 2rem;
  margin: 1rem;
  position: absolute;
  left: 100%;
  filter: drop-shadow(0.15rem 0.15rem 0.05rem #000000);
`;

const Hamburger = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }

  .nav-menu {
    background-color: ${accent};
    width: 35%;
    height: 100vh;
    z-index: 10;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5rem 0px 0.5rem 1rem;
    list-style: none;
  }

  .nav-text a {
    text-decoration: none;
    color: ${secondary};
    font-size: 1.5rem;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 0.5rem;
  }

  .nav-text a:hover {
    background-color: ${desaturatedRed};
  }

  .nav-menu-items {
    width: 100%;
    margin: 3rem 0;
  }

  h6 {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;

export default Navigation;
