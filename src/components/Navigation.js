import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import Button from '../components/Button'
// Images
import Logo from '../img/logo.png'
// Global Style
import {accent,desaturatedRed, brown} from '../components/Colors'
// Animation
import {motion} from 'framer-motion'
import {navUl, navLogo} from './animation'

const Navigation = () => {
  return (
    <NavigationStyle >
   
        <Link to='/homepage'>
         <motion.img variants={navLogo} initial='hidden' animate='show'   id='logo' src={Logo} alt="" />
        </Link>
     
      <motion.ul variants={navUl} initial='hidden' animate='show'>
  
        <li>
      
         <Button   setText="ABOUT" setLink = "/" />
        
        </li>
        <li>
            <Button  setText="NEWS" setLink = "/" />
        </li>
        <li>
            <Button  setText="TEAMS" setLink = "/" />
        </li>
        <li>
           <Button  setText="SHOP" setLink = "/" />
        </li>
        <li>
          <Button  setText="CONTACT" setLink = "/" />
        </li>
      </motion.ul>
    </NavigationStyle>
  )
}



const NavigationStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 7rem;
  background: ${accent};
  position: sticky;
  top: 0;
  z-index: 10;
  filter: drop-shadow(0 0.2rem 0.3rem ${brown});


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