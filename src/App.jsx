
import React from 'react';
import 'animate.css';
import { Routes, Route } from 'react-router-dom';
import Land from './Components/Land';
import LANDlandingpage from './Components/LANDlandingpage';
import Court from './Components/Court';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LANDlandingpage />} />
        <Route path='/Register' element={<Land />} />
        <Route path='/Court' element={<Court />} />
      </Routes>
    </>
  )
}

export default App;