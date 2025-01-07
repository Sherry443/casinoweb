import React from 'react';
import './GamesTableRows.css';

const GamesTableRows = ({ games = [] }) => {
  return (
    <div className="games-table-rows">
      {games.map((game, index) => (
        <div key={index} className="game-row">
          <div className="game-row-content">
            <div className="game-name">{game.name}</div>
            <div className="active-tables">{game.activeTables}</div>
            <div className="min-max">{game.minMax}</div>
            <div className="pit">{game.pit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

GamesTableRows.defaultProps = {
  games: [
    { name: 'No limit holdem', activeTables: '2', minMax: '1 - 2 - 3', pit: 'Poker' },
    { name: 'No limit holdem', activeTables: '1', minMax: '2 - 3 - 5', pit: 'Poker' },
    { name: 'Poker-side TCP', activeTables: '1', minMax: '5 - 100', pit: 'Cal' },
    { name: 'Baccarat Squeeze', activeTables: '3', minMax: '10 - 100', pit: 'Cal' },
    { name: 'Pure 21.5 Blackjack', activeTables: '1', minMax: '25 - 100', pit: 'Cal' },
    { name: 'Double Hand Poker Halfmoon', activeTables: '3', minMax: '5 - 100', pit: 'Cal' },
    { name: 'Three Card Poker', activeTables: '2', minMax: '10 - 100', pit: 'Cal' },
    { name: 'Ultimate Texas Hold Em', activeTables: '2', minMax: '5 - 100', pit: 'Cal' },
    { name: 'Pai Gow Tiles Batwing', activeTables: '2', minMax: '25 - 500', pit: 'Cal' },
    { name: 'Double Hand Poker Batwing', activeTables: '1', minMax: '25 - 500', pit: 'Cal' },
    { name: 'Face Up DHP', activeTables: '1', minMax: '10 - 100', pit: 'Cal' },

  ]
};

export default GamesTableRows;

