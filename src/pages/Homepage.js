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
import JoinBattle from '../components/JoinBattle';

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
            <a
              href='https://store.steampowered.com/app/570/Dota_2/'
              target={'_blank'}
              rel='noreferrer'
            >
              <div className='play_button'>
                <div className='steam_logo'></div>
                <div className='right_side'>
                  <div className='play_for_free'>Play for free</div>
                  <div className='download'>Download on Steam</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='bottom_fade'></div>
      </HeaderStyles>
      <NewsStyles>
        <div className='news_capsules'>
          {' '}
          <LatestArticles padding={'none'} allNews={true}></LatestArticles>
        </div>
      </NewsStyles>
      <BattleStyles>
        <div className='battle_bg'>
          <img
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg'
            alt='Radiant Background'
            className='background_img desktop_background'
          />
          <img
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg'
            alt='Radiant Background'
            className='background_img mobile_background'
          />
        </div>
        <div className='battle_left_half'>
          <div className='header_text'>
            <span className='Minor'>Join THE</span>
            <br />
            Battle of the Ancients
          </div>
          <div className='horizontal_bar'></div>
          <div className='body_text'>
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
            multi-player action RTS game ever made and there's always a new
            strategy or tactic to discover. It's completely free to play and
            always will be – start defending your ancient now.
            <Button setClassName={'call_to_action'} isLink setLink={'/news'}>
              {' '}
              SEE WHAT'S NEW
            </Button>
          </div>
        </div>
      </BattleStyles>
      <ChooseStyles>
        <div className='fade_container fade_top'>
          <div className='fade top'></div>
        </div>
        <div className='fade_container fade_bottom'>
          <div className='fade bottom'></div>
        </div>
        <div className='header_text'>
          <span className='Minor'>Who Will You</span>
          <br />
          Choose ?
        </div>
        <div className='horizontal_bar'></div>
        <div className='body_text'>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
          <Button isLink setClassName={'call_to_action'} setLink={'/heroes'}>
            {' '}
            VIEW ALL HEROES
          </Button>
        </div>
        <div className='heroes_grid'></div>
      </ChooseStyles>
      <DPCStyles>
        <div className='dpc_images'>
          <img
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg'
            alt=''
            className='dpc_image left'
          />
          <img
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg'
            alt=''
            className='dpc_image right'
          />
        </div>
        <div className='dpc_icon'></div>
        <div className='header_text'>
          <span className='Minor'>The</span>
          <br />
          Dota Pro Circuit
        </div>
        <div className='horizontal_bar'></div>
        <div className='body_text'>
          When not climbing the ranks, you'll be able to learn from the best.
          The Dota Pro Circuit features ultra-high-level Dota 2 competition
          streaming regularly in the game client, on Twitch and Steam.TV.
          Culminating in the largest e-sports championship in the world, The
          International, professional Dota 2 is an event not to be missed.
          <Button isLink setClassName={'call_to_action'} setLink={'/esports'}>
            {' '}
            WATCH DPC
          </Button>
        </div>
      </DPCStyles>
      <JoinBattleStyles>
        <JoinBattle></JoinBattle>
      </JoinBattleStyles>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  width: 100%;
  color: #fff;

  .call_to_action {
    margin-top: 1.5rem;
    border: 1px solid #fff;
    border-radius: 1rem;
  }
