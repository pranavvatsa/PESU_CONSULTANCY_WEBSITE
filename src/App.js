import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Contact from './routes/Contact';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Team from './routes/Team';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
