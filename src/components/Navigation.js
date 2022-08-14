import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router';
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
  obsH2,
  primary,
} from '../Utility/Colors';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

// Animation
import { motion } from 'framer-motion';
import { navUl, navLogo, comingTop } from './animation';
import DropdownMenu from '../DropdownMenu';
import { Menu, Transition } from '@headlessui/react';

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavigationStyle className='nav'>
        <Link to='/'>
          <motion.img
            variants={navLogo}
            initial='hidden'
            animate='show'
            id='logo'
            src={Logo}
            alt=''
          />
        </Link>

        <motion.div
          className='header_container'
          variants={navUl}
          initial='hidden'
          animate='show'
        >
          <div className='dropdown_container'>
            <DropdownMenu title={'GAME'} className={'game_dropdown'}>
              <Menu.Item>
                <div
                  className='menu_options'
                  onClick={() => {
                    navigate('/heroes');
                  }}
                >
                  HEROES{' '}
                </div>
              </Menu.Item>
              <Menu.Item>
                <div
                  className='menu_options'
                  onClick={() => {
                    navigate('/patches');
                  }}
                >
                  PATCHES{' '}
                </div>
              </Menu.Item>

              <Menu.Item>
                <div
                  className='menu_options'
                  onClick={() => {
                    navigate('/news/updates');
                  }}
                >
                  GAMEPLAY UPDATES{' '}
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className='menu_options'>STORE </div>
              </Menu.Item>
            </DropdownMenu>
          </div>
          <div className='nav_btn'>ABOUT</div>

          <div
            className='nav_btn'
            onClick={() => {
              navigate('/news');
            }}
          >
            NEWS
          </div>
          <div
            className='nav_btn'
            onClick={() => {
              navigate('/esports');
            }}
          >
            ESPORTS
          </div>

          <div className='nav_btn'>CONTACT</div>
        </motion.div>
      </NavigationStyle>

      <IconContext.Provider value={{ color: `${secondary}` }}>
        <SideNavStyles>
          <BarsStyle>
            <FaIcons.FaBars
              className={sidebar ? 'hidden' : 'visible'}
              onClick={showSidebar}
            />
            <div className='x_mark'>
              <AiIcons.AiOutlineClose
                className={sidebar ? 'visible' : 'hidden'}
                onClick={showSidebar}
              />
            </div>
          </BarsStyle>
          <SidebarStyles id={sidebar ? 'overlay-active' : ''}>
            <div
              className='overlay'
              onClick={() => {
                setSidebar((prevState) => false);
              }}
            ></div>

            <div className='sidebar_half' id={sidebar ? 'sidebar-active' : ''}>
              <motion.img
                variants={navLogo}
                initial='hidden'
                animate='show'
                className='logo'
                src={Logo}
                alt=''
                onClick={() => {
                  navigate('/');
                  setSidebar((prevState) => false);
                }}
              />
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className='side_bar_btn selector'>
                      GAME{' '}
                      {!open ? (
                        <div className='arrow'>
                          {' '}
                          <BsIcons.BsCaretDownFill></BsIcons.BsCaretDownFill>{' '}
                        </div>
                      ) : (
                        <div className='arrow'>
                          {' '}
                          <BsIcons.BsCaretUpFill></BsIcons.BsCaretUpFill>{' '}
                        </div>
                      )}
                    </Menu.Button>
                    <Transition
                      enter='transition duration-100 ease-out'
                      enterFrom='transform scale-95 opacity-0'
                      enterTo='transform scale-100 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform scale-100 opacity-100'
                      leaveTo='transform scale-95 opacity-0'
                    >
                      <Menu.Items className={'dropdown_items'}>
                        <Menu.Item>
                          <div
                            className='side_bar_btn dropdown_btn'
                            onClick={() => {
                              navigate('/heroes');
                              setSidebar((prevState) => false);
                            }}
                          >
                            HEROES
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            className='side_bar_btn dropdown_btn'
                            onClick={() => {
                              navigate('/patches');
                              setSidebar((prevState) => false);
                            }}
                          >
                            PATCHES
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            className='side_bar_btn dropdown_btn'
                            onClick={() => {
                              navigate('/news/updates');
                              setSidebar((prevState) => false);
                            }}
                          >
                            GAMEPLAY UPDATES
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className='side_bar_btn dropdown_btn'>STORE</div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <div className='side_bar_btn'>ABOUT</div>
              <div
                className='side_bar_btn'
                onClick={() => {
                  navigate('/news');
                  setSidebar((prevState) => false);
                }}
              >
                NEWS
              </div>
              <div
                className='side_bar_btn'
                onClick={() => {
                  navigate('/esports');
                  setSidebar((prevState) => false);
                }}
              >
                ESPORTS
              </div>
              <div
                className='side_bar_btn'
                onClick={() => {
                  navigate('/contact');
                  setSidebar((prevState) => false);
                }}
              >
                CONTACT
              </div>

              <div className='socials'>
                <div className='social_icon'>
                  <a
                    href='https://github.com/HorotanGelu'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <BsIcons.BsGithub></BsIcons.BsGithub>
                  </a>
                </div>
                <div className='social_icon'>
                  <a
                    href='https://twitter.com/oxymoron365'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <BsIcons.BsTwitter></BsIcons.BsTwitter>
                  </a>
                </div>
                <div className='social_icon'>
                  <a
                    href='https://www.linkedin.com/in/gelu-horotan-698084193/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <AiIcons.AiFillLinkedin></AiIcons.AiFillLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </SidebarStyles>
        </SideNavStyles>
      </IconContext.Provider>
    </>
  );
};