`;

const HeaderStyles = styled.section`
  width: 100%;
  height: 75vh;
  margin-bottom: -90px;
  overflow: hidden;
  display: block;
  position: relative;

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
      @media screen and (max-width: 900px) {
        font-size: 2rem;
      }
      font-size: 4rem;
      line-height: 113%;
      font-family: 'Reaver', serif;
      letter-spacing: 5px;
      font-weight: 600;
      color: #ffffffee;
      text-transform: uppercase;
      text-shadow: 0px 0px 20px #000;
    }
    .quote_credit {
      @media screen and (max-width: 900px) {
        font-size: 0.8rem;
      }
      font-size: 1.25rem;
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

      .play_button {
        padding: 0.5rem;
        border-radius: 6px;
        border: 2px solid #ffffff90;
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
          background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam.svg');
          width: 3rem;
          height: 3rem;
          margin: 0px 8px;
          background-size: contain;
          background-repeat: no-repeat;

          display: flex;
          align-items: center;
          justify-content: center;

          @media screen and (max-width: 450px) {
            width: 2rem;
            height: 2rem;
          }
        }
        .right_side {
          flex-grow: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          margin-right: 12px;
          .play_for_free {
            @media screen and (max-width: 900px) {
              font-size: 1rem;
            }
            @media screen and (max-width: 768px) {
              font-size: 0.7rem;
            }
            font-size: 1.35rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            text-shadow: 2px 2px 3px #000;
            font-family: Reaver, serif;
            font-weight: 600;
          }
          .download {
            font-size: 1rem;
            @media screen and (max-width: 900px) {
              font-size: 0.8;
            }
            @media screen and (max-width: 768px) {
              font-size: 0.6rem;
            }
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
  max-width: 100%;
  margin: 0px auto;
  position: relative;
  min-height: 308px;
  margin-bottom: -150px;
  z-index: 6;

  .news_capsule {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BattleStyles = styled.section`
  width: 100%;
  min-height: 764px;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-size: cover;

  background-repeat: no-repeat;
  margin-bottom: 100px;
  .battle_bg {
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    @media screen and (max-width: 900px) {
      margin-bottom: -50px;
    }
    .background_img {
      width: 100%;

      opacity: 0.6;
      z-index: -1;
    }
    .mobile_background {
      display: none;
    }
    .desktop_background {
      display: flex;
    }
  }
  .battle_left_half {
    width: 100%;
    margin: 0 auto;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    z-index: 5;
    .header_text {
      font-family: Reaver, serif;
      font-weight: 700;
      font-size: 5rem;
      @media screen and (max-width: 900px) {
        font-size: 3rem;
      }
      color: #e2dace;
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 105%;
      text-align: center;
      margin-bottom: 20px;
      .Minor {
        font-size: 4rem;

        @media screen and (max-width: 900px) {
          font-size: 2rem;
        }
        color: #e2dace90;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
    .horizontal_bar {
      width: 80px;
      height: 3px;
      min-height: 3px;
      background-color: #ff6046;
      border-radius: 1px;
    }
    .body_text {
      text-align: center;
      margin-top: 30px;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      color: #e2dace;
      font-size: 26px;
      line-height: 115%;
      font-weight: 100;
    }
  }
`;

const ChooseStyles = styled.section`
  width: 100%;
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg');
  max-width: 100%;
  min-height: 1500px;
  background-size: 3500px;
  background-position: center top;
  background-repeat: no-repeat;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .fade_container {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    .fade {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .top {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.733) 90%,
        rgb(0, 0, 0) 100%
      );
    }
    .bottom {
      background: linear-gradient(
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.733) 90%,
        rgb(0, 0, 0) 100%
      );
    }
  }
  .fade_top {
    left: 0px;
    top: 0px;
    right: 0px;
  }
  .fade_bottom {
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
  .header_text {
    margin-top: 900px;
    text-align: center;
    padding-bottom: 20px;
    z-index: 5;
    position: relative;
    width: 80%;
    font-family: Reaver, serif;
    font-weight: 700;
    font-size: 5rem;
    @media screen and (max-width: 900px) {
      font-size: 3rem;
    }
    color: #e2dace;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 105%;
    .Minor {
      font-size: 50px;
      color: #e2dace90;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .horizontal_bar {
    width: 80px;
    height: 3px;
    min-height: 3px;
    background-color: #ff6046;
    border-radius: 1px;
  }
  .body_text {
    text-align: center;
    margin-top: 30px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color: #e2dace;
    font-size: 26px;
    line-height: 115%;
    font-weight: 100;
  }
  .heroes_grid {
    width: 80%;
    z-index: 3;
    min-height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 20%,
      black 80%,
      transparent 100%
    );
  }
`;

const DPCStyles = styled.section`
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg');
  width: 100%;
  min-height: 1150px;
  margin: 40px auto;
  padding-bottom: 100px;
  background-position: top;
  background-size: 2000px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dpc_images {
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    overflow: hidden;
    .dpc_image {
      position: absolute;
      z-index: 5;
      box-shadow: 0px 0px 30px #000;
    }
    .left {
      max-width: 20%;
      left: 100px;
      top: 50px;
    }
    .right {
      top: 200px;
      right: 0;
      max-width: 30%;
    }
  }
  .dpc_icon {
    background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg');
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 96px;
    min-height: 96px;
    margin-top: 550px;
  }

  .header_text {
    text-align: center;
    padding-bottom: 20px;
    z-index: 5;
    position: relative;
    width: 80%;
    font-family: Reaver, serif;
    font-weight: 700;
    font-size: 5rem;
    @media screen and (max-width: 900px) {
      font-size: 3rem;
      margin-top: 1rem;
    }

    color: #e2dace;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 105%;
    .Minor {
      font-size: 50px;
      color: #e2dace90;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .horizontal_bar {
    width: 80px;
    height: 3px;
    min-height: 3px;
    background-color: #ff6046;
    border-radius: 1px;
  }
  .body_text {
    text-align: center;
    margin-top: 30px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color: #e2dace;
    font-size: 26px;
    line-height: 115%;
    font-weight: 100;
  }
`;

const JoinBattleStyles = styled.section`
  button {
    width: 35%;
    @media screen and (max-width: 900px) {
      width: 50%;
    }
    @media screen and (max-width: 550px) {
      width: 100%;
    }
  }
  .header_text {
    @media screen and (max-width: 900px) {
      text-align: center;
    }
    text-align: start;
    padding-bottom: 20px;
    z-index: 5;
    position: relative;
    width: 80%;
    font-family: Reaver, serif;
    font-weight: 700;
    font-size: 5rem;
    @media screen and (max-width: 900px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    color: #e2dace;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 105%;
    .Minor {
      font-size: 50px;
      color: #e2dace90;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .horizontal_bar {
    width: 80px;
    height: 3px;
    min-height: 3px;
    background-color: #ff6046;
    border-radius: 1px;
  }
  .body_text {
    text-align: center;
    z-index: 5;
    width: 100%;
    padding-bottom: 40px;
    margin-top: 30px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color: #e2dace;
    font-size: 26px;
    text-align: justify;
  }
`;

export default Homepage;
