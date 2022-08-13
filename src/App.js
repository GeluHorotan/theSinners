import React, { useState, createContext, useEffect } from 'react';
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
import NewsEntry from './components/NewsEntry';
import Updates from './pages/Updates';
import Patches from './pages/Patches';
import PageNotFound from './pages/PageNotFound';

export const ItemsContext = React.createContext();
export const HeroesContext = React.createContext();
export const AbilityContext = React.createContext();

function App() {
  const location = useLocation();
  const [dotaItems, setDotaItems] = useState();
  const [dotaHeroes, setDotaHeroes] = useState();
  const [dotaAbilities, setDotaAbilities] = useState();

  const getDotaItems = async () => {
    const res = await fetch(`/.netlify/functions/items/`);
    const json = await res.json();
    setDotaItems((prevState) => json.result.data.itemabilities);
  };

  const getHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld/`);
    const json = await res.json();
    setDotaHeroes((prevState) => json.result.data.heroes);
  };

  const getAbilities = async () => {
    const res = await fetch(`/.netlify/functions/abilities/`);
    const json = await res.json();
    setDotaAbilities((prevState) => json.result.data.itemabilities);
  };

  useEffect(() => {
    getAbilities();
    getDotaItems();
    getHeroes();
  }, []);

  return (
    <div>
      <GlobalStyle />

      <Navigation />
      <AbilityContext.Provider value={dotaAbilities}>
        <HeroesContext.Provider value={dotaHeroes}>
          <ItemsContext.Provider value={dotaItems}>
            <Routes location={location} key={location.pathname}>
              <Route path='/' exact element={<Homepage />} />
              <Route path='*' exact element={<PageNotFound />} />
              <Route path='/about' exact element={<About />} />
              <Route path='/news' exact element={<News />} />
              <Route path='/news/updates' exact element={<Updates />} />
              <Route path='/newsentry/:gid' element={<NewsEntry />} />
              <Route path='/patches' element={<Patches />} />
              <Route path='/team' exact element={<Team />} />
              <Route path='/heroes' exact element={<Heroes />} />
              <Route path='/esports' exact element={<Esports />} />
              <Route path='/shop' exact element={<Shop />} />
              <Route path='/contact' exact element={<Contact />} />
              <Route path='/hero/:heroID' element={<Hero />} />
            </Routes>
          </ItemsContext.Provider>
        </HeroesContext.Provider>
      </AbilityContext.Provider>
    </div>
  );
}

export default App;
