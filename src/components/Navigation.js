import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button';
// Images
import Logo from '../img/logo.png';
// Global Style
import { accent, desaturatedRed, brown, secondary } from '../Utility/Colors';
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
            <Button isLink setLink='/about'>
              ABOUT
            </Button>
          </li>
          <li>
            <Button isLink setLink='/news'>
              NEWS
            </Button>
          </li>
          <li>
            <Button isLink setLink='/team'>
              TEAM
            </Button>
          </li>
          <li>
            <Button isLink setLink='/heroes'>
              HEROES
            </Button>
          </li>
          <li>
            <Button isLink setLink='/esports'>
              ESPORTS
            </Button>
          </li>
          <li>
            <Button isLink setLink='/shop'>
              SHOP
            </Button>
          </li>
          <li>
            <Button isLink setLink='/contact'>
              CONTACT
            </Button>
          </li>
        </motion.ul>
      </NavigationStyle>

      <IconContext.Provider value={{ color: `${secondary}` }}>
        <SideNavStyles>
          <BarsStyle>
            <FaIcons.FaBars
              className={sidebar ? 'hidden' : 'visible'}
              onClick={showSidebar}
            />

            <AiIcons.AiOutlineClose
              className={sidebar ? 'visible' : 'hidden'}
              onClick={showSidebar}
            />
          </BarsStyle>
          <SidebarStyles id={sidebar ? 'sidebar-active' : ''}>
            <UlStyle variants={comingTop} initial='hidden' animate='show'>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/about'
                  setIcon={<AiIcons.AiOutlineTeam />}
                >
                  <h6>About</h6>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/news'
                  setIcon={<FaIcons.FaNewspaper />}
                >
                  <h6>News</h6>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/team'
                  setIcon={<FaIcons.FaPeopleArrows />}
                >
                  <h6>Team</h6>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/heroes'
                  setIcon={<AiIcons.AiOutlineShoppingCart />}
                >
                  {' '}
                  <h6>Heroes</h6>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/shop'
                  setIcon={<AiIcons.AiOutlineShoppingCart />}
                >
                  {' '}
                  <h6>Shop</h6>
                </Button>
              </li>
              <li>
                <Button
                  setClassName='sidebar-btn'
                  isLink
                  setLink='/contact'
                  setIcon={<FaIcons.FaNewspaper />}
                >
                  <h6>Contact</h6>
                </Button>
              </li>
            </UlStyle>
          </SidebarStyles>
        </SideNavStyles>
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

const SideNavStyles = styled.nav`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SidebarStyles = styled.div`
  width: 40%;
  background: ${accent};
  height: 100vh;
  position: fixed;
  z-index: 10;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  transition: all 0.4s ease;
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
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  margin-top: 2rem;
  button {
    padding: 0.6rem 0.5rem;
    width: 100%;
    .contains {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const BarsStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  position: fixed;
  left: 5%;
  top: 2%;
  z-index: 100;
  width: 100%;

  font-size: 1rem;
`;

export default Navigation;
