import React from "react";
import styled from "styled-components";
import Warcraft from '../videos/warcraft.mp4'

const VideoBackground = () => {
  return (
    <div>
    <DivStyle>
      </DivStyle>
  
    <VideoStyle
    autoPlay loop muted>
      <source src={Warcraft} type='video/mp4' />
    </VideoStyle>
    </div>
  )
}

const DivStyle = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
z-index: -1;
  opacity: 0.85;
 background:#0c0c0c;
`

const VideoStyle = styled.video `
position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left:0;
  object-fit: cover;
  z-index: -2;
  filter: blur(0.5rem);


`

export default VideoBackground