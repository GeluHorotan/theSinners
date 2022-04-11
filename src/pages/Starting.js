import React from "react";
// Page Components
import Logo from '../components/Logo'
import Button from '../components/Button'
// Style
import styled from 'styled-components'



const Starting = () => {
  return (
    <DivStyle>
    <Logo/>
    <Button buttonText="BEGIN YOUR JOURNEY" />
   
    </DivStyle>
  )
}

const DivStyle = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default Starting