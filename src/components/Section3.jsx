import React from 'react';
import './Section3.css';

const Section3 = ({viewportSize}) => {

  return (
    <>
      <div className="section-3">
        <div className="row-1">
          <div className="text--title">
            <span className="line-title--text"></span>
            <span className="text-title--main" 
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}>
              BUKU INI UNTUK SIAPA
            </span>
          </div>
          <div className="text--title-2"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}>
            <h2>Kata Pengantar Dari Penulis Buku</h2>
          </div>
          <div
            className="mini-profile"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="mini-profile__image">
              <img
                src="assets/profile.jpg"
                alt="profile"
              />
            </div>
            <div className="mini-profile__name">
              <span>Muhamad Nauval Azhar</span>
              <span>@mhdnauvalazhar</span>
            </div>
          </div>
        </div>
        <div className="row-2" 
            data-aos={viewportSize.width > 767 ? 'fade-left' : 'fade-up'} data-aos-delay="800">
          "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
          website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
          Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang
          lebih lama ketika membangun sebuah website dengan utility-first
          framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu
          harus memikirkan desain dan mengimplementasikan desain tersebut dari
          awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan
          oleh utility-first framework, sehingga kamu dapat mempertimbangkannya.
          Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai
          dari konsep, workflow, hingga membuat sebuah website responsive dengan
          TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu
          memahami cara mengoperasikan komputer, memahami HTML, memahami CSS,
          atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan
          ingin mempelajari hal baru untuk meningkatkan skill."
        </div>
      </div>
    </>
  );
};

export default Section3;
