import React from 'react';
import './Testimonial.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Testimonial = ({viewportSize}) => {

  return (
    <>
      <div className="testimoni">
        <div className="testimoni__text">
          <div className="testimoni__text--row-1">
            <div className="text--title" data-aos="fade-up">
              <span className="line-title--text"></span>
              <span className="text-title--main">TESTIMONIAL</span>
            </div>
            <div className="text--title-2">
              <h2 data-aos="fade-up">Apa kata orang-orang yang membaca buku ini?</h2>
            </div>
          </div>
          <div className="text--main" data-aos="fade-up" data-aos-delay="400">
            Kalo seandainya kamu belum percaya dengan buku ini maka tidak
            apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin
            beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku
            ini.
          </div>
        </div>   
        <Cards viewportSize={viewportSize} />
      </div>
    </>
  );
};

const Cards = ({viewportSize}) => {

  const cards = [
    {
      name: 'Ahmad Saugi',
      position: 'Mahasiswa',
      caption:
        '“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”',
      image:
        '/assets/profile-1.webp',
    },
    {
      name: 'Dedik Sugiharto',
      position: 'Front-end Engineer',
      caption:
        '“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”',
      image:
        '/assets/profile-2.webp',
    },
    {
      name: 'Lutfi Hanafiah Ramadhan',
      position: 'IT Support',
      caption:
        '“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”',
      image:
        '/assets/profile-3.webp',
    },
    {
      name: 'Andi',
      position: 'Front-End Developer',
      caption:
        'Saya baru saja mempelajari Tailwind CSS dan saya harus mengatakan buku ini sangat membantu! Penjelasannya sangat jelas dan terperinci dan saya bisa langsung mengaplikasikannya pada proyek-proyek saya. Terima kasih banyak!',
      image:
        '/assets/profile-4.webp',
    },
    {
      name: 'Sandra',
      position: 'Web Designer',
      caption:
        'Buku Tailwind CSS ini sangat membantu dalam mempermudah proses styling website. Saya suka bagaimana buku ini membahas konsep dasar terlebih dahulu sebelum membahas topik yang lebih kompleks. Sangat merekomendasikan buku ini!',
      image:
        '/assets/profile-5.webp',
    },
    {
      name: 'Farhan',
      position: 'Full-Stack Developer',
      caption:
        'Sebagai seorang full-stack developer, saya merasa Tailwind CSS sangat membantu dalam mempercepat proses pembuatan antarmuka pengguna. Buku ini memberikan panduan yang sangat jelas dan terperinci sehingga mudah dipahami. Terima kasih atas buku yang luar biasa!',
      image:
        '/assets/profile-6.webp',
    },
  ];
  
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={
          viewportSize.width >= 900
            ? 3
            : viewportSize.width <= 678
            ? 1
            : 2
        }
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {cards.map((item, index) => (
          <>
            <SwiperSlide key={index}>
              <div className="testimoni__card">
                <div className="testimoni__caption">{item.caption}</div>
                <div className="testimoni__profile">
                  <img src={item.image} alt={item.name} />
                  <div className="testimoni__profile--name">
                    <span>{item.name}</span>
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
        <CustomNav />
      </Swiper>
    </>
  );
};

const CustomNav = () => {
  const swiper = useSwiper();

  const handleNext = () => {
    swiper.slideNext();
  };

  const handlePrev = () => {
    swiper.slidePrev();
  };

  return (
    <>
      <div className="testimoni__button">
        <button className="testimoni__button--left" onClick={handlePrev}>
          <BsArrowLeftShort />
        </button>
        <button className="testimoni__button--right" onClick={handleNext}>
          <BsArrowRightShort />
        </button>
      </div>
    </>
  );
};

export default Testimonial;
