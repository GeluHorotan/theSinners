import React from 'react';

// Page Components
import Slider from '../components/Slider';
import Button from '../components/Button';

// Datas
import { SliderData } from '../Data/SliderData';

// Style
import styled from 'styled-components';

// Logos
import { primary, saturatedRed } from '../Utility/Colors';
import { Link } from 'react-router-dom';
import LatestArticles from '../components/LatestArticles';

const Homepage = () => {
  return (
    <StyledPage>
      <HeaderStyles>
        <div className='background_video'>
          <video preload='auto' autoPlay loop muted playsInline>
            <source
              type='video/webm'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm'
            />
            <source
              type='video/mp4'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4'
            />
          </video>
        </div>
        <div className='quote_container'>
          <div>
            <div className='quote_text'>
              "A modern Multiplayer Masterpiece."
            </div>
            <div className='quote_credit'>- Destructoid</div>
            <div className='quote_bar'></div>
            <Link to='#'>
              <div className='play_button'>
                <div className='steam_logo'></div>
                <div className='right_side'>
                  <div className='play_for_free'>Play for free</div>
                  <div className='download'>Download on Steam</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='bottom_fade'></div>
      </HeaderStyles>
      <NewsStyles>
        <div className='news_top'>
          <div className='latest_news'>Latest News</div>
          <Link className='view_all' to='/news'>
            VIEW ALL
            <div className='right_arrow'></div>
          </Link>
        </div>
        <div className='news_capsules'>
          {' '}
          <LatestArticles padding={'none'}></LatestArticles>
        </div>
      </NewsStyles>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  width: 100%;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
`;

const HeaderStyles = styled.section`
  width: 100%;
  height: 75vh;
  margin-bottom: -90px;
  overflow: hidden;
  display: block;
  position: relative;
  z-index: 1;

  .background_video {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    video {
      height: 100%;
      object-fit: cover;
      width: 100vw;
      top: 0;
      left: 0;
      opacity: 0.5;
    }
  }

  .quote_container {
    height: 100%;
    width: fit-content;
    max-width: 60%;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-end;
    pointer-events: auto;
    .quote_text {
      font-size: 60px;
      line-height: 113%;
      font-family: 'Reaver', serif;
      letter-spacing: 5px;
      font-weight: 600;
      color: #ffffffee;
      text-transform: uppercase;
      text-shadow: 0px 0px 20px #000;
    }
    .quote_credit {
      font-size: 20px;
      font-family: 'Radiance', sans-serif;
      letter-spacing: 2px;
      color: #ffffff90;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    .quote_bar {
      width: 80px;
      height: 3px;
      min-height: 3px;
      background-color: #ff6046;
      border-radius: 1px;
    }
    a {
      text-decoration: none;
      color: inherit;
      .play_button {
        min-width: 288px;
        height: 78px;
        border-radius: 6px;
        border: 3px solid #ffffff90;
        box-shadow: 0px 0px 5px #000;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
        cursor: pointer;
        transition-property: filter, transform, box-shadow;
        transition-timing-function: ease-in-out;
        transition-duration: 0.1s;
        .steam_logo {
          width: 48px;
          height: 48px;
          margin: 0px 8px;
          background-size: contain;
          background-repeat: no-repeat;
          background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam.svg');
        }
        .right_side {
          flex-grow: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          margin-right: 12px;
          .play_for_free {
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            text-shadow: 2px 2px 3px #000;
            font-family: Reaver, serif;
            font-weight: 600;
          }
          .download {
            font-size: 15px;
            color: #858585;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 3px #000;
          }
        }
      }
    }
  }
  .bottom_fade {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(60%, rgba(0, 0, 0, 0)),
      color-stop(80%, rgba(0, 0, 0, 0.7)),
      color-stop(100%, black)
    );
  }
`;

const NewsStyles = styled.section`
  min-width: 1200px;
  max-width: 100%;
  margin: 0px auto;
  position: relative;
  height: 25vh;
  margin-bottom: -150px;
  z-index: 100;
  .news_top {
    margin-bottom: 10px;
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    .latest_news {
      text-transform: uppercase;
      color: #fff;
      letter-spacing: 3px;
      font-weight: bold;
      margin: 2px 0px;
      margin-right: 20px;
    }
    .view_all {
      text-transform: uppercase;
      color: #d0d1d3;
      letter-spacing: 3px;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      transition: all 150ms ease-in-out;
      &:hover {
        letter-spacing: 4px;
        transform: scale(1.1);
      }
      .right_arrow {
        background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//arrow_left.png');
        width: 20px;
        height: 20px;
        margin: 0px 8px;
        background-size: cover;
        background-repeat: no-repeat;
        transform: rotateZ(180deg);
      }
    }
  }
  .news_capsule {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Homepage;
