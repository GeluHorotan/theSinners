import React from 'react';

// Page Components

import Carousel from '../components/Carousel';
import SponsorsBar from '../components/SponsorsBar';
import Slider from '../components/Slider';
import Card from '../components/playerCard/Card';
import DotaLogo from '../components/DotaLogo';
import Button from '../components/Button';

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
import { primary, saturatedRed, secondary } from '../Utility/Colors';

const Homepage = () => {
  return (
    <StyledPage>
      <DivStyle>
        <Carousel slides={SliderData} />
      </DivStyle>

      <StyledSponsorShowcase>
        <Slider
          slidesPerView={3}
          spaceBetween={50}
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
              <Card
                cardColor={item.color}
                cardType='sponsorProduct'
                src={item.src}
                price={item.price}
                product={item.product}
              />
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
        <div className='fade-top'>
          <div className='fade-t'></div>
        </div>
        <div className='fade-bottom'>
          <div className='fade-b'></div>
        </div>
        <DotaLogo />
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
  max-width: 100%;
  min-height: 100vh;
  position: relative;
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg');
  background-size: 2500px;
  background-repeat: no-repeat;
  background-position: center;

  .fade-top {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0px;
    top: 0px;
    right: 0px;
    .fade-t {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 60%,
        rgba(24, 24, 24, 0.733) 90%,
        rgb(24, 24, 24) 100%
      );
    }
  }

  .fade-bottom {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0px;
    bottom: 0px;
    right: 0px;
    .fade-b {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 60%,
        rgba(24, 24, 24, 0.733) 90%,
        rgb(24, 24, 24) 100%
      );
    }
  }
  svg {
    width: 15rem;
  }
`;

export default Homepage;
