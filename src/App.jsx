import './App.css'
// import React, { useEffect, useState } from 'react'
// import api from './api/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Home from './components/Home'
import Scanner from './components/Scanner';

const App = () => {

  return (
    <div className='px-0'>
      <RecoilRoot>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/scanner' exact element={<Scanner/>} />
        </Routes>
      </Router>
      </RecoilRoot>
    </div>
  )
}


export default App