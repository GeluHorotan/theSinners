import React from 'react';
import { Link } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { formatTimestamp } from '../Functions/formatTimestamp';

import { convertBBC } from '../Functions/convertBBC';
import { desaturatedRed } from '../Utility/Colors';

const BlogCapsule = ({ blog }) => {
  const bodyDesc = blog.announcement_body.body.split('[/img]');
  const image = bodyDesc[0]
    .replace('[img]{STEAM_CLAN_IMAGE}', '')
    .replace('[url=http://www.dota2.com/filmcontest]', '')
    .replace(
      '[url=https://www.dota2.com/labyrinth]/3703047/0e0799b188b3b8a9b231bb612b29f9fea9b33953.jpg',
      ''
    );

  return (
    <LinkStyles className='capsule_container'>
      <Link
        to={`/newsentry/${blog.announcement_body.gid}`}
        state={{
          title: blog.event_name,
          body: blog.announcement_body.body,
          timestamp: blog.announcement_body.posttime,
          imgSrc: image,
          gid: blog.announcement_body.gid,
        }}
      >
        <div
          className='blog_capsule_entry'
          style={{
            background: `url(
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans${image}'
        )`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className='fade_container'>
            <div className='fade'></div>
          </div>
          <div className='blog_capsule_desc'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {convertBBC(blog.announcement_body.body)}
            </ReactMarkdown>
          </div>
          <div className='blog_capsule_title'>
            <div className='blogcapsule_Title_39UGs'>{blog.event_name}</div>
          </div>
          <div className='blog_capsule_date'>
            <div className='blogcapsule_Date_3kp_O'>
              {formatTimestamp(blog.announcement_body.posttime, 'news')}
            </div>
          </div>
          <div className='overlay'></div>
        </div>
      </Link>
    </LinkStyles>
  );
};

const LinkStyles = styled.div`
  max-width: 400px;
  min-width: 0;
  height: 245px;
  margin: 1rem;
  justify-items: center;
  position: relative;
  flex-wrap: wrap;
  text-decoration: none;
  cursor: pointer;
  z-index: 2;
  vertical-align: middle;
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    opacity: 0;
    transition: all 200ms ease-in-out;
  }
  a {
    text-decoration: none;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .blog_capsule_entry {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-bottom: 4px solid #333;
    background-color: #333;
    position: relative;
    vertical-align: middle;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 0px 0px 10px #000;
    vertical-align: middle;
    text-align: left;
    cursor: pointer;
    user-select: none;
    transition: all 350ms ease-in-out;

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
          rgba(19, 23, 28, 0.833) 70%,
          rgb(19, 23, 28) 90%
        );
      }
    }
    .blog_capsule_desc {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      z-index: 3;

      margin-left: 20px;
      margin-bottom: 0px;
      opacity: 0;
      transform: translateY(20px);
      height: 0px;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-property: height, opacity, transform;
      width: 90%;
      margin: 0 auto;
      white-space: pre-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      a {
        color: ${desaturatedRed};
        text-decoration: underline;
      }
      img {
        display: none;
      }
      p {
        line-height: 20px;
        font-weight: 400;
      }
      em {
        text-decoration: none;
        font-size: 1.5rem;
        color: #fff;
        line-height: 3rem;
      }
    }
    .blog_capsule_title {
      margin: 0px 10px 8px 20px;
      text-shadow: 0px 0px 10px #000;
      font-family: 'Reaver', serif;
      font-weight: bold;
      text-transform: none;
      letter-spacing: 0px;
      z-index: 4;
      font-size: 1.2rem;
      line-height: 115%;
      color: #fff;
      z-index: 3;
    }
    .blog_capsule_date {
      color: rgba(255, 255, 255, 0.85);
      text-shadow: 1px 0px 10px #000;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 20px;
      margin-bottom: 8px;
      z-index: 4;
    }
  }
  &:hover .blog_capsule_entry {
    box-shadow: 0px 0px 30px #000;
    border-bottom: 4px solid #ff6046;
    transform: scale(1.1);

    .blog_capsule_desc {
      height: 120px;
      opacity: 1;
      transform: translateY(-5px);
    }
  }
`;

export default BlogCapsule;
