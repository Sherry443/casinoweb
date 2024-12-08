import React from 'react'

const Home = () => {
  return (
    <>
      <section className='bg-image w-100' style={{ paddingTop: '70px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-end pb-5' style={{ height: '700px' }}>
            <div className='col-lg-10'>
              <h1 className='text-white text-center fw-bold font_banner_text'>Welcome to Casino Conquest</h1>
              <h2 className='text-uppercase text-center banner_text_color fw-bold'>Experience the Ultimate Thrill of Card Games</h2>
              <p className='text-white text-center'>
                Discover a world where strategy meets excitement. Play Poker, Baccarat, Blackjack, and more,
                all in a visually stunning, user-friendly environment.
              </p>
              <div className='text-center mb-5'>
                <button className='text-white btn_background_color px-4 py-2 border-0'>ALL GAMES</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='p-5' style={{ position: "relative", marginBottom: "20px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "14px",
                    width: "116px",
                    height: "4px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "13px",
                    width: "4px",
                    height: "116px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <h1 className='text-uppercase text-white fw-bold text-uppercase'>Progressive Card Games Jackpots</h1>
                <p className='banner_text_color'>at Casino Conquest</p>
                <p className='text-white'>
                  Vulputate cursus commodo rutrum massa tellus. Enim orci leo egestas in eget venenatis nunc tellus. Laoreet lectus quam velit morbi amet cursus nunc eget.
                </p>
                <p className='text-white'>Last Update: 01/01/2024 16:04:28</p>
                <div className='text-left mb-5'>
                  <button className='text-white btn_background_color px-4 py-2 border-0'>LEARN MORE</button>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
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
              <div className='row border-bottom_color py-3'>
                <div className='col-lg-6 align-self-center'>
                  <p className='text-white mb-0'>Progressive Bad Beat Jackpot</p>
                </div>
                <div className='col-lg-6 text-end'>
                  <h2 className='text-white'>$ 100,000.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding' style={{ paddingTop: '0px' }}>
        <div className='container color_background mt-0'>
          <div className="text-center position-relative" style={{ marginBottom: "4rem" }}>
            <h1
              className="mb-4 text-white"
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                display: "inline-block",
                position: "relative",
              }}
            >
              ARE YOU IN?
            </h1>
            <div className='d-none d-lg-block'
              style={{
                position: "absolute",
                top: "50%",
                left: "10%",
                width: "20%",
                height: "2px",
                backgroundColor: "#FF0000",
                transform: "translateY(-50%)",
              }}
            ></div>
            <div
              className='d-none d-lg-block'
              style={{
                position: "absolute",
                top: "50%",
                right: "10%",
                width: "20%",
                height: "2px",
                backgroundColor: "#FF0000",
                transform: "translateY(-50%)",
              }}
            ></div>
          </div>
          <h5 className="mb-4 text-center banner_text_color">Card GAMING AT Casino Conquest</h5>
          <p className="mb-5 text-center text-white">
            Play Poker, Baccarat, Blackjack, and more, all in a visually stunning, user-friendly environment.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-2">
              <div className="game-icon w-100 text-center">
                <img src="/public/3-1.PNG" alt="icon" />
              </div>
              <h4 className="text-center" style={{ color: '#675d5d' }}>Poker</h4>
            </div>
            <div className="col-md-2">
              <div className="game-icon w-100 text-center">
                <img src="/public/3-2.PNG" alt="icon" />
              </div>
              <h4 className=" text-center" style={{ color: '#675d5d' }}>Pure 21.5</h4>
            </div>
            <div className="col-md-2">
              <div className="game-icon w-100 text-center">
                <img src="/public/3-3.PNG" alt="icon" />
              </div>
              <h4 className=" text-center" style={{ color: '#675d5d' }}>Baccarat</h4>
            </div>
            <div className="col-md-2">
              <div className="game-icon w-100 text-center">
                <img src="/public/3-5.PNG" alt="icon" />
              </div>
              <h4 className=" text-center" style={{ color: '#675d5d' }}>AKA PAI GOW</h4>
            </div>
            <div className="col-md-2">
              <div className="game-icon w-100 text-center">
                <img src="/public/3-6.PNG" alt="icon" />
              </div>
              <h4 className=" text-center" style={{ color: '#675d5d' }}>PAI GOW TILES</h4>
            </div>
          </div>
          <div className='text-center mt-5'>
            <button className='text-white btn_background_color px-4 py-2 border-0'>ALL GAMES</button>
          </div>

        </div>
      </section>

      <section
        className="w-100 tournaments-section section-padding">
        <div className="container text-center">
          <h1 className='text-uppercase text-white text-center fw-bold breadcrump_size mb-5'>Tournaments</h1>
          <div className="row justify-content-center">
            {[
              "/1.png",
              "/2.png",
              "/3.jpeg",
              "/4.png",
            ].map((image, index) => (
              <div
                className="col-lg-3 col-md-6 col-12 d-flex justify-content-center"
                key={index}

              >
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "skew(-20deg)",
                    overflow: "hidden",
                  }}
                  className='small_screen_image_height'
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
            ))}
          </div>
        </div>
      </section>

      <section
        className="discover-section"
        style={{
          backgroundImage: "url('/bg-image.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div
              className='d-none d-lg-block'
              style={{
                position: "absolute",
                top: "0",
                left: "-60px",
                width: "116px",
                height: "4px",
                backgroundColor: "#FF0000",
              }}
            ></div>
            <div
              className='d-none d-lg-block'
              style={{
                position: "absolute",
                left: "-60px",
                width: "4px",
                height: "116px",
                backgroundColor: "#FF0000",
              }}
            ></div>
            <h1 className=' text-uppercase pt-5'>
              DISCOVER Casino Conquest
            </h1>

          </div>
          <h3 className='text-uppercase banner_text_color'>
            Take a walk around and experience it yourself
          </h3>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#FFFFFF",
              marginBottom: "30px",
            }}
          >
            We have prepared a <strong>3D tour</strong> of the whole casino. You can see
            for yourself what an evening at Casino Conquest <br /> might look like, check out our
            card games tables.
          </p>
          <div className='mobile_view_btn'>
            <button className='text-white btn_background_color px-4 py-2 border-0'>ALL GAMES</button>
          </div>
        </div>
      </section>

      <section className='w-100' style={{
        backgroundImage: "url('/public/last.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "100px",
      }}>
        <div className='container' >
          <div className='row justify-content-center align-items-end' style={{ height: '500px' }}>
          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text-uppercase text-white text-center fw-bold breadcrump_size mb-5'>Events</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  backgroundImage: `url('/1st.jpeg')`,
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
              className="col-xl-5 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "180px",
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
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  backgroundImage: `url('/public/2nd_img.png')`,
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
              className="col-xl-5 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "180px",
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
                      <p className='text-white'>Sundays @ 9am</p>
                      <h3 className='text-white'>Winter Wonderland Tournament</h3>
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
      </section>

      <section className='w-100 second_section_background section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text-uppercase text-white text-center fw-bold breadcrump_size mb-5'>Why Join Our Events?</h1>
            </div>
          </div>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='p-5' style={{ position: "relative", marginBottom: "20px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "14px",
                    width: "116px",
                    height: "4px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "13px",
                    width: "4px",
                    height: "116px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <h1 className='text-uppercase text-white fw-bold text-uppercase'>Massive Prizes</h1>
                <p className='banner_text_color'>Exclusive Opportunities</p>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='mb-3 text-start'>
                      <button className='text-white btn_background_color px-4 py-2 border-0'>Event Request</button>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='mb-3 text-start'>
                      <button className='text-white btn_background_color px-4 py-2 border-0'>Event Details</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div className='text-center'>
                <img src="/public/x1.PNG" className='w-100' alt="icon" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='w-100 second_section_background section-padding' style={{ paddingTop: '0px' }}>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='p-5' style={{ position: "relative", marginBottom: "20px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "14px",
                    width: "116px",
                    height: "4px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "13px",
                    width: "4px",
                    height: "116px",
                    backgroundColor: "#FF0000",
                  }}
                ></div>
                <h1 className='text-uppercase text-white fw-bold text-uppercase'>Casino Conquest Card Academy</h1>
                <p className='banner_text_color'>Learn from the professionals</p>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='mb-3 text-start'>
                      <button className='text-white btn_background_color px-4 py-2 border-0'>Join Academy</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div className='text-center'>
                <img src="/public/2nd.PNG" className='w-100' alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="discover-section"
        style={{
          backgroundImage: "url('/last_image.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
                  Sign up Now!
                </h1>
              </div>
              <h5 className='text-uppercase text-white'>
                Sign up now and start winning today!
              </h5>
            </div>
            <div className='col-lg-8 align-self-center'>
              <div className='row'>
                <div className='col-lg-9 text-end'>
                  <input type='text' placeholder='Your name' style={{ background: '#FFFFFF33' }} className='my-3 border-0 px-2 py-2 text-white w-50' /><br />
                  <input type='email' placeholder='Your email' style={{ background: '#FFFFFF33' }} className='border-0 px-2 py-2 text-white w-50' />
                </div>
                <div className='col-lg-3 align-self-center'>
                  <div className='text-end'>
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



export default Home
