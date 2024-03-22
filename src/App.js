import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<News pageSize='5' country="in" category="general" apikey="989ff19accf74993aebbac396bc499ac" />} />
            <Route path='/business' element={<News pageSize="5" country="in" category="business" apikey="989ff19accf74993aebbac396bc499ac" />} />
            <Route path='/entertainment' element={<News pageSize="5" country="in" category="entertainment" apikey="989ff19accf74993aebbac396bc499ac" />} />
            <Route path='/health' element={<News pageSize="5" country="in" category="health" apikey="989ff19accf74993aebbac396bc499ac" />} />
            <Route path='/science' element={<News pageSize="5" country="in" category="science" apikey="989ff19accf74993aebbac396bc499ac" />} />
            <Route path='/sports' element={<News pageSize="5" country="in" category="sports" apikey="989ff19accf74993aebbac396bc499ac" />} />
            <Route path='/technology' element={<News pageSize="5" country="in" category="technology" apikey="989ff19accf74993aebbac396bc499ac" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


