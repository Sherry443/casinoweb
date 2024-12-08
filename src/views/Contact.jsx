import React from 'react'

const Contact = () => {
  return (
    <>

      <section className='bg-image_contact w-100' style={{ paddingTop: '70px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-end' style={{ height: '700px', paddingBottom: '150px' }}>
            <div className='col-lg-8'>
              <h1 className='text-uppercase text-white text-center fw-bold breadcrump_size'>CONTACT US</h1>
              <h3 className='text-uppercase text-center banner_text_color fw-bold '>CASINO CONQUEST</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background' style={{ paddingTop: '100px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-10 col-sm-12'>
              <img src='/public/contact_page_data.png' className='w-100' />
            </div>

          </div>
        </div>
      </section>



      {/* 
      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url('/location.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "skew(-20deg)",
                  overflow: "hidden",
                }}
                className="small_screen_image_height"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background: 'rgb(107 104 104)',
                  transform: "skew(-20deg)",
                  overflow: "hidden",
                }}
                className="small_screen_image_height"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div className='row px-5 pt-4'>
                    <div className='col-lg-8'>
                      <p className='text-white'>Weekly from 11am to 3pm</p>
                      <h3 className='text-white'>Weekend Warriors Challenge</h3>
                    </div>
                    <div className='col-lg-4 align-self-center'>
                      <div className='mb-3 text-start'>
                        <button className='text-white btn_background_color px-4 py-3 border-0'>Read More</button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section> */}


      <section className='w-100 second_section_background section-padding-contact' style={{ paddingTop: '100px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='banner_text_color text-center'>Questions, suggestions, tips?</p>
              <h1 className='text-white text-center fw-bold mb-5'>Leave us a message</h1>
            </div>
          </div>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-10 col-sm-12'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='mb-2'>
                    <input type='text' className='w-100 input_field' placeholder='Your Name' />
                  </div>
                  <div className='mb-2'>
                    <input type='text' className='w-100 input_field' placeholder='Email Address' />
                  </div>
                  <div className='mb-2'>
                    <input type='text' className='w-100 input_field' placeholder='Phone Number' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='mb-2'>
                    <input type='text' className='w-100 input_field' style={{ height: '100px' }} placeholder='Your Message' />
                  </div>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='mb-2'>
                        <input type='text' className='w-100 input_field' placeholder='Phone Number' />
                      </div>
                    </div>
                    <div className='col-lg-6 align-self-center'>
                      <div className='text-end'>
                        <button className='text-white btn_background_color px-4 py-2 border-0'>Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section
        className="discover-section"
        style={{
          background: 'linear-gradient(89.29deg, #E00000 -1.27%, #181818 103.48%)',
          padding: "100px 0",
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
            <div className='col-lg-4'>
              <div>
                <h1 className='text-uppercase pt-5'>
                  CONQUEST REWARDS
                </h1>
              </div>
              <h5 className='text-uppercase text-white'>
                GET FRESH NEWS EVERY MONTH!
              </h5>
            </div>
            <div className='col-lg-8 align-self-center'>
              <div className='row'>
                <div className='col-lg-9 mobile_view_btn mb-3'>
                  <input type='text' placeholder='Your name' style={{ background: '#FFFFFF33' }} className='my-3 border-0 px-2 py-2 text-white w-75' /><br />
                  <input type='email' placeholder='Your email' style={{ background: '#FFFFFF33' }} className='border-0 px-2 py-2 text-white w-75  ' />
                </div>
                <div className='col-lg-3 align-self-center'>
                  <div className='mobile_view_btn'>
                    <button className='text-white btn_background_color px-4 py-2 border-0'>Subscribe</button>
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

export default Contact
