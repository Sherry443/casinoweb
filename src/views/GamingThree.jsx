import "./GamingThree.css";
import playingcard from "../assets/uploads/playing.png"
import "../styles/Table.css"
import Signup from "./Components/Signup";
export default function GamingThree() {
  const payoffData = [
    { hand: "Royal Flush", payoff: "200 to 1" },
    { hand: "Straight Flush", payoff: "40 to 1" },
    { hand: "Three of a Kind", payoff: "30 to 1" },
    { hand: "Straight", payoff: "5 to 1" },
    { hand: "Flush", payoff: "3 to 1" },
    { hand: "One Pair", payoff: "1 to 1" },
  ];
  const payof = [
    { hand: "Royal Flush", payoff: "1000 to 1" },
    { hand: "Straight Flush", payoff: "200 to 1" },
    { hand: "Four of a Kind", payoff: "100 to 1" },
    { hand: "Full House", payoff: "20 to 1" },
    { hand: "Flush", payoff: "15 to 1" },
    { hand: "Straight", payoff: "10 to 1" },
    { hand: "Three of a Kind", payoff: "7 to 1" },
  ];

  return (
    <>
      <div className="three-card-poker-banner">
        <div className="content">
          <a href="#" className="back-link">
            &lt; Back to gaming
          </a>
          <h1 className="title-game">Three Card Poker</h1>
          <button className="btn_background_color">PLAY NOW</button>
        </div>
        <div className="image-cont">
          <img
            src={playingcard}
            alt="Three Card Poker Cards"
            className="card-image"
          />
        </div>
      </div>

      <div className="poker-container">
        <div className="content-wrappers">
          <h3 className="titles">GEGA-001277</h3>
          <p className="descriptions">
            Three card poker is one of the most popular poker games with two of
            the most played bonuses in the casino. Three card bonus pays with a
            pair or better and our Six card bonus gives our players the
            opportunity to win up to 1000 to 1.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn_background_color">
            <span>Learn more</span>
          </button>
        </div>
      </div>

      <div className="how-to-play-container">
        <div className="title-container">
          <h1 className="title">How to play</h1>
        </div>
        <div
          style={{
            borderBottom: "2px solid rgb(75, 74, 74)",
            borderLeft: "2px solid rgb(75, 74, 74)",
            borderRight: "2px solid rgb(75, 74, 74)",
          }}
        >
          <div className="content-wrapper">
            <div className="text-sections">
              <div className="left-column">
                <div className="section">
                  <h2>Hand Rankings</h2>
                  <p>
                    The ranking of hands differs from traditional poker:
                    <br />• Royal Flush
                    <br />• Straight Flush
                    <br />• Three-Of-A-Kind
                    <br />• Straight
                    <br />• Flush
                    <br />• Pair
                    <br />• High Card
                    <br />
                    <br />
                    Note: Ace is high, except in 3-2-A sequence.
                  </p>
                </div>

                <div className="section">
                  <h2>Getting Started</h2>
                  <p>
                    Make the Ante wager to compete against the player-dealer.
                    You and the player-dealer will each receive three cards to
                    make a poker hand, and the player-dealer will expose one of
                    his cards.
                  </p>
                </div>
              </div>

              <div className="right-column">
                <div className="section">
                  <h2>Play or Fold?</h2>
                  <p>
                    When you look at your three card poker hand, you have two
                    choices: fold and forfeit your Ante wager, or stay in the
                    game by making a play wager equal to your Ante.
                  </p>
                </div>

                <div className="section">
                  <h2>Winning & Losing</h2>
                  <p>
                    You win even-money on the Ante and play wagers when your
                    three-card hand beats the player-dealer's qualifying hand of
                    a Queen-high or better. You lose these wagers when the
                    player-dealer's qualifying hand beats your hand. Ties push.
                    If the player-dealer does not qualify, your Play receives no
                    action. Player can never lose Ante on non qualifying
                    Player/Dealer hand. She/he can only push or win unless
                    surrendered by Player or by exercising the House Way option.
                  </p>
                </div>

                <div className="section">
                  <h2>House Way Option</h2>
                  <p>
                    • Qualifier: Queen or better and must play.
                    <br />• Non-Qualifier: The play bet will be returned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="two-tables">
        <div className="bonus-payoff-chart">
          <div className="chart-title">
            <span>3 Card Bonus Payoff Chart</span>
          </div>
          <div
            style={{
              borderBottom: "2px solid rgb(75, 74, 74)",
              borderLeft: "2px solid rgb(75, 74, 74)",
              borderRight: "2px solid rgb(75, 74, 74)",
            }}
          >
            <div className="chart-container">
              <div className="chart-header">
                <div className="header-row">
                  <span className="hand-header">Hand</span>
                  <span className="payoff-header">Pay Off</span>
                </div>
              </div>

              <div className="chart-rows">
                {payoffData.map((row, index) => (
                  <div key={index} className="game-row">
                    <div className="row-content">
                      <span className="hand">{row.hand}</span>
                      <span className="payoff">{row.payoff}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bonus-payoff-chart">
          <div className="chart-title">
            <span>3 Card Bonus Payoff Chart</span>
          </div>
          <div
            style={{
              borderBottom: "2px solid rgb(75, 74, 74)",
              borderLeft: "2px solid rgb(75, 74, 74)",
              borderRight: "2px solid rgb(75, 74, 74)",
            }}
          >
            <div className="chart-container">
              <div className="chart-header">
                <div className="header-row">
                  <span className="hand-header">Hand</span>
                  <span className="payoff-header">Pay Off</span>
                </div>
              </div>

              <div className="chart-rows">
                {payof.map((row, index) => (
                  <div key={index} className="game-row">
                    <div className="row-content">
                      <span className="hand">{row.hand}</span>
                      <span className="payoff">{row.payoff}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='w-100 second_section_background section-padding' style={{ paddingTop: '0px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='p-5' style={{ position: "relative", marginBottom: "20px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "14px",
                    width: "116px",
                    height: "4px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "13px",
                    width: "4px",
                    height: "116px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <h1 className='text-uppercase text-white fw-bold text-uppercase'>Casino Conquest Card Academy</h1>
                <p className='banner_text_color'>Learn from the professionals</p>
                <div className='text-center d-md-none mb-3'>
                  <img src="/2nd.png" className='w-100 image_hover' alt="icon" />
                </div>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='mb-3 text-start'>
                      {/* <button className='text-white btn_background_color px-4 py-2 border-0 small_screen_button_width btn_hover' style={{ borderRadius: "3px" }}>Join Academy</button> */}
                      <button className="btn_background_color btn_hover" style={{ borderRadius: '3px' }}>
                        <span>Join Academy</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div className='text-center d-none d-md-block'>
                <img src="/2nd.png" className='w-100 image_hover' alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Signup/>
    </>
  );
}
