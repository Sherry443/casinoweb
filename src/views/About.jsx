import React from 'react'

const About = () => {
  return (
    <>

      <section className='bg-image-about w-100'>
        <div className='container'>
          <div className='row justify-content-center align-items-end bread_heading_height'>
            <div className='col-lg-8'>
              <h1 className='text-uppercase text-white text-center font_banner_text nav_text all_breadcrumb_font_size'>ABOUT US</h1>
              <h5 className='text-uppercase text-center banner_text_color nav_text fs-1 '>CASINO CONQUEST</h5>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding pb-0'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 col-sm-12'>
              <h2 className='text-uppercase text-white text-uppercase text-center'>At Casino, you can find non-stop action at your favorite gaming <br /> tables.</h2>
              <p className='text-white text-center fs-5'>Casino Conquest is the premiere 24/7 entertainment destination in <span style={{ color: '#E00000' }}> San Jose </span> and <span style={{ color: '#E00000' }}> Silicon Valley. </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-image_second w-100' style={{ position: 'relative' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-center about_image_height'>
          <button className="text-white px-4 py-2 position-absolute center-button w-auto about_btn_hover" style={{ borderRadius: "2px"}}>
            Virtual Visit
          </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default About
