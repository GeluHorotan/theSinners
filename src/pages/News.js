import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tab } from '@headlessui/react';

const News = () => {
  return (
    <Wrapper>
      <LargeEntryStyles>
        <div className='heading_image'></div>
        <div className='fade_container'>
          <div className='fade_overlay'></div>
        </div>
        <div className='bottom_fade'></div>
        <div className='featured_content'>
          <div className='post_tag'>Featured Post</div>
          <div className='post_date'>4 August 2022</div>
          <div className='post_title'>
            The Arlington Major & The Road to the International
          </div>
          <Link className='post_link' to='#'>
            READ MORE
          </Link>
        </div>
      </LargeEntryStyles>
      <TabGroupStyles>
        <div className='tabs_group'>
          <Link to='#'>NEWS</Link>
          <Link to='#'>UPDATES</Link>
        </div>
      </TabGroupStyles>
      <BottomSectionStyles>
        <div className='sub_entries'>
          <Link className='blog_capsule' to='#'>
            <div className='blog_capsule_entry'>
              <div className='fade_container'>
                <div className='fade'></div>
              </div>
              <div className='blog_capsule_desc'>
                The Summer Tour of the DPC draws to a close, and The Arlington
                Major offers the best teams in the world a final chance at DPC
                points before the competitive road reaches The...
              </div>
              <div className='blog_capsule_title'>
                <div class='blogcapsule_Title_39UGs'>
                  The Arlington Major &amp; The Road to the International
                </div>
              </div>
              <div className='blog_capsule_date'>
                <div class='blogcapsule_Date_3kp_O'>4 August 2022</div>
              </div>
            </div>
          </Link>
        </div>
      </BottomSectionStyles>
      <BottomSectionStyles>
        <div className='sub_entries'>
          <Link className='blog_capsule' to='#'>
            <div className='blog_capsule_entry'>
              <div className='fade_container'>
                <div className='fade'></div>
              </div>
              <div className='blog_capsule_desc'>
                The Summer Tour of the DPC draws to a close, and The Arlington
                Major offers the best teams in the world a final chance at DPC
                points before the competitive road reaches The...
              </div>
              <div className='blog_capsule_title'>
                <div class='blogcapsule_Title_39UGs'>
                  The Arlington Major &amp; The Road to the International
                </div>
              </div>
              <div className='blog_capsule_date'>
                <div class='blogcapsule_Date_3kp_O'>4 August 2022</div>
              </div>
            </div>
          </Link>
        </div>
      </BottomSectionStyles>
      <BottomSectionStyles>
        <div className='sub_entries'>
          <Link className='blog_capsule' to='#'>
            <div className='blog_capsule_entry'>
              <div className='fade_container'>
                <div className='fade'></div>
              </div>
              <div className='blog_capsule_desc'>
                The Summer Tour of the DPC draws to a close, and The Arlington
                Major offers the best teams in the world a final chance at DPC
                points before the competitive road reaches The...
              </div>
              <div className='blog_capsule_title'>
                <div class='blogcapsule_Title_39UGs'>
                  The Arlington Major &amp; The Road to the International
                </div>
              </div>
              <div className='blog_capsule_date'>
                <div class='blogcapsule_Date_3kp_O'>4 August 2022</div>
              </div>
            </div>
          </Link>
        </div>
      </BottomSectionStyles>
      <BottomSectionStyles>
        <div className='sub_entries'>
          <Link className='blog_capsule' to='#'>
            <div className='blog_capsule_entry'>
              <div className='fade_container'>
                <div className='fade'></div>
              </div>
              <div className='blog_capsule_desc'>
                The Summer Tour of the DPC draws to a close, and The Arlington
                Major offers the best teams in the world a final chance at DPC
                points before the competitive road reaches The...
              </div>
              <div className='blog_capsule_title'>
                <div class='blogcapsule_Title_39UGs'>
                  The Arlington Major &amp; The Road to the International
                </div>
              </div>
              <div className='blog_capsule_date'>
                <div class='blogcapsule_Date_3kp_O'>4 August 2022</div>
              </div>
            </div>
          </Link>
        </div>
      </BottomSectionStyles>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 2220px;
  margin: 0px auto;
  text-align: center;
  min-height: 50vw;
`;

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
    background-image: url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/ff274a64dd35731d2fc678f8e2884aa8bd0035ef.jpg');
    width: 100%;
    height: 600px;
    position: absolute;
    z-index: 1;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition-duration: 0.5s;
    opacity: 0.8;
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
      font-size: 60px;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 0px 0px 10px #000;
      letter-spacing: 1px;
      line-height: 110%;
      color: #e5ded9;
      text-align: left;
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

const TabGroupStyles = styled.section`
  width: 100%;
  height: 100px;
  padding: 0px 14vw;
  padding-top: 40px;
  background: black;
  border-bottom: 3px solid #313131;
  .tabs_group {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      background: none;
      border: none;
    }
    a {
      width: 48%;
      height: 100%;
      padding-top: 20px;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: bold;
      font-size: 17px;
      color: #828282;
      background-color: #222;
      text-decoration: none;
    }
    .tab_active {
      color: #fff;
      background-color: #313131;
      border-top: 2px solid #646566;
    }
  }
`;

const BottomSectionStyles = styled.section`
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg');
  width: 100%;

  .sub_entries {
    width: 100%;
    padding: 0px 14vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 3vw;

    a {
      width: 400px;
      height: 245px;
      margin: 15px;
      justify-items: center;
      position: relative;
      flex-wrap: wrap;
      text-decoration: none;
      &:hover .blog_capsule_entry {
        box-shadow: 0px 0px 30px #000;
        border-bottom: 4px solid #ff6046;

        .blog_capsule_desc {
          height: 120px;
          opacity: 1;
          transform: translateY(0px);
        }
      }

      &::after {
        transition-property: opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;
      }
      &:hover::after {
        opacity: 1;
      }

      .blog_capsule_entry {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #333;
        position: relative;
        background-size: cover;
        background-position: top;
        border-bottom: 2px solid #555;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column-reverse;
        box-shadow: 0px 0px 10px #000;
        background-image: url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/17e3e74c5f323f431ec172c81940e81ad52588b3.jpg');
        text-align: left;
        cursor: pointer;
        user-select: none;
        transition: all 250ms ease-in-out;

        .fade_container {
          width: 100%;
          height: 100%;
          position: absolute;
          pointer-events: none;
          .fade {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              rgba(19, 23, 28, 0) 60%,
              rgba(19, 23, 28, 0.733) 70%,
              rgb(19, 23, 28) 90%
            );
          }
        }
        .blog_capsule_desc {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          z-index: 2;
          margin-left: 20px;
          margin-bottom: 0px;
          opacity: 0;
          transform: translateY(20px);
          height: 0px;
          transition-duration: 0.5s;
          transition-timing-function: ease;
          transition-property: height, opacity, transform;
        }
        .blog_capsule_title {
          margin: 0px 10px 8px 20px;
          text-shadow: 0px 0px 10px #000;
          font-family: 'Reaver', serif;
          font-weight: bold;
          text-transform: none;
          letter-spacing: 0px;
          font-size: 24px;
          line-height: 115%;
          color: #fff;
          z-index: 2;
        }
        .blog_capsule_date {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-left: 20px;
          margin-bottom: 8px;
          z-index: 2;
        }
      }
    }
  }
`;

export default News;
