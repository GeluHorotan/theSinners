import React from 'react';
import Logo from './components/Logo'
import { AnimatePresence } from 'framer-motion';

// Global Style
import GlobalStyle from './components/GlobalStyle';



function App() {
return (
  <div className='App'>
 <GlobalStyle/>
  <Logo/>
  </div>
)
}

export default App;
