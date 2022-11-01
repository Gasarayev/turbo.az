import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

const Header = () => {
  return <header className='header'>

    {/* -------header top------ */}
    <div className='head'>
      <div className='container-fluid header_top_bg'>
        <div className='container header_top '>

          <div className='header_top_left d-flex justify-content-between align-item-center'>
            <a target="_blank" href="https://tap.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*11dzb5w*_ga*ODQwMTI1OTMxLjE2NjY5NTc4NDM.*_ga_68B6PJZXYD*MTY2Njk1Nzg0My4xLjEuMTY2Njk1ODI0MS41OC4wLjA.">Tap.az</a>
            <a target="_blank" href="https://bina.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*11dzb5w*_ga*ODQwMTI1OTMxLjE2NjY5NTc4NDM.*_ga_68B6PJZXYD*MTY2Njk1Nzg0My4xLjEuMTY2Njk1ODI0MS41OC4wLjA.">Bina.az</a>
            <a target="_blank" href="https://boss.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*1pzr22g*_ga*ODQwMTI1OTMxLjE2NjY5NTc4NDM.*_ga_68B6PJZXYD*MTY2Njk1Nzg0My4xLjEuMTY2Njk1ODI0MS41OC4wLjA.">Boss.az</a>
          </div>


          <div className='header_top_right d-flex display-row justify-content-end align-item-center'>
            <div className='header_top_right_phone'>
              <span className='header_top_right_title'>Dəstək:</span>
              <span className='header_top_right_list'>
                <span>
                  <a data-register-call="true" href="tel:(012) 599-08-01">  (012) 599-08-01</a>
                </span>
                ;
                <span>
                  <a data-register-call="true" href="tel:(012) 505-77-55">   (012) 505-77-55</a>
                </span>
              </span>
            </div>
            <div className='commonCss help d-flex justify-content-center'>
              <a href=""> Yardım </a>
            </div>
            <div className='commonCss lang d-flex justify-content-center'>
              <span>RU</span>
            </div>
            <div className='commonCss chosen d-flex justify-content-center'>
              <span><i class="ri-heart-fill"></i></span>
              <span>Seçilmişlər</span>
            </div>
            <div className='commonCss login d-flex justify-content-center'>
              <a href="#" className='d-flex justify-content-center'><i class="ri-map-pin-user-fill"></i> <span> Giriş </span></a>

            </div>

          </div>

        </div>
      </div>
    {/*-------- header-body/navbar------- */}
      <div className='container-fluid header_body_bg'>
        <div className="container header-body">
          <div className='header-navbar d-flex align-items-md-center'>
            <a className='logo' href="">TURBO.AZ</a>
            <a className='navbar-section' href="#">Bütün elanlar </a>
            <a className='navbar-section' href="#">Avtosalonlar </a>

            <div className='drop-down-menu'>
              <a href="#">Ehtiyyat hissələri və aksesuarlar </a>
            </div>
          </div>
          <div className='header-body-btn'>
            <a href=""> <i class="ri-add-circle-line"></i> Yeni elan </a>
          </div>
        </div>
      </div>

    </div >


  </header >
}

export default Header;
