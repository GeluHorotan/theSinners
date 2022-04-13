import React from "react";
// Page Components

import Carousel from '../components/Carousel'
import {SliderData}  from '../Data/SliderData'
import SponsorShowcase from '../components/SponsorShowcase'
import SponsorItem from '../components/SponsorItem'



// Style
import styled from 'styled-components'





// Images
import SteelseriesHeadset from '../img/SponsorItems/steelseriesHeadsets.png'
import SsStuff from '../img/SponsorItems/ssStuff.png'
import HyperxStuff from '../img/SponsorItems/hyperxStuff.png'
import RazerMouse from '../img/SponsorItems/razerMouse.png'
import RazerLaptop from '../img/SponsorItems/razerLaptop.png'


const Homepage = () => {

  return (
    <div>
   
 
    <DivStyle>
      <Carousel slides={SliderData} />
      
    </DivStyle>
      <SponsorShowcase>    <SponsorItem setImage ={SteelseriesHeadset} setAlt='Steelseries Headset'/>
      <SponsorItem setImage ={SsStuff}  setAlt='Steelseries mouse and mousepad'/>
  
      <SponsorItem setImage ={HyperxStuff} setAlt='HyperX keyboard and mousepad'/>
      <SponsorItem setImage ={RazerMouse} setAlt='Razer mouse'/>
      <SponsorItem setImage ={RazerLaptop} setAlt='Razer laptop'/> </SponsorShowcase>
    </div>
  )
}

const DivStyle = styled.div `
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;

 
  

 

`

export default Homepage