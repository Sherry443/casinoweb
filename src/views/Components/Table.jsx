import React from "react";
import "../../styles/Table.css";

const GameTable = () => {
  const gameData = [
    { game: "No limit holdem", activeTables: 2, minMax: "1 - 2 - 3", pit: "Poker", limit: "$1 - $2 - $3" },
    { game: "No limit holdem", activeTables: 1, minMax: "2 - 3 - 5", pit: "Poker", limit: "" },
    { game: "Poker-side TCP", activeTables: 1, minMax: "5 - 100", pit: "Cal", limit: "" },
    { game: "Baccarat Squeeze", activeTables: 3, minMax: "10 - 100", pit: "Cal", limit: "" },
    { game: "Pure 21.5 Blackjack", activeTables: 1, minMax: "25 - 100", pit: "Cal", limit: "$2 - $3 - $5" },
    { game: "Double Hand Poker Halfmoon", activeTables: 3, minMax: "5 - 100", pit: "Cal", limit: "" },
    { game: "Three Card Poker", activeTables: 2, minMax: "10 - 100", pit: "Cal", limit: "" },
    { game: "Ultimate Texas Hold Em", activeTables: 2, minMax: "5 - 100", pit: "Cal", limit: "" },
  ];

  const waitingList1 = ["MB", "JC", "JoseJose", "David R.", "Joe", "Victor", "Alex"];
  const waitingList2 = ["Daniel K.", "JL", "DDN2", "Mike", "Rafa", "SL", "JoseJose"];

  return (
 
    
        <svg
          width="100%"
          height="520"
          viewBox="0 0 743 369"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_1200)">
            <path
              d="M308 12H14C12.8954 12 12 12.8954 12 14V355C12 356.105 12.8954 357 14 357H729C730.105 357 731 356.105 731 355V14C731 12.8954 730.105 12 729 12H434"
              stroke="#E00000"
              strokeWidth="3"
            />
          </g>
          <path
            d="M308 12H14C12.8954 12 12 12.8954 12 14V355C12 356.105 12.8954 357 14 357H729C730.105 357 731 356.105 731 355V14C731 12.8954 730.105 12 729 12H434"
            stroke="#E00000"
            strokeWidth="3"
          />
          <defs>
            <filter
              id="filter0_f_1_1200"
              x="0.5"
              y="0.5"
              width="742"
              height="368"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect1_foregroundBlur_1_1200"
              />
            </filter>
          </defs>
        </svg>
 
    
  );
};

export default GameTable;
