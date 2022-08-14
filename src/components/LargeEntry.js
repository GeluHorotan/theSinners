import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatTimestamp } from '../Functions/formatTimestamp';

const LargeEntry = ({ content }) => {
  const getImage = () => {
    const bodyDesc = content.announcement_body.body.split('[/img]');

    return bodyDesc[0]
      .replace('[img]{STEAM_CLAN_IMAGE}', '')
      .replace('[url=http://www.dota2.com/filmcontest]', '')
      .replace(
        '[url=https://www.dota2.com/labyrinth]/3703047/0e0799b188b3b8a9b231bb612b29f9fea9b33953.jpg',
        ''
      );
  };

  if (content)
    return (
      <LargeEntryStyles>
        <div
          className='heading_image'
          style={{
            background: `url(
            'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans${getImage()}'
          )`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div className='fade_container'>
          <div className='fade_overlay'></div>
        </div>
        <div className='bottom_fade'></div>
        <div className='featured_content'>
          <div className='post_tag'>Featured Post</div>
          {content && (
            <div className='post_date'>
              {formatTimestamp(content.announcement_body.posttime, 'news')}
            </div>
          )}
          <div className='post_title'>
            {content && content.announcement_body.headline}
          </div>
          <Link className='post_link' to='#'>
            READ MORE
          </Link>
        </div>
      </LargeEntryStyles>
    );
};

const LargeEntryStyles = styled.section`
  width: 100%;
  height: 600px;
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
  transition: 250ms all ease-in-out;
  overflow: hidden;
  .heading_image {
    width: 100%;
    height: 600px;
    position: absolute;
    z-index: 1;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition-duration: 0.5s;
    opacity: 0.8;
    vertical-align: middle;
  }
  &:hover {
    .heading_image {
      transform: scale(1.05);
      opacity: 1;
    }
    .featured_content {
      transform: translateY(-10px);
    }
  }
  .fade_container {
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    position: absolute;

    pointer-events: none;
    .fade_overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0.733) 85%,
        rgb(0, 0, 0) 95%
      );
    }
  }
  .bottom_fade {
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0px;
    z-index: 3;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(60%, rgba(0, 0, 0, 0)),
      color-stop(80%, rgba(0, 0, 0, 0.7)),
      color-stop(100%, black)
    );
  }

  .featured_content {
    z-index: 5;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0px 14vw;
    transition: 250ms all ease-in-out;

    .post_tag {
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: 2px;
      background: #ffffff50;
      color: #fff;
      padding: 5px 10px;
      text-transform: uppercase;
      float: right;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .post_date {
      font-size: 18px;
      color: #ffffff90;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .post_title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 0px 0px 10px #000;
      letter-spacing: 1px;
      line-height: 110%;
      color: #e5ded9;
      text-align: left;
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    .post_link {
      position: relative;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
      text-shadow: 0px 0px 4px #000;
      z-index: 200;
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

export default LargeEntry;
