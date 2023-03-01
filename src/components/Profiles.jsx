import React from 'react';
import './Profiles.css';

const Profiles = () => {
  return (
    <>
      <div className="profiles" id="writer">
        <div className="row-1">
          <div className="profile__image" data-aos="flip-right">
            <div className="bg-profile__image"></div>
            <img
              src="/assets/profile.jpg"
              alt="Profile Images"
            />
            <div className="profile__image--name">
              <span>Muhamad Nauval Azhar</span>
              <span>@mhdnauvalazhar</span>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="text--title" data-aos="fade-up">
            <span className="line-title--text"></span>
            <span className="text-title--main">PENULIS BUKU</span>
          </div>
          <div className="text--title-2" data-aos="fade-up" data-aos-delay="600">
            <h2>
              Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
            </h2>
          </div>
          <div className="text--main" data-aos="fade-up" data-aos-delay="800">
            “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga
            kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar
            asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik
            untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web
            developer yang masuk kategori
            apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih
            senang fokus di front-end development, karena --menurut saya-- ini
            lebih sederhana saja. Di front-end development pada dasarnya hanya
            perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas
            ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu
            cocoknya pake jQuery, malah maksa pake React.”
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
