import React from "react";
import styled from 'styled-components';

// Components
import Button from './Button'

// Import Colors
import { primary,secondary} from './Colors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';




const NavigationMobile = () => {
  return (
 
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
  )
}

const ContainerStyle = styled.div `
  width: 70%;
  height: 100vh;
  background: ${secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  transform: translateX(-45px);
 
  



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

export default NavigationMobile
