import React from 'react';
// Pages
import Starting from './pages/Starting';
import Homepage from './pages/Homepage';
import About from './pages/About';
import News from './pages/News';
import Team from './pages/Team';
import Heroes from './pages/Heroes';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Hero from './components/Hero';

// Router
import { Routes, Route, useLocation } from 'react-router-dom';

// Global Style
import GlobalStyle from './Utility/GlobalStyle';

// Components
import Navigation from './components/Navigation';

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <div className={`${location.pathname === '/' && 'hidden'}`}>
        <Navigation />
      </div>
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Starting />} />
        <Route path='/homepage' exact element={<Homepage />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/news' exact element={<News />} />
        <Route path='/team' exact element={<Team />} />
        <Route path='/heroes' exact element={<Heroes />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/hero/:heroID' element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
