import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    {/* Main Header */}
    <Header />

    <Switch>
      <Route exact path="/" exact={HomePage} />
    </Switch>


  </div>
  );
}

export default App;
