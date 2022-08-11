import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';

const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const LatestArticles = ({ currentGid, padding }) => {
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
    <Wrapper padding={padding}>
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
  .header {
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
