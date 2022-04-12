import React from 'react';
// Pages
import Starting from './pages/Starting'
import Homepage from './pages/Homepage'

// Components
import Navigation from './components/Navigation';

// Router
import { Routes, Route, useLocation } from 'react-router-dom';


// Global Style
import GlobalStyle from './components/GlobalStyle';






function App() {
   const location = useLocation();
return (
<div>
    <GlobalStyle/>
     
       <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Starting/> } />
          <Route path='/homepage' exact element={<Homepage/> } />
   </Routes>
   </div>
  


)
}


export default App;
