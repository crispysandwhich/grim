import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
    {/* Main Header */}
    <header className="mainHeader">

      <h2 className="logo">Grimmory</h2>

      <nav className="mainNav">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/tribute">Tribute</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

    </header>

    {/* Main Home Page */}
    <div className="hero">
      <h1>Project X</h1>
      <h2>A start of something new</h2>
    </div>

    <div className="mainContent">

    <p>This is going to be a small start towards a direction that will potential unlock doors that will allow us to have an interesting future with hopes and riches that we all will be able to fuffil. And I hope things will run smoothly most importantly, with what I am trying to do. I hope things will eventually slowly start and eventually start as well as progress. I am tired of a lot of fail attempts towards things I have tried to do, a lose of motivation a lose of spirt, getting too sad or angry. I am tired of my life but hoping that I can eventually create something that can just get me into a good vacation or relaxation after all this cause honestly I just want to die. I am not trying to get you guys to feel any type of way, but I just have been tired and dont know who to talk to or how to talk to you guys so I just burry my feelings into this and this time going to try to actually get this going. I wanna say sorry to most of you guys... but you guys are my brothers, brothers from another mothers, and I am sorry for everything. But this... this is something that I would like to try with you guys and actually get far and freaking finesse and turn this into one of our best years together.
    </p>


    <h2>The Goal</h2>
    <p>
      The goal is simple, basically to finesse this and make this better, and most importantly make this year something that will burn and last us for a good remeinder of our years. Basically to create a few bots and create a commuinity which will get us towards an advantage that in which could eventually turn something into something bigger. With all that not only will that come but also some knowledge about <strong>crypto</strong> and <strong>coding</strong>. I would like to know some of this stuff cause I have at least 2 major projects that I would like to work with you guys as well as few buisness <em>(short term possibily)</em>
    </p>
    <div className="goals">

      {/* Crypto */}
      <div>
        <div className="imageContainer">
          <img src="#" alt="crypto image" />
        </div>
        <div className="textContent">
          <p>Basically one of the goals is going to be to learn a bit more about crypto and find a few good crypto coins as well as get a into a few platforms that will allow us to get a few good bangs for our buck as well as create your own blockchain</p>
        </div>
      </div>

      {/* Bots */}
      <div>
        <div className="imageContainer">
          <img src="#" alt="Bots" />
        </div>
        <div className="textContent">
          <p>Talk and show you guys a few good ways to create a few accounts that could potential be used to create a way to gain views and auidence.</p>
        </div>
      </div>

      {/* Buisness */}
      <div>
        <div className="imageContainer">
          <img src="#" alt="Business" />
        </div>
        <div className="textContent">
          <p>After a few things are setup slowly going into a few side buisness as well as focus on 2 big buisness as well</p>
        </div>

    </div>

    </div>

    <p>
      With that being said a few things that I am tring looking forward to and trying to setup as well. Planning on doing a lot and I really hope that we all can do this together. Slow and steady but hard as a diamond. Cause this is going to be something unbreakable and hopefully we will be able to turn this into something that can be something that will make the future just a little bit easier to work with.
    </p>

    </div>

  </div>
  );
}

export default App;
