import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Pages

import Homepage from './pages/Homepage';
import About from './pages/About';
import News from './pages/News';
import Team from './pages/Team';
import Heroes from './pages/Heroes';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Hero from './components/Hero';
import Esports from './pages/Esports';

// Router
import { Routes, Route, useLocation } from 'react-router-dom';

// Global Style
import GlobalStyle from './Utility/GlobalStyle';

// Components
import Navigation from './components/Navigation';
import Menubar from './components/Menubar';

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />

      <Navigation />

      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/news' exact element={<News />} />
        <Route path='/team' exact element={<Team />} />
        <Route path='/heroes' exact element={<Heroes />} />
        <Route path='/esports' exact element={<Esports />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/hero/:heroID' element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
