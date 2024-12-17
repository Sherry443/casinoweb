import React from 'react'

const Quantino_Subscribe = () => {
  return (
    <>
      <section className="quantino_subscribe">
        <div className="container text-white">
          <div className='row'>
            <div className='col-lg-6 mobile_view_cta_footer_text align-self-center'>
              <div>
                <h1 className='text-uppercase discover_heading'>
                  CONQUEST REWARDS
                </h1>
              </div>
              <h5 className='text-uppercase text-white'>
                GET FRESH NEWS EVERY MONTH!
              </h5>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='row'>
                <div className='col-lg-9 subscribe_center'>
                  <input type='text' placeholder='Your name' style={{ background: '#FFFFFF33' }} className='my-3 border-0 px-2 py-2 text-white w-75 custom-input' /><br />
                  <input type='email' placeholder='Your email' style={{ background: '#FFFFFF33' }} className='border-0 px-2 py-2 text-white w-75 custom-input' />
                </div>
                <div className='col-lg-3 align-self-center mt-2'>
                  <div className='subscribe_center'>
                    <button className='text-white btn_background_color px-2 py-2 border-0 w-75 btn_hover' style={{ borderRadius: "2px" }}>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quantino_Subscribe
