import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';
import { Link } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import FetchingLoading from './FetchingLoading';
import FetchErrorMessage from '../FetchErrorMessage';
import { obsH2 } from '../Utility/Colors';

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
    return <FetchingLoading></FetchingLoading>;
  }

  if (isError) {
    return <FetchErrorMessage></FetchErrorMessage>;
  }

  return (
    <Wrapper padding={padding} allNews={allNews}>
      <div className='news_top'>
        <div
          className='latest_news'
          style={{ color: `${!allNews ? obsH2 : ''}` }}
        >
          Latest News
        </div>
        {allNews && (
          <Link className='view_all' to='/news'>
            VIEW ALL
            <div className='right_arrow'></div>
          </Link>
        )}
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
              return (
                <BlogCapsule
                  key={article.announcement_body.gid}
                  blog={article}
                />
              );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  padding: ${(props) => (props.padding ? 'none' : '100px 14vw')};
  margin: auto;
  @media screen and (max-width: 1300px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 1033px) {
    zoom: 0.6;
  }
  @media screen and (max-width: 636px) {
    zoom: 0.5;
  }

  .capsule_container {
    @media screen and (max-width: 800px) {
      zoom: 0.8;
    }
    @media screen and (max-width: 519px) {
      zoom: 0.6;
    }
    @media screen and (max-width: 400px) {
      /* zoom: 0.5; */
      width: 27%;
    }
  }

  .news_top {
    display: ${(props) => (props.allNews ? 'flex' : 'none')};
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .latest_news {
      text-transform: uppercase;
      color: #fff;
      letter-spacing: 3px;
      font-size: 1.3rem;
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

  .container {
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media screen and (max-width: 717px) {
      justify-content: space-evenly;
    }
  }
`;

export default LatestArticles;
