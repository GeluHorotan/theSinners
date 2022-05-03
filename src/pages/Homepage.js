import React from 'react';
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from 'react-particle-image';

// Page Components

import Carousel from '../components/Carousel';
import SponsorsBar from '../components/SponsorsBar';
import Slider from '../components/Slider';
import Card from '../components/playerCard/Card';
import DotaLogo from '../components/DotaLogo';
import Logo from '../img/logo.png';
import Nisha from '../img/playerCards/nisha.png';

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
import { accent, primary, secondary } from '../Utility/Colors';
import Button from '../components/Button';

const Homepage = () => {
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => '#FF8882',
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
          slidesPerView={3}
          spaceBetween={30}
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
          <div className='text'>
            <ParticleImage
              src={Logo}
              scale={4}
              entropy={15}
              maxParticles={2000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
            />
            <h4>
              A premier global esports organization, representing professional
              teams and gamers across the world.
            </h4>
            <Button>MEET US</Button>
          </div>
        </div>
      </StyledAboutRefContainer>
      <div className='placeholder'></div>
      <div className='placeholder'></div>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
  .placeholder {
    width: 100%;
    background: ${primary};
    height: 10rem;
    margin: 5rem;
  }
`;

const DivStyle = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledSponsorShowcase = styled.div`
  width: 80%;
  margin: 0 auto;

  .title {
    color: ${secondary};
    text-align: center;
    transition: 0.4s all ease-in-out;
    margin-top: 2rem;
  }
  .title:hover {
    letter-spacing: 0.5rem;
    transform: scale(1.1);
  }

  .infos {
    display: flex;
    flex-direction: column;
    margin: 0 5rem 0 2rem;
    color: ${secondary};
  }
  .description {
    margin: 0;
    padding: 0;
  }

  .player-card {
    min-height: 100%;
  }

  .container {
    width: 15rem;
    height: 10rem;
    .product-image-container {
      background: ${accent};
    }
  }

  .swiper {
    padding: 7rem 0;

    height: 20rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
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
  width: 100%;
  margin: 10rem 0;
  canvas {
    background: none !important;
  }
  svg {
    width: 150%;
  }
  .about-ref {
    display: flex;

    justify-content: space-evenly;
    align-items: center;
  }

  .text {
    color: ${secondary};
    width: 25%;
    justify-self: end;
    align-items: center;
  }
`;

export default Homepage;
