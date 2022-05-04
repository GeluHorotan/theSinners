import React from 'react';
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from 'react-particle-image';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Page Components

import Carousel from '../components/Carousel';
import SponsorsBar from '../components/SponsorsBar';
import Slider from '../components/Slider';
import Card from '../components/playerCard/Card';
import DotaLogo from '../components/DotaLogo';
import NinjaLogo from '../img/NinjaLogo.png';
import Button from '@mui/material/Button';

// Datas
import { SliderData } from '../Data/SliderData';
import { SponsorData } from '../Data/SponsorData';

// Style
import styled from 'styled-components';

// Logos
import RazerLogo from '../img/SponsorLogos/razer.png';
import Redbull from '../img/SponsorLogos/redbull.svg';
import Logitech from '../img/SponsorLogos/logitech.png';
import Hyperx from '../img/SponsorLogos/hyperx.svg';
import Nvidia from '../img/SponsorLogos/nvidia.svg';
import Northface from '../img/SponsorLogos/northface.svg';
import Tesla from '../img/SponsorLogos/tesla.png';
import {
  accent,
  blue,
  desaturatedRed,
  primary,
  saturatedRed,
  secondary,
} from '../Utility/Colors';

const Homepage = () => {
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => '#FF1200',
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };

  const getDate = (separator = ' - ') => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${date}${separator}${
      month < 10
        ? `${monthNames[newDate.getMonth()]}`
        : `${monthNames[newDate.getMonth()]}`
    }`;
  };

  const date = getDate();
  return (
    <StyledPage>
      <DivStyle>
        <Carousel slides={SliderData} />
      </DivStyle>

      <StyledSponsorShowcase>
        <h2 className='title'>Products showcase</h2>
        <Slider
          slidesPerView={2}
          spaceBetween={-50}
          loop={true}
          simulateTouch={true}
          grabCursor={true}
          speed={500}
          mousewheel={true}
          mousewheelInvert={false}
          mousewheelReleaseOnEdges={true}
          mousewheelSensitivity={1000}
          keyboardEnabled={true}
          keyboardOnlyInViewport={true}
          paginationEl={'.swiper-pagination'}
          paginationType={'progressbar'}
          navigationNextEl={'.swiper-button-next'}
          navigationPrevEl={'.swiper-button-prev'}
          autoplayDelay={3000}
          autoplayDisableOnInteraction={false}
          autoplayPauseOnMouseEnter={true}
          items={SponsorData.map((item, index) => {
            return (
              <>
                <Card
                  cardColor={item.color}
                  cardType='sponsorProduct'
                  topText={item.title}
                  src={item.src}
                />
                <div className='infos'>
                  <h4>{item.product}</h4>
                  <p className='description'>{item.description}</p>
                  <h6> Delivery time: {date} </h6>
                  <h6> Price: {item.price} &euro; </h6>
                </div>
              </>
            );
          })}
        ></Slider>
      </StyledSponsorShowcase>

      <SponsorsBar
        setSponsor1={RazerLogo}
        setSponsor2={Redbull}
        setSponsor3={Logitech}
        setSponsor4={Hyperx}
        setSponsor5={Nvidia}
        setSponsor6={Northface}
        setSponsor7={Tesla}
      ></SponsorsBar>

      <StyledAboutRefContainer>
        <div className='about-ref'>
          <DotaLogo />
          <div className='right-side'>
            {/* <ParticleImage
              src={NinjaLogo}
              scale={0.1}
              entropy={15}
              maxParticles={3000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
            /> */}
            <div className='details'>
              <h4>
                A premier global esports organization, representing professional
                teams and gamers across the world.
              </h4>
              <ThemeProvider theme={theme}>
                <Button color='primary' variant='outlined'>
                  <h5>Read More</h5>
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </StyledAboutRefContainer>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
`;

const DivStyle = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledSponsorShowcase = styled.div`
  width: 90%;
  margin: 0 auto;

  .title {
    color: ${secondary};
    text-align: center;
    transition: 0.4s all ease-in-out;
    margin-top: 2rem;
  }

  .infos {
    display: flex;
    flex-direction: column;
    width: 50%;

    color: ${secondary};
  }

  .player-card {
    min-height: 100%;
  }

  .container {
    .product-image-container {
      background: ${accent};
    }
  }

  .swiper {
    padding: 7rem 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide {
    height: 100%;
    margin: 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .swiper-pagination {
    top: 97%;
    width: 100%;

    .swiper-pagination-progressbar-fill {
      border-radius: 1rem;
    }
  }
`;

const StyledAboutRefContainer = styled.div`
  width: 90%;
  margin: 7rem auto;
  align-items: center;
  canvas {
    background: none !important;
    width: 100% !important;
  }
  svg {
    width: 150%;
  }
  .about-ref {
    display: flex;
    gap: 2rem;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 1200px) {
      & {
       flex-direction: column;
       align-items: center;
   
       svg {
         width: 80%;
         align-self: center;
       }
     
      
    }
  }

  .right-side {
    color: ${secondary};
    width: 50%;
      padding: 0 5rem;

      .details {
            text-align: center;
            display: flex;
            flex-direction: column;
           justify-content: center;
           align-items: center;
          }

   
    button {
      margin: 1rem 0;
    }

    @media only screen and (max-width: 1200px) { 
  
          width: 90% ;
          margin: 0 auto;
   
    }
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: `${saturatedRed}`,
      darker: '#053e85',
    },
  },
});

export default Homepage;
