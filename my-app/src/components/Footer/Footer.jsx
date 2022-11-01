import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const Footer = () => {
  return (<footer>
    <div className='container-fluid footerCss'>
      <div className='container footer_contact'>
        <div className='footer_contact_reklam'>
          <a href="#">Reklam  yerləşdirin</a>
        </div>
        <div className='footer_contact_info'>

          <a href="#"><i class="ri-facebook-fill"></i></a>

          <a href="#"><i class="ri-instagram-line"></i></a>


          <div className='contact_mail'>

            <span><i class="ri-mail-line"></i></span>
            <a href="#">turbo@turbo.az</a>
          </div>

          <div className='contact_call'>
            <p><i class="ri-phone-line"></i></p>
            <div>
              <a href="#">(012) 599-08-01</a><br />
              <a href="#">(012) 505-77-55</a>
            </div>
          </div>

        </div>

      </div>
      <hr />
      <div className="container kind_of_cars">
        <div className='kind_of_cars_part'>
          <a href="">BMW</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">LADA</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mercedes</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mazda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Hundai</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Honda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Nissan</a>
        </div>
      </div>
      <div className="container kind_of_cars">
        <div className='kind_of_cars_part'>
          <a href="">BMW</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">LADA</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mercedes</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mazda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Hundai</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Honda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Nissan</a>
        </div>
      </div>
      <div className="container kind_of_cars">
        <div className='kind_of_cars_part'>
          <a href="">BMW</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">LADA</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mercedes</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mazda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Hundai</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Honda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Nissan</a>
        </div>
      </div><div className="container kind_of_cars">
        <div className='kind_of_cars_part'>
          <a href="">BMW</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">LADA</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mercedes</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Mazda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Hundai</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Honda</a>
        </div>
        <div className='kind_of_cars_part'>
          <a href="">Nissan</a>
        </div>
      </div>
      
      <div className="container-fluid borderCssFooter">
        <div className="container footer_nav ">
          <a href="#" className='footer_nav_sections'>Qaydalar</a>
          <a href="#" className='footer_nav_sections'>Qanun</a>
          <a href="#" className='footer_nav_sections'>İstifadəçi razılaşması</a>
          <a href="#" className='footer_nav_sections'>Məxfilik siyasəti</a>
        </div>
      </div>
      <div className="container-fluid footer_bottom_bg">
        <div className='container footer_bottom'>
          <div className='footer_bottom_text'>
            <span>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</span>
          </div>

          <div className='footer_bottom_since'>
            <span>2006-2022 Digital Classifieds MMC. VÖEN: 1405631661</span>
            <a href="#">Mobil vesiyası</a>
          </div>
        </div>
      </div>
    </div>



  </footer>

  )
}

export default Footer;

