import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <strong>Travel</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse.</p>

          <div className="social">
            <a href="#" aria-label='facebook' title='facebook'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href="#" aria-label='twitter' title='twitter'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href="#" aria-label='instagram' title='instagram'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href="#" aria-label='github' title='github'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>
        <div className="box">
          <strong>Links</strong>
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#trending">trending</a></li>
            <li><a href="#destinations">destinations</a></li>
            <li><a href="#testimonials">testimonials</a></li>
            <li><a href="#">book online</a></li>
          </ul>
        </div>

        <div className="box">
          <strong>Extra Links</strong>
          <ul>
            <li><a href="#search">find destinations</a></li>
            <li><a href="#explore">explore nearby</a></li>
            <li><a href="#subscribe">subscribe</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">temps of use</a></li>
          </ul>
        </div>

        <div className="box">
          <strong>Contact</strong>
          <span><i className='fas fa-map-marker-alt'></i>Nha Trang, VN</span>
          <span><i className='fas fa-envelope'></i>Example@gmail.com</span>
          <span><i className='fas fa-phone-square-alt'></i>034.94.15.872</span>
        </div>
      </div>
      <span className="copyright">DevNN VietNam 2023 - All Copyright Resvered</span>
    </footer>
  )
}

export default Footer