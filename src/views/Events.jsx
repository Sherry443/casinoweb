import React from 'react';

import Eventcard from "./Components/Eventcard";

import Quantino_Subscribe from "./Components/Quantino_Subscribe";

 
const Event = () => {

  return (
    <>
      <section className='bg-image-event w-100'>
        <div className='container'>
          <div className='row justify-content-center align-items-end bread_heading_height'>
            <div className='col-lg-8'>
              <h1 className='text-uppercase text-white text-center nav_text all_breadcrumb_font_size'>EVENTS</h1>
              <h5 className='text-uppercase text-center banner_text_color fw-bold nav_text fs-1' >CASINO CONQUEST</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 second_section_background section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-uppercase text-white text-center fw-bold breadcrump_size mb-5">
                Upcoming Events
              </h1>
            </div>
          </div>
          <Eventcard />
        </div>
      </section>
      <Quantino_Subscribe/>
      

    </>
  )
}

export default Event
