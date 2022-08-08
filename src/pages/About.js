import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import InfiniteScroll from '../components/InfiniteScroll';

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10`
  );
  return res.json();
};

const About = () => {
  const [view, setView] = useState('pagination');

  return (
    <div>
      <h1>Welcome to Random Users</h1>

      <nav className='nav'>
        <button onClick={() => setView('pagination')}>Pagination</button>
        <button onClick={() => setView('infiniteScroll')}>
          Infinite Scroll
        </button>
      </nav>

      {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
    </div>
  );
};

const Styles = styled.div`
  color: blue;
  display: flex;
  background: white;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default About;
