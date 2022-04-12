import React from "react";
// Page Components
import Navigation from '../components/Navigation'

// Style
import styled from 'styled-components'
import {primary} from '../components/Colors'





const Homepage = () => {
  return (
    <div>
        <Navigation/>
    <DivStyle>
    <h1>Test</h1>
    </DivStyle>
    </div>
  )
}

const DivStyle = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${primary};
     overflow-x: visible;

`

export default Homepage