import React from 'react'

const Signup = () => {
  return (
    <>
      <section
        className="discover-section"
        style={{
          backgroundImage:"linear-gradient(89.29deg, #66000096 14.97%, #181818d1 103.48%), url('/last_image.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 30px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container text-white"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className='row'>
            <div className='col-lg-5 align-self-center mobile_view_cta_footer_text'>
              <div>
                <h1 className='text-uppercase discover_heading'>
                  Sign up Now!
                </h1>
              </div>
              <h3 className='text-uppercase text-white'>
                Sign up now and start winning today!
              </h3>
            </div>
            <div className='col-lg-7 align-self-center'>
              <div className='row'>
                <div className='col-lg-9 subscribe_center'>
                  <input type='text' placeholder='Your name' style={{ background: '#FFFFFF33' }} className='my-3 border-0 px-2 py-2 text-white w-75 custom-input' /><br />
                  <input type='email' placeholder='Your email' style={{ background: '#FFFFFF33' }} className='border-0 px-2 py-2 text-white w-75 custom-input' />
                </div>
                <div className='col-lg-3 align-self-center mt-2'>
                  <div className='subscribe_center'>
                    <button className='text-white btn_background_color px-4 py-2 border-0 w-75 btn_hover' style={{ borderRadius: "2px" }}>Subscribe</button>
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

export default Signup
