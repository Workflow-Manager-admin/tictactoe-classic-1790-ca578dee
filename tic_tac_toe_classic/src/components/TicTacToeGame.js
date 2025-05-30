import React, { useState } from 'react';
import './TicTacToeGame.css';

// PUBLIC_INTERFACE
const TicTacToeGame = () => {
  // Initialize game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  /**
   * Calculate winner by checking all possible winning combinations
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Handle click on a square
   */
  const handleClick = (index) => {
    // If square is filled or there's a winner, return
    if (board[index] || calculateWinner(board)) {
      return;
    }

    // Create new board state
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  /**
   * Reset the game state
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  // Calculate current game status
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);
  let status;
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="game-board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToeGame;
