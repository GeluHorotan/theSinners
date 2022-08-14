import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import InfiniteScroll from '../components/InfiniteScroll';

import ViewMode from '../components/ViewMode';
import LargeEntry from '../components/LargeEntry';
import { useQuery } from 'react-query';

const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const News = () => {
  const [view, setView] = useState('pagination');
  const [page, setPage] = useState(15);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['events', page],
    () => fetchUsers(page),
    { keepPreviousData: true }
  );

  const setViewPageHandler = () => {
    setView('pagination');
  };
  const setViewScrollHandler = () => {
    setView('infiniteScroll');
  };

  return (
    <Wrapper>
      <LargeEntry
        content={
          data &&
          data.events.filter(
            (data) => !data.announcement_body.tags[0].includes('patchnotes')
          )[0]
        }
      ></LargeEntry>
      <TabGroupStyles>
        <div className='tabs_group'>
          <Link to='/news' className='tab_active'>
            NEWS
          </Link>
          <Link to='/news/updates'>UPDATES</Link>
        </div>
      </TabGroupStyles>
      <BottomSectionStyles>
        <div className='sub_entries'>
          <ViewMode
            pageFunction={setViewPageHandler}
            scrollFunction={setViewScrollHandler}
            viewMode={view}
          />
          {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
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
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    padding-top: 3vw;
  }
`;

export default News;
