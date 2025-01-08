import React from 'react'
import "../styles/Three.css"
import img from "../assets/uploads/playing.png"
import imgcard from "../assets/uploads/gamecard.png"
import Card from "./Components/Card"
import Quantino_Subscribe from "./Components/Quantino_Subscribe";
export default function ThreeCard({ 

  title = "Gaming Tips and Tricks",
  description = "Whether you're a beginner or consider yourself advanced, our crew shares their essential tips to help you win big at the tables.",
  buttonText = "watch videos",
  backgroundImage = "https://dashboard.codeparrot.ai/api/assets/Z34463wdoACPgrLn",
  gameIcon = "https://dashboard.codeparrot.ai/api/assets/Z34463wdoACPgrLo",
  buttonIcon = "https://dashboard.codeparrot.ai/api/assets/Z34463wdoACPgrLp"
}) {

  
  return (
   <>
     <section className='bg-image-three w-100' style={{ paddingTop: '70px' }}>
    <div className='container newsss'>
      <div className='row justify-content-center align-items-end pb-5 banner_height'>
        <div className='col-lg-10'>
          <h1 className='text-white text-center fw-bold font_banner_text'>Three Card Poker</h1>
          <h2 className='text-uppercase text-center banner_text_color fw-bold'>TABLE GAMING AT CASINO M8TRIX</h2>
      

        </div>
      </div>
    </div>
  </section>
  
  <div className="card-academy">
      <div className="cards-container">
        <img 
          src={img} 
          alt="Playing Cards"
          className="cards-image"
          width={290}
          height={216}
        />
      </div>
      
      <h1 className="title">Welcome to Casino Conquest Three Card Poker</h1>
      
      <p className="description">This tutorial series was designed by top professionals in the gaming industry with the goal of introducing table gaming to players of all levels. You will navigate the fundamentals and best strategies for playing a variety of different games offered at Casino M8trix. Our instructor will leave you ready to take your newly developed skills to live action games and experience the excitement Casino M8trix offers. Good luck and may the cards fall in your favor!</p>
      
      <p className="footer">Casino M8trix Card Academy tutorials are available online and in person</p>
    </div>
    <div className="cards-containers">
        <img 
          src={imgcard} 
          alt="Playing Cards"
          className="cards-images"
      
        />
      </div>


 
      <div className='container-new'>
      <div className="content-container">
        <div className="icon-container">
          <img src={gameIcon} alt="Game Icon" className="game-icon" />
        </div>
        
        <div className="text-content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>
        
        <div className=' button-wrapper'>
          <button className="btn_background_color btn_hover"
        style={{
       

          color: "#fff",
          border: "1px solid white",
          backgroundColor:'black',
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}>
            <span className="button-text">{buttonText}</span>
          </button>
        </div>
      </div>
      </div>
      <div className='container-cards-new'>
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
        </div>
        <Quantino_Subscribe />
   </>
  )
}
{/* <div className="card-container"> */}
      {/* Cards */}
      {/* <div className="card-game">
      <div className="card card1">
        <span className="card-value">5</span>
        <span className="card-suit">♦</span>
      </div>
      <div className="card card2">
        <span className="card-value">Q</span>
        <span className="card-suit">♣</span>
      </div>
      <div className="card card3">
        <span className="card-value">2</span>
        <span className="card-suit">♥</span>
      </div>
      <div className="card card4">
        <span className="card-value">2</span>
        <span className="card-suit">♦</span>
        <span className="logo">M8trix</span>
      </div>
</div> */}