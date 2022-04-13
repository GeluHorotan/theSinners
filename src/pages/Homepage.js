import React from "react";
// Page Components
import ScreenSizeChecker from '../components/ScreenSizeChecker'
import Carousel from '../components/Carousel'
import {SliderData}  from '../Data/SliderData'

// Style
import styled from 'styled-components'


// Images




const Homepage = () => {

  return (
    <div>
   
      <ScreenSizeChecker />
    <DivStyle>
      <Carousel slides={SliderData} />
    </DivStyle>
    </div>
  )
}

const DivStyle = styled.div `
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

 
  

 

`

export default Homepage