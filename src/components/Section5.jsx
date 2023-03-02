import React from 'react';
import './Section5.css';
import {
  BsArrowRightShort,
  BsLayoutTextWindowReverse,
  BsChatLeft,
} from 'react-icons/bs';

const Section5 = ({viewportSize}) => {

  return (
    <>
      <div className="section-5 grid-12">
        <div className="row-1">
          <img
            src="assets/ui.png"
            alt="Image Section 5"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}
          />
        </div>
        <div className="row-2">
          <div
            className="text--title"
            data-aos={viewportSize.width > 767 ? 'fade-left' : 'fade-up'}
          >
            <span className="line-title--text"></span>
            <span className="text-title--main">SELAIN ITU</span>
          </div>
          <div className="text--title-2">
            <h2
              data-aos={viewportSize.width > 767 ? 'fade-left' : 'fade-up'}
            >
              Buku dengan studi kasus nyata, juga komunitas yang ramah
            </h2>
          </div>
          <div
            className="text--main"
            data-aos={viewportSize.width > 767 ? 'fade-left' : 'fade-up'}
          >
            Buku ini diakhiri dengan membangun website yang responsive dengan
            Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
            untuk bertanya ketika mengalami kesulitan.
          </div>

          <div className="section-5__card" data-aos="zoom-in">
            <div className="icon-1">
              <BsLayoutTextWindowReverse />
            </div>
            <div className="section-5__card--text">
              <span>Live Demo Project</span>
              <span>
                Lihat live demo project yang akan kamu buat di akhir buku ini.
              </span>
            </div>
            <div className="icon-2" data-aos="zoom-in" data-aos-delay="500">
              <BsArrowRightShort />
            </div>
          </div>

          <div className="section-5__card" data-aos="zoom-in">
            <div className="icon-1">
              <BsChatLeft />
            </div>
            <div className="section-5__card--text">
              <span>Dukungan Komunitas</span>
              <span>
                Sebuah server Discord berisi teman-teman yang akan membantu
                kamu.
              </span>
            </div>
            <div className="icon-2" data-aos="zoom-in" data-aos-delay="500">
              <BsArrowRightShort />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
