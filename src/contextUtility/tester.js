import React, { createContext, useState, useEffect } from 'react';

const Updater = () => {
  const [update, setUpdate] = useState('');

  const myTest = async () => {
    const res = await fetch(`/.netlify/functions/recentMatches`);
    const json = await res.json();
    setUpdate(json);
  };
  useEffect(() => {
    myTest();
  }, []);

  if (update) {
    return update;
  }
};

export const tester = createContext(Updater());
