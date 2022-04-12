import React from "react";
// Page Components

// Style
import styled from 'styled-components'
import {primary,red} from '../components/GlobalStyle'




const Homepage = () => {
  return (
    <DivStyle>
    <h1>Test</h1>
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
  background: ${red};
     overflow-x: visible;

`

export default Homepage