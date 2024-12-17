import React from 'react'

import Quantino_Subscribe from "./Components/Quantino_Subscribe";

const Contact = () => {
  return (
    <>

      <section className='bg-image_contact w-100'>
        <div className='container'>
          <div className='row justify-content-center align-items-end bread_heading_height'>
            <div className='col-lg-8'>
              <h1 className='text-uppercase text-white text-center nav_text all_breadcrumb_font_size'>CONTACT US</h1>
              <h3 className='text-uppercase text-center banner_text_color nav_text fs-1'>CASINO CONQUEST</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100' style={{ paddingTop: '100px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-center' style={{ position: 'relative' }}>
            <div className='col-lg-10 col-sm-12 position-relative'>
              <img src='/contact.png' className='w-100' />
              <button className="text-white px-4 py-2 position-absolute top-50 start-50 w-auto about_btn_hover contact_btn_adjust" style={{ borderRadius: "2px" }}>
                Get Direction
              </button>
            </div>
          </div>
        </div>
      </section>




      {/* <section className="w-100 second_section_background" style={{ paddingTop: '100px', position: 'relative' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <button className="text-white px-4 py-2 position-absolute center-button w-auto about_btn_hover">
              Get Direction
            </button>
          </div>
        </div>
      </section> */}



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
            <div className='col-lg-10 col-sm-12 px-4'>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-2">
                    <input type="text" className="w-100 input_field" placeholder="Your Name" />
                  </div>
                  <div className="mb-2">
                    <input type="text" className="w-100 input_field" placeholder="Email Address" />
                  </div>
                  <div className="mb-2">
                    <input type="text" className="w-100 input_field" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-2">
                    <textarea
                      className="w-100 input_field"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col-lg-6">
                      <div className="mb-2">
                        <select className="w-100 input_field" style={{ padding: "10px" }}>
                          <option value="" disabled selected>
                            Select Department
                          </option>
                          <option value="casino">Casino M8trix</option>
                          <option value="poker">Poker Desk</option>
                          <option value="zone8">Zone 8 Sports</option>
                          <option value="events">Events Department</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 text-end">
                      <button className="text-white btn_background_color px-4 py-2 border-0 small_screen_button_width btn_hover">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </section>

      <Quantino_Subscribe />

    </>
  )
}

export default Contact
