import React from 'react';
import './Hero.css';
import { BsDownload, BsArrowRightCircle } from 'react-icons/bs';

const Hero = ({viewportSize}) => {

  return (
    <>
      <div className="hero grid-12">
        <div className="row-1">
          <div
            className="hero-title"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}
          >
            Sebuah framework CSS untuk developer yang memiliki phobia terhadap
            CSS
          </div>
          <div
            className="hero-description"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}
            data-aos-duration="500"
          >
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
            diakhiri dengan membangun sebuah website yang responsive dengan
            Tailwind CSS.
          </div>
          <div className="hero-button">
            <button className="buy-button" data-aos="zoom-in">
              Beli Sekarang <BsArrowRightCircle />
            </button>
            <div className="sold" data-aos="zoom-in" data-aos-duration="1000">
              <div className="icon-download">
                <BsDownload />
              </div>
              <div className="sold-main">
                <div className="sold-text">SUDAH TERJUAL</div>
                <div className="sold-count">501,234+</div>
              </div>
            </div>
          </div>
          <div className="hero-tech">
            <div className="hero-tech--title">
              <span className="line-title"></span>
              <span className="tech-title">TEKNOLOGI YANG DIGUNAKAN</span>
            </div>
            <div className="tech-list">
              <div className="image-item">
                <img
                  src="assets/icon-html.png"
                  alt="HTML ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-css.png"
                  alt="CSS ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-firefox.png"
                  alt="FIFEFOX ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-sublime.png"
                  alt="SUBLIME ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-terminal.png"
                  alt="TERMINAL ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-js.png"
                  alt="NODEJS ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-cat.png"
                  alt="CAT ICON"
                />
              </div>
              <div className="image-item">
                <img
                  src="assets/icon-npm.png"
                  alt="NPM ICON"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <img
            src="assets/hero.png"
            alt="Hero Images"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
