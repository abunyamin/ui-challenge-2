import React, { useRef, useEffect } from 'react';
import './Section4.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Section4 = ({viewportSize}) => {

  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.childNodes.forEach((node, index) => {
      node.dataset.aos = 'fade-right';
      node.dataset.aosDuration = 300 + (index + 1) * 150;
    });

  }, []);
  return (
    <>
      <div className="section-4" id="benefit">
        <div className="row-1">
          <div className="text--title" data-aos="fade-right">
            <span className="line-title--text"></span>
            <span className="text-title--main">MANFAAT BUKU</span>
          </div>
          <div
            className="text--title-2"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}
          >
            <h2>
              Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
            </h2>
          </div>
          <div
            className="text--main"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}
            data-aos-duration="300"
          >
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
            yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
            yang jenius." - J.K Rowling
          </div>
          <ul className="text--list" ref={listRef}>
            <li>
              <BsFillCheckCircleFill />
              <span>
                Buku ini cocok untuk seorang yang ingin memperdalam front-end
                development agar tidak hanya sekadar Bootstrap
              </span>
            </li>
            <li>
              <BsFillCheckCircleFill />
              <span>
                Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS
                langsung, agar meminimalisir terjadinya miskonsepsi
              </span>
            </li>
            <li>
              <BsFillCheckCircleFill />
              <span>
                Sangat ramah untuk back-end developer yang phobia terhadap CSS
                dan mudah dipahami bagi UI designer
              </span>
            </li>
            <li>
              <BsFillCheckCircleFill />
              <span>
                Studi kasus membangun sebuah website responsive dengan Tailwind
                CSS tanpa ngoding CSS
              </span>
            </li>
          </ul>
        </div>

        <div className="row-2">
          <div
            className="box__frame"
            data-aos="fade-left"
            data-aos-duartion="1000"
            data-aos-delay="800 "
          >
            <img
              src="assets/book-tailwind-2.png"
              alt="Image Section 4"
            />
            <div className="box__book-chapter">
              <div className="count">
                <span>19</span>
                <span>Jumlah Chapter</span>
              </div>
              <div className="count">
                <span>253</span>
                <span>Jumlah Halaman</span>
              </div>
              <div className="count">
                <span>60</span>
                <span>Hari Menulis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
