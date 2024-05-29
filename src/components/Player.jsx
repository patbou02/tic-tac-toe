import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleButtonClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButtonClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;