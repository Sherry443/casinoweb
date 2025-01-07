import React from 'react'
import Quantino_Subscribe from "./Components/Quantino_Subscribe";
import Cards from './Components/Cards';
import "../styles/jackpot.css"
import { FaHeart, FaGem } from "react-icons/fa"; // Example icons
export default function Jackpot() {
  return (
  <>

<section className='bg-image-jack w-100' style={{ paddingTop: '70px' }}>
        <div className='container newsss'>
          <div className='row justify-content-center align-items-end pb-5 banner_height'>
            <div className='col-lg-10'>
              <h1 className='text-white text-center fw-bold font_banner_text'>jackpots</h1>
              <h2 className='text-uppercase text-center banner_text_color fw-bold'>Casino Conquest</h2>
           
             
            </div>
          </div>
        </div>
      </section>
      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='p-5' style={{ position: "relative", marginBottom: "20px" }}>
             
               
                <h1 className='text-uppercase text-white fw-bold text-uppercase'>Progressive Jackpot</h1>
                <p className='banner_text_color'>at Casino Conquest</p>
                <p className='text-white'>
                Amet enim nibh morbi morbi. At sed nibh vestibulum cursus at nibh congue eget. 

Urna sodales commodo sit feugiat Enim ipsum nunc adipiscing ut sed viverra. Interdum at amet lacus lorem.                 </p>
                <div className='big_screen_display_none'>
                  <div className='row border-bottom_color py-3 '>
                    <div className='col-6 align-self-center big_screen_display_none'>
                      <p className='text-white mb-0'>Progressive Jackpot 10%</p>
                    </div>
                    <div className='col-6 text-end big_screen_display_none'>
                      <h2 className='text-white'>$ 10,000.00</h2>
                    </div>
                  </div>
                  <div className='row border-bottom_color py-3 '>
                    <div className='col-6 align-self-center '>
                      <p className='text-white mb-0'>Progressive Jackpot 100%</p>
                    </div>
                    <div className='col-6 text-end '>
                      <h2 className='text-white'>$ 100,000.00</h2>
                    </div>
                  </div>
                  <div className='row border-bottom_color py-3'>
                    <div className='col-6 align-self-center '>
                      <p className='text-white mb-0'>Progressive Bad Beat Jackpot</p>
                    </div>
                    <div className='col-6 text-end'>
                      <h2 className='text-white'>$ 100,000.00</h2>
                    </div>
                  </div>
                </div>
                <p className='text-white mt-3'>Last Update: 01/01/2024 16:04:28</p>
               
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 d-none d-md-block'>
              <div className='row border-bottom_color py-3'>
                <div className='col-lg-6 align-self-center'>
                  <p className='text-white mb-0'>Progressive Jackpot 10%</p>
                </div>
                <div className='col-lg-6 text-end'>
                  <h2 className='text-white'>$ 10,000.00</h2>
                </div>
              </div>
              <div className='row border-bottom_color py-3'>
                <div className='col-lg-6 align-self-center'>
                  <p className='text-white mb-0'>Progressive Jackpot 100%</p>
                </div>
                <div className='col-lg-6 text-end'>
                  <h2 className='text-white'>$ 100,000.00</h2>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
          <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
 
      <Cards
        title="Baccarat Gold 1.0"
        
        buttonText="Trigger Hands"
        icon={<FaGem />}
        hoverColor="#f00"
      />
      
      <Cards
        title="Baccarat Gold 1.0"
        
        buttonText="Trigger Hands"
        icon={<FaGem />}
        hoverColor="#f00"
      />
      
        <Cards
        title="Baccarat Gold 1.0"
        
        buttonText="Trigger Hands"
        icon={<FaGem />}
        hoverColor="#f00"
      />
              <Cards
        title="Baccarat Gold 1.0"
        
        buttonText="Trigger Hands"
        icon={<FaGem />}
        hoverColor="#f00"
      />
              <Cards
        title="Baccarat Gold 1.0"
        
        buttonText="Trigger Hands"
        icon={<FaGem />}
        hoverColor="#f00"
      />
              <Cards
        title="Baccarat Gold 1.0"
        
        buttonText="Trigger Hands"
        icon={<FaGem />}
        hoverColor="#f00"
      />
</div>

      {/* Progressive Jackpot Section */}
      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='p-5' style={{ position: "relative", marginBottom: "20px" }}>
             
               
                <h1 className='text-uppercase text-white fw-bold text-uppercase'>progressive bad beat jackpot</h1>
                <p className='banner_text_color'>at Casino Conquest</p>
                
                <div className='big_screen_display_none'>
                  <div className='row border-bottom_color py-3 '>
                    <div className='col-6 align-self-center big_screen_display_none'>
                      <p className='text-white mb-0'>Progressive Jackpot 10%</p>
                    </div>
                    <div className='col-6 text-end big_screen_display_none'>
                      <h2 className='text-white'>$ 10,000.00</h2>
                    </div>
                  </div>
                  <div className='row border-bottom_color py-3 '>
                    <div className='col-6 align-self-center '>
                      <p className='text-white mb-0'>Progressive Jackpot 100%</p>
                    </div>
                    <div className='col-6 text-end '>
                      <h2 className='text-white'>$ 100,000.00</h2>
                    </div>
                  </div>
                  <div className='row border-bottom_color py-3'>
                    <div className='col-6 align-self-center '>
                      <p className='text-white mb-0'>Progressive Bad Beat Jackpot</p>
                    </div>
                    <div className='col-6 text-end'>
                      <h2 className='text-white'>$ 100,000.00</h2>
                    </div>
                  </div>
                </div>
                <p className='text-white mt-3'>Last Update: 01/01/2024 16:04:28</p>
               
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 d-none d-md-block'>
              <div className='row border-bottom_color py-3'>
                <div className='col-lg-6 align-self-center'>
                  <p className='text-white mb-0'>Progressive Jackpot 10%</p>
                </div>
                <div className='col-lg-6 text-end'>
                  <h2 className='text-white'>$ 10,000.00</h2>
                </div>
              </div>
             
             
            </div>
          </div>
        </div>
      </section>

      {/* Trigger Hand Section */}
      <div className="trigger-hand">
        <h1 className="trigger-text">Trigger hand</h1>
        <h2 className="trigger-condition">QUAD 4's OR BETTER BEAT</h2>

        
      </div>
<div className="trigger-bot">
      {/* Disclaimer */}
 

      {/* Promotions Section */}
    
      </div>
    <Quantino_Subscribe />
  
  </>

  )
}
