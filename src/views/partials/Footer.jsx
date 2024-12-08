import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <section
  className="bg-image-footer w-100"
  style={{ paddingTop: "70px", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "700px" }}
>
  <div className="container">
    {/* First Row */}
    <div className="row justify-content-center align-items-end pb-5">
      <div className="col-lg-8">
        <ul className='p-0' style={{ listStyle: "none" }}>
          <li className="mb-3">
            <i
              className="fa fa-phone banner_text_color"
              style={{ fontSize: "19px" }}
              aria-hidden="true"
            ></i>
            <span className="ms-2">
              <a
                href="tel:+1 123 456 789"
                className="text-white"
                style={{ textDecoration: "none", fontSize: "19px" }}
              >
                +1 123 456 789
              </a>
            </span>
          </li>
          <li>
            <i
              className="fa fa-location banner_text_color"
              style={{ fontSize: "19px" }}
              aria-hidden="true"
            ></i>
            <span className="text-white ms-2">
              1887 Casino Conquest San Jose, Ca 95110 Abcdefghijklmnopqrstuvwxyz.
            </span>
          </li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="text-end mb-5">
          <button className="text-white btn_background_color px-4 py-2" style={{backgroundColor:'transparent',border:'2px solid white'}}>
            PRIVACY POLICY
          </button>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="row">
      <div className="col-lg-2">
        <Link>
          <img src="/public/logo.png" alt="icon" />
        </Link>
      </div>
      <div className="col-lg-7">
        <p className="text-white">
          © 2022 Casino Conquest. All Rights Reserved
          <br />
          21+ Please gamble responsibly | 1-800-GAMBLER | www.problemgambling.ca.gov
          <br />
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
          Service apply.
        </p>
      </div>
      <div className='col-lg-3'>
      <ul className='p-0 d-flex' style={{ listStyle: "none" }}>
          <li className="mb-3">
            <img src='/public/f.png' className='mx-2' />
          </li>
          <li className="mb-3">
            <img src='/public/i.png' className='mx-2' />
          </li>
          <li className="mb-3">
            <img src='/public/y.png' className='mx-2' />
          </li>
          <li className="mb-3">
            <img src='/public/l.png' className='mx-2' />
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer
