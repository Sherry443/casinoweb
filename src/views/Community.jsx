import React from 'react'
import Quantino_Subscribe from "./Components/Quantino_Subscribe";

const Community = () => {
  return (
    <>

      <section className='bg-image-coummunity w-100'>
        <div className='container'>
          <div className='row justify-content-center align-items-end bread_heading_height'>
            <div className='col-lg-8'>
              <h1 className='text-uppercase text-white text-center nav_text all_breadcrumb_font_size'>Community</h1>
              <h5 className='text-uppercase text-center banner_text_color nav_text fs-1' >Outreach</h5>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding pb-0'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-8 col-sm-12'>
              <h2 className='text-uppercase text-white text-uppercase text-center'>Social responsibility</h2>
              <h3 className='text-uppercase text-white text-uppercase text-center'>giving back to our community</h3>
              <p className='text-white text-center' style={{ fontSize: '23px' }}>We at M8trix firmly believe in giving back to our community. Our brand ambassadors serve the community through charitable efforts, like supporting organizations fighting cancer, helping to feed the homeless, visiting local animal rescue organizations, and working to keep our Bay Area parks clean.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row justify-content-center align-items-center border_color_cmmunity px-2 py-3 mx-2'>
            <div className='col-lg-12'>
              <h1 className='text-uppercase text-white text-center fw-bold'>Supporting fight against Blood cancer</h1>
              <h3 className='text-uppercase text-white text-center '>Leukemia and Lymphoma Society</h3>
            </div>
            <div className='col-lg-5 col-sm-12'>
              <div className='text-center'>
                <img src="/heart_img.png" className='w-100' alt="icon" />
              </div>
            </div>
            <div className='col-lg-7 col-sm-12'>
              <div className='small_screen_community_padding' style={{ position: "relative", marginBottom: "20px" }}>
                <h4 className=' text-white fw-bold'>The Leukemia & Lymphoma Society delivers hope in a time of despair, a community in place of loneliness and life-saving RESEARCH & SUPPORT for cancer patients and their families.</h4>
                <p className='text-white'>Light The Night walks are a celebration of light to drive out the darkness of cancer. The Leukemia and Lymphoma Society Light the Night event was full of so much light and love. Thank you to all who participated.</p>
              </div>
            </div>

            <div className='col-lg-12'>
            <div className='row'>
                  <div className='col-6'>
                    <div className='mb-3 text-end'>
                      <button className="btn_background_color btn_hover" style={{ backgroundColor: 'transparent', border: '2px solid white', borderRadius: "2px" }}>
                        <span>View Website</span>
                      </button>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='mb-3 text-start'>
                      <button className="btn_background_color btn_hover" style={{ borderRadius: '2px' }}>
                        <span>Donate</span>
                      </button>
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

export default Community
