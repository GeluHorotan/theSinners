import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';
import { Link } from 'react-router-dom';

const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const LatestArticles = ({ currentGid, padding, allNews }) => {
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['events', 11],
    () => fetchUsers(11),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <Wrapper padding={padding} allNews={allNews}>
      <div className='news_top'>
        <div className='latest_news'>Latest News</div>
        <Link className='view_all' to='/news'>
          VIEW ALL
          <div className='right_arrow'></div>
        </Link>
      </div>
      <div className='header'>
        LATEST NEWS
        {currentGid}
      </div>
      <div className='container'>
        {data.events
          .filter(
            (article) =>
              !article.announcement_body.tags[0].includes('patchnotes') &&
              article.announcement_body.gid !== currentGid
          )
          .map((article, index) => {
            if (index < 3)
              return <BlogCapsule key={article.clan_steamid} blog={article} />;
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: ${(props) => (props.padding ? 'none' : '100px 14vw')};
  margin: auto;
  .news_top {
    margin-bottom: 10px;
    margin-left: 15px;
    display: ${(props) => (props.allNews ? 'flex' : 'none')};
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
  .header {
    display: ${(props) => (props.allNews ? 'none' : 'flex')};
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default LatestArticles;
