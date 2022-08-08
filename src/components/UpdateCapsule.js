import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { convertBBC } from '../Functions/convertBBC';
import { formatTimestamp } from '../Functions/formatTimestamp';
const UpdateUI = ({ headline, timestamp, body }) => {
  console.log(headline);
  return (
    <Wrapper>
      <div className='update_capsule_timestamp'>
        {formatTimestamp(timestamp, 'day')}
      </div>
      <div className='update_capsule_title'> {headline}</div>
      <div className='update_capsule_body'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{ list: 'ol', h1: 'h4' }}
        >
          {convertBBC(body)}
        </ReactMarkdown>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  justify-items: left;
  position: relative;
  text-align: left;
  border-left: 2px solid #1f3242;
  background-color: #0b0b0b;
  padding: 20px 20px;
  margin: 40px 0px;
  color: red;
  .update_capsule_timestamp {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 8px;
    z-index: 2;
    font-weight: 400;
  }

  .update_capsule_title {
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 8px;
    text-shadow: 0px 0px 10px #000;

    font-weight: bold;
    text-transform: none;
    letter-spacing: 0px;
    font-size: 24px;
    color: #fff;
    z-index: 2;
  }
  .update_capsule_body {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    z-index: 2;
    margin-left: 20px;
    margin-bottom: 10px;
    line-height: 26px;
    letter-spacing: 2px;
    ul {
      margin-left: 1.5cm;
    }
    p {
      font-size: 1rem;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
    }
    h4 {
      color: #fff;
      margin-top: 3.5rem;
    }
  }
`;

export default UpdateUI;
