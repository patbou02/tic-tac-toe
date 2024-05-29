import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function derivedCurrentPlayer(turnsArray) {
  let derivedPlayer = 'X';
  if (turnsArray.length > 0 && turnsArray[0].player === 'X') derivedPlayer = 'O';
  return derivedPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = derivedCurrentPlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = derivedCurrentPlayer(prevTurns);

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
