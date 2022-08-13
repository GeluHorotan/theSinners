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

  return <Styles>TEST</Styles>;
};

const Styles = styled.div`
  color: blue;
  display: flex;
  background: white;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default About;
