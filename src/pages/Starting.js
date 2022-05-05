import React, { useState } from 'react';

// Page Components
import ParticleImage, {
  ParticleOptions,
  forces,
  ParticleForce,
} from 'react-particle-image';
import Button from '../components/Button';

// Video and Images

import NinjaLogo from '../img/NinjaLogo.png';

// Style
import styled from 'styled-components';
import { primary, secondary } from '../Utility/Colors';

const Starting = () => {
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

  const [skip, setSkip] = useState(false);
  const animatedElements = React.useRef(null);
  const skipBtn = React.useRef(null);
  const skipHandler = () => {
    setSkip(!skip);
    if (setSkip) {
      animatedElements.current.style.animation = 'enter 2s ease';
      animatedElements.current.style.pointerEvents = 'auto';
      animatedElements.current.style.opacity = '1';

      skipBtn.current.style.animation = 'skip 1.5s ease';
      skipBtn.current.style.opacity = '0';
      skipBtn.current.style.pointerEvents = 'none';
      skipBtn.current.style.display = 'none';
    }
  };

  return (
    <DivStyle>
      <div className='elements'>
        <div
          className='skip-container
        '
        >
          <h1>"You came too close to the secrets."</h1>
          <div className='btn-ref' ref={skipBtn}>
            <Button className='skip-button' onClick={skipHandler}>
              <h5>SKIP AHEAD</h5>
            </Button>
          </div>
        </div>

        <div className='animated-elements' ref={animatedElements}>
          <ParticleImage
            className='logo'
            src={NinjaLogo}
            scale={0.1}
            entropy={15}
            maxParticles={3000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
          />
          <Button className='start-btn' isLink setLink='/homepage'>
            <h5>BEGIN YOUR JOURNEY</h5>
          </Button>
        </div>
      </div>
      <div className='overlay'></div>
      <video
        className='videoTag'
        preload='auto'
        playsInline
        autoPlay
        loop
        muted
      >
        <source
          type='video/webm'
          src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm'
        />
      </video>
    </DivStyle>
  );
};

const DivStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .elements {
    width: 100%;
    height: 100vh;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3rem 7rem;
    .skip-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        margin: 5rem 0;
        color: ${secondary};
      }
      .btn-ref {
        display: flex;
      }
    }

    .animated-elements {
      display: flex;
      opacity: 0;
      pointer-events: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  canvas {
    background: none !important;
  }

  .overlay {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(transparent, ${primary} 65%);
    opacity: 0.95;
    z-index: 9;
    position: absolute;
  }
  video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
  }

  @keyframes skip {
    from {
      opacity: 1;
      transform: scale(1);
      transform: translateX(0);
    }

    to {
      opacity: 0;
      transform: scale(0.5);
      transform: translateX(100vw);
    }
  }

  @keyframes enter {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 900px) {
    .overlay {
      background-image: linear-gradient(transparent, ${primary} 55%);
    }
    .elements {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-top: 25rem;
      canvas {
        width: 15rem;
      }
      .skip-container {
        align-items: center;

        h5 {
          font-size: 1.3rem;
        }
        h1 {
          margin: 0;
          font-size: 2rem;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .overlay {
      background-image: linear-gradient(transparent, ${primary} 60%);
    }
    .elements {
      height: 100vh;
      canvas {
        width: 12rem;
      }
      .skip-container {
        h1 {
          font-size: 1.5rem;
          line-height: 2.5rem;
          padding: 0 1rem;
        }
      }
      .animated-elements {
        width: 100%;
      }
    }
  }
`;

export default Starting;
