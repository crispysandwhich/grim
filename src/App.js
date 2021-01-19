import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import HomePage from './components/HomePage';
import TributePage from './components/Tribute/TributePage';

function App() {
  return (
    <div className="App">
    {/* Main Header */}
    <Header />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tribute" component={TributePage} />
    </Switch>


  </div>
  );
}

export default App;
