import React from 'react';
import './WaitingListSection.css';

const WaitingListSection = ({ waitingLists = [
  {
    gameType: 'No limit holdem',
    stakes: '$1 - $2 - $3',
    players: ['MB', 'JC', 'JoseJose', 'David R.', 'Joe', 'Victor', 'Alex']
  },
  {
    gameType: 'No limit holdem',
    stakes: '$2 - $3 - $5',
    players: ['Daniel K.', 'JL', 'DDN2', 'Mike', 'Rafa', 'SL', 'JoseJose']
  }
] }) => {
  return (
    <div className="waiting-list-container">
      {waitingLists.map((list, index) => (
        <div key={index} className="waiting-list-frame">
          <div className="waiting-list-content">
            <div className="game-info">
              <span className="game-type">{list.gameType}</span>
              <span className="stakes">{list.stakes}</span>
            </div>
            <div className="players-list">
              {list.players.map((player, playerIndex) => (
                <span key={playerIndex} className="player-name">{player}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaitingListSection;

