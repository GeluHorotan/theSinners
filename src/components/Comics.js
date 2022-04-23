import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import styled from 'styled-components';

const publicKey = 'e53976497c7ff71a3543c2799a7b8424';
const privateKey = '66aa2faffd7624947268f9e730c1eb1a81c262e1';

const Comics = () => {
  const [comicsData, setComicsData] = useState();
  const getComicsData = async () => {
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?apikey=e53976497c7ff71a3543c2799a7b8424`
    );

    const json = await res.json();

    setComicsData(json);
  };

  useEffect(() => {
    getComicsData();
  }, []);

  console.log(comicsData);
  return <div>Comics</div>;
};

export default Comics;
