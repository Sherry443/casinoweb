import React from 'react';
import './GamesTableHeader.css';

const GamesTableHeader = ({ 
  gameTitle = 'Game',
  activeTables = 'Active Tables',
  minMaxWager = 'Min/Max Wager',
  pit = 'PIT',
  gameLimit = 'Game/Limit',
  waitingList = 'Waiting List'
}) => {
  return (
    <div className="games-table-header">
      <div className="header-section">
        <div className="header-game">{gameTitle}</div>
        <div className="header-tables">{activeTables}</div>
        <div className="header-wager">{minMaxWager}</div>
        <div className="header-pit">{pit}</div>
      </div>
      <div className="header-section">
        <div className="header-limit">{gameLimit}</div>
        <div className="header-waiting">{waitingList}</div>
      </div>
    </div>
  );
};

export default GamesTableHeader;

