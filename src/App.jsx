import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O';

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') currentPlayer = 'O';

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
