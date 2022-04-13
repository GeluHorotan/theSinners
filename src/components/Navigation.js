import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import Button from '../components/Button'
// Images
import Logo from '../img/logo.png'
// Global Style
import {accent,desaturatedRed, brown, primary,secondary, saturatedRed} from '../components/Colors'
// Animation
import {motion} from 'framer-motion'
import {navUl, navLogo} from './animation'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {



  return (
    <>
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

    <nav>

    <ContainerStyle>

      <BtnContainerStyle>
     <Button  setText="ABOUT" setLink = "/" />
     <Button   setText="NEWS" setLink = "/" />
     <Button   setText="TEAMS" setLink = "/" />
     <Button   setText="SHOP" setLink = "/" />
     <Button   setText="CONTACT" setLink = "/" />
     <SocialIconStyle>
   <Button 
    setIcon= {<FontAwesomeIcon id="socialIcon" size='1x' icon={faBookOpen} />}  setLink = "/homepage" />
   
   <Button
    setIcon= {<FontAwesomeIcon id="socialIcon" size='1x' icon={faBookOpen} />}  setLink = "/homepage" />
   
   <Button
    setIcon= {<FontAwesomeIcon id="socialIcon" size='1x' icon={faBookOpen} />}  setLink = "/homepage" />
   </SocialIconStyle>
    </BtnContainerStyle>
    </ContainerStyle>

    <HamburgerStyle>

    <input id="dropdown" className="input-box" type="checkbox"></input>

    <label htmlFor="dropdown" className="dropdown">
 <span   className="hamburger">
 <span  className="icon-bar top-bar"></span>
<span className="icon-bar middle-bar"></span>
<span className="icon-bar bottom-bar"></span>
  </span>
</label>
 
 
</HamburgerStyle>

    </nav>

  </>
  )
}



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
 @media screen and (min-width:768px) {
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

const ContainerStyle = styled.div `
  width: 70%;
  height: 100vh;
  background: ${secondary};
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  transform: translateX(-100px);
  z-index: 100;

   @media screen and (max-width:768px) {
      display: flex;
 }
  



`


const BtnContainerStyle = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
  margin: 1rem;
  a {
    color: ${primary};
  }

  #top {
    display: none;
  }
  #left {
    display: none;
  }
  #right {
    display: none;
  }
  #bottom {
    background: ${primary}
  }
`

const SocialIconStyle = styled.div `
  width: 2rem;
  display: flex;
  margin: 2rem 0rem 0rem 0rem;
  padding: 1rem 1 1rem 0rem;
  align-items: flex-start;


  .socialIcon {
    font-size: 3rem;
    padding-left:0;
  }
 
`

const HamburgerStyle = styled.div` 
  align-self: flex-end;
  margin: 1rem;
  position: absolute;
  display: none;
  flex-direction: row;
  z-index: 110;


    @media screen and (max-width:768px) {
      display: flex;
 }





 input {
  display: none;

 }


 .dropdown { 
  display: flex;
  justify-content: space-between;
}

.hamburger { 
  align-self: flex-end;

}

label {
  display: none;
}

input[type=checkbox] + label {
  .icon-bar {
    display: block;
    width: 1.5rem;
    height: 2px;
    background-color: ${saturatedRed};
    margin: 4px;
    transition: all 0.2s ease;
  }
  .top-bar {
    transform: rotate(0);
  }
  .middle-bar {
    opacity: 1;
  }
}

input[type=checkbox]:checked + label {

  .top-bar {
  
    transform: rotate(45deg);
    margin-left: 25rem;
    transform-origin: 10% 10%;
  }
  .middle-bar {
    opacity: 0;
  }
  .bottom-bar {
    transform: rotate(-45deg);
    margin-left: 25rem;
    transform-origin: 10% 90%;
  }
}

`

export default Navigation;