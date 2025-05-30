import React from 'react';
import './App.css';
import TicTacToeGame from './components/TicTacToeGame';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> Tic Tac Toe Classic
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <h1 className="title">Tic Tac Toe</h1>
            <div className="description">
              A classic two-player game where X's and O's battle it out on a 3x3 grid.
              First to get three in a row wins!
            </div>
            <TicTacToeGame />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;