const NavigationStyle = styled.nav`
  min-height: 10vh;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 4rem;
  background: transparent;

  position: absolute;
  overflow: hidden;
  color: #fff;
  top: 0;
  z-index: 20;
  /* overflow-x: hidden; */
  overflow: visible;
  display: none;
  width: 100%;
  .header_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 1rem;
    .nav_btn {
      cursor: pointer;
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 3px;
    }
  }
  .dropdown_container {
    width: 7rem;
    .grid_tabels_dropdown_menu {
      width: fit-content;
      background-color: rgba(244, 244, 244, 0.3);
      backdrop-filter: blur(10px);
      .menu_options {
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
        filter: brightness(1);
        &:hover {
          padding-left: 1rem;
          background: none;
        }
      }
    }
  }
  .menu_button {
    box-shadow: none;

    .dropdown_selector {
      background: none !important;
      clip-path: none;
      font-size: 1rem;

      font-weight: 700;
      letter-spacing: 3px;
      .icon {
        background: none;
        clip-path: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  a {
    color: ${secondary};
    text-decoration: none;
    font-size: 1rem;
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
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 9;
  opacity: 0;
  transform: scale(0);

  .logo {
    width: 3rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 15;

    cursor: pointer;
  }
  .overlay {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 10;
  }

  .selector {
    display: flex;
    align-items: center;
    .arrow {
      margin-left: 0.5rem;
    }
    &:hover {
      padding: 0 !important;
    }

    .arrow {
      display: flex;
      align-items: center;
    }
  }

  .dropdown_items {
    padding: 0 1rem;
  }
  .sidebar_half {
    width: 50%;
    background-color: rgba(54, 54, 54, 0.7);
    backdrop-filter: blur(10px);
    height: 100vh;
    position: fixed;
    z-index: 11;
    color: #fff;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem 0;
    transform: translateX(-100%);
    transition: all 0.4s ease;
    letter-spacing: 3px;
  }

  .dropdown_btn {
    /* margin: 1rem 0 !important; */
    transition: all 250ms ease-in-out;
    &:hover {
      padding-left: 0.5rem;
    }
  }
  button {
    color: #fff;
    background: none;
    border: none;
    letter-spacing: 3px;
    font-size: 1rem;
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 5rem 0;
    font-size: 1.5rem;
    a {
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .social_icon {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      svg {
        transition: all 250ms ease-in-out;
      }
      svg:hover {
        transform: scale(1.5);
        color: #4646f8 !important;
      }
    }
  }

  .side_bar_btn {
    margin: 1rem 2rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover {
      padding-left: 0.5rem;
    }
  }
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

const BarsStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  position: fixed;
  left: 5%;
  top: 2%;
  z-index: 100;
  width: 100%;
  font-size: 1.5rem;
`;

export default Navigation;
