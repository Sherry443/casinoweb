import React from 'react';
import GamesTableHeader from './GamesTableHeader';
import GamesTableRows from './GamesTableRows';
import WaitingListSection from './WaitingListSection';
import './GamesTableLayout.css';

const GamesTableLayout = () => {
  return (
    <div className="games-table-layout">
      <div className="games-table-left">
        <GamesTableHeader />
        <GamesTableRows />
      </div>
      <div className="games-table-right">
        <WaitingListSection />
      </div>
    </div>
  );
};

export default GamesTableLayout;

