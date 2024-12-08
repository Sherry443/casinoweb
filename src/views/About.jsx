import React from 'react'

const About = () => {
  return (
    <>

      <section className='bg-image-about w-100' style={{ paddingTop: '70px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-end' style={{ height: '700px', paddingBottom: '150px' }}>
            <div className='col-lg-8'>
              <h1 className='text-uppercase text-white text-center fw-bold breadcrump_size'>ABOUT US</h1>
              <h5 className='text-uppercase text-center banner_text_color fw-bold ' style={{ fontSize: '28px' }}>CASINO CONQUEST</h5>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 col-sm-12'>

              <h2 className='text-uppercase text-white text-uppercase text-center'>At Casino, you can find non-stop action at your favorite gaming <br /> tables.</h2>
              <p className='text-white text-center'>Casino Conquest is the premiere 24/7 entertainment destination in <span style={{ color: '#E00000' }}> San Jose </span> and <span style={{ color: '#E00000' }}> Silicon Valley. </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-image_second w-100' style={{ paddingTop: '70px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-end pb-5' style={{ height: '700px' }}>
          </div>
        </div>
      </section>

    </>
  )
}

export default About
