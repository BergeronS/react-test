import React from 'react'

import { Application, Navbar, Article } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">  
      <Navbar />
      <Application />
      <Article />
    </div>
  )
}

export default App

