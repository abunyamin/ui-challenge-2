import React from 'react';
import './Offer.css';
import { BsDownload, BsArrowRightCircle } from 'react-icons/bs';

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offer__text">
          <div className="offer__text--title" data-aos="fade-up">PRATINJAU</div>
          <div className="offer__text--desc" data-aos="fade-up" data-aos-delay="400">
            Anda ingin segera memesan buku ini?
          </div>
          <div className="offer__text--desc-2" data-aos="fade-up" data-aos-delay="600">
            Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
          </div>
        </div>
        <div className="offer-button">
          <div className="sold" data-aos="fade-right">
            <div className="icon-download">
              <BsDownload />
            </div>
            <div className="sold-main">
              <div className="sold-text">SUDAH TERJUAL</div>
              <div className="sold-count">501,234+</div>
            </div>
          </div>
          <button className="buy-button" data-aos="fade-left">
            Beli Sekarang <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default Offer;
