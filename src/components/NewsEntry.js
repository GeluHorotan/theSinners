import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatTimestamp } from '../Functions/formatTimestamp';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router';
import LatestArticles from './LatestArticles';
import { desaturatedRed } from '../Utility/Colors';
import { convertBBC } from '../Functions/convertBBC';

const NewsEntry = () => {
  const [props, setProps] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setProps((prevState) => location.state);
  }, []);

  if (props)
    return (
      <WrapperStyles>
        <div className='title_container'>
          <div className='title_background'></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: [-100, 0, 0] }}
          animate={{ opacity: 1, x: [0, 100, 0] }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          onClick={() => navigate('/news')}
          className='back_to'
        >
          <motion.img
            initial={{ x: 0, opacity: 0.3 }}
            animate={{ x: -15, opacity: 1 }}
            transition={{
              duration: 1,

              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className='back_arrow_icon'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_left.png'
            alt=''
          />
          BACK TO NEWS
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='title'
        >
          {props.title}
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='date'
        >
          {formatTimestamp(props.timestamp, 'news')}
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='body'
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {convertBBC(location.state.body)}
          </ReactMarkdown>
        </motion.div>
        <section>
          <LatestArticles currentGid={props.gid}></LatestArticles>
        </section>
      </WrapperStyles>
    );
};

const WrapperStyles = styled.div`
  width: 100%;

  color: #fff;
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/outlanders/patch-notes/bg_repeater.jpg');
  background-color: #15171b;
  position: relative;
  .title_container {
    width: 100%;
    height: 500px;

    position: relative;
    margin-bottom: -275px;
    -webkit-mask-image: linear-gradient(to top, transparent 25%, black 100%);
    mask-image: linear-gradient(to top, transparent 25%, black 100%);
    .title_background {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.9;
      background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/blog/default_header.jpg');
      background-size: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .back_to {
    position: relative;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    text-shadow: 0px 0px 4px #000;

    text-decoration: none;
    .back_arrow_icon {
      width: 20px;
      height: 20px;
      filter: opacity(0.8);
      margin-top: 1px;
      margin-right: 8px;
    }
  }
  .title {
    padding: 0px 18vw;
    position: relative;
    font-size: 60px;
    line-height: 115%;
    text-align: center;

    font-weight: 700;

    text-shadow: 0px 0px 10px #000, 0px 0px 5px #000;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .date {
    font-size: 20px;
    color: #999;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 50px;
  }
  .body {
    padding: 0px 50px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    white-space: pre-wrap;
    font-size: 22px;
    line-height: 150%;

    font-weight: lighter;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.8);
    a {
      color: ${desaturatedRed};
      text-decoration: underline;
    }
    img {
      width: 100%;
    }

    p {
      color: #fff;
      font-size: 1.3rem;
      line-height: 28px;
      font-weight: 400;
    }
    em {
      text-decoration: none;
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }
`;

const LatestNewsStyles = styled.section`
  width: 100%;
  padding: 100px 14vw;
  margin: auto;
`;

export default NewsEntry;
