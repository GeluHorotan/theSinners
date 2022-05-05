import React from 'react';

// Page Components

import Carousel from '../components/Carousel';
import SponsorsBar from '../components/SponsorsBar';
import Slider from '../components/Slider';
import Card from '../components/playerCard/Card';
import DotaLogo from '../components/DotaLogo';
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
        <div className='about-ref'>
          <DotaLogo />
          <div className='right-side'>
            <div className='details'>
              <h4>
                A premier global esports organization, representing professional
                teams and gamers across the world.
              </h4>
            </div>
          </div>
        </div>
        <video autoPlay loop muted>
          <source
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm'
            type='video/mp4'
          />
        </video>
        <video autoPlay loop muted>
          <source
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.webm'
            type='video/mp4'
          />
        </video>
        <video autoPlay loop muted>
          <source
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.webm'
            type='video/mp4'
          />
        </video>
        <video autoPlay loop muted>
          <source
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm'
            type='video/mp4'
          />
        </video>
        <video autoPlay loop muted>
          <source
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.webm'
            type='video/mp4'
          />
        </video>
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
  width: 90%;
  margin: 7rem auto;
  align-items: center;
 video {
    width: 25%;
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

export default Homepage;
