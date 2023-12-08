import React from 'react';
import { GamePage } from './features/gamePage/GamePage';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GamePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
