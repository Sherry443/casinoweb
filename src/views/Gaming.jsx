import React from "react";
import Card from "./Components/Card";
import "../styles/Table.css"
import Signup from "./Components/Signup";
import GamesTableLayout from "./Components/GamesTableLayout";


const Gaming = () => {
  
  return (
    <>
   
    <section className='bg-image-gaming w-100' style={{ paddingTop: '70px' }}>
    <div className='container newsss'>
      <div className='row justify-content-center align-items-end pb-5 banner_height'>
        <div className='col-lg-10'>
          <h1 className='text-white text-center fw-bold font_banner_text'>ARE YOU IN?</h1>
          <h2 className='text-uppercase text-center banner_text_color fw-bold'>TABLE GAMING AT CASINO M8TRIX</h2>
      

        </div>
      </div>
    </div>
  </section>

  <section
        className="w-100 second_section_background section-padding"
        style={{ paddingTop: "0px", backgroundColor: "#000" }}
      >
        <div
          className="container "
        >
          <div className='position-relative color_background mt-0'

          >
            <div className="text-center position-relative" style={{ marginBottom: "1rem" }}>
              <h1
                className="mobile_view_text_height text-white"
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  display: "inline-block",
                  position: "relative",
                  top: "35px",
                }}
              >
                Games
              </h1>
              <div className='mobile_view_line_set_left'
                style={{
                  position: "absolute",
                  top: "65px",
                  left: "0px",
                  width: "38%",
                  height: "2px",
                  backgroundColor: "#FF0000",
                  transform: "translateY(-50%)",
                }}
              ></div>
              <div className='mobile_view_line_set_right'
                style={{
                  position: "absolute",
                  top: "65px",
                  right: "0px",
                  width: "38%",
                  height: "2px",
                  backgroundColor: "#FF0000",
                  transform: "translateY(-50%)",
                }}
              ></div>
              <div style={{
                padding: "1.5rem 0px 1.5rem 0px",
                borderBottom: "2px solid rgb(255, 0, 0)",
                borderLeft: "2px solid rgb(255, 0, 0)",
                borderRight: "2px solid rgb(255, 0, 0)",
              }}>

           <GamesTableLayout/>
           
              </div>
            </div>
          </div>
        </div>
      </section>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        marginBottom:"2rem"
      }}
    >
    <Card
        title="Three Card Poker"
        description="Three card poker is one of the most popular poker games with two of the most played bonuses in the casino. Three card bonus pays with a pair or better…"
        buttonText="Play Now"
        hoverColor="#f00"
      />
      <Card
        title="Baccarat"
        description="Baccarat is played around the world and is the most popular game at Casino M8trix. Our “No Commission” Baccarat games have the best Dragon excitement. Visit our Card Academy to…"
        buttonText="Play Now"
        hoverColor="#f00"
      />
        <Card
        title="Pure 21.5 Blackjack"
        description="Pure 21.5 Blackjack games feature a variety of bonuses and pay up to 1000 to 1. Or choose our double deck or multi-deck games. Multi-deck games allow double downs for…"
        buttonText="Play Now"
        hoverColor="#f00"
      />
        <Card
        title="DOUBLE HAND POKER"
        description="Double hand poker with Fortune bonus bet gives you 7 cards to make two poker hands or take a look at your cards, sit back and relax and our Dealers…"
        buttonText="Play Now"
        hoverColor="#f00"
      />
        <Card
        title="ULTIMATE TEXAS HOLD’EM"
        description="Ultimate Texas Hold’em offers heads up poker play against the dealers hand and a Bad Beat bonus that pays when you win or lose against the dealers three of a…"
        buttonText="Play Now"
        hoverColor="#f00"
      />
              <Card
        title="PAI GOW TILES"
        description="The ancient game of Pai Gow is played using Chinese tiles. There are 32 tiles that are arranged into stacks of 4 tiles. The object of the game is for…"
        buttonText="Play Now"
        hoverColor="#f00"
      />
             
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
};

export default Gaming;
