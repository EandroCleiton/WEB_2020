import React from 'react';
import './App.css';

import Arena from './components/questao01questao02/Arena';
import World from './components/questao03/World';
import {ArenaChildren, Hero, Enemy} from './components/questao04/ArenaChildren'

function App() {
  return (
    <div className="App">

  
      <h2>Questão 01 e 02</h2>
      <Arena />
      <br />

      <h2>Questão 03</h2>
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
      <br />

      <h2>Questão 4</h2>
      <ArenaChildren arena="YU-GI-OH">
        <Hero name="DM" />
        <Enemy name="DBE" />
      </ArenaChildren>


    

    </div>
  );
}

export default App;