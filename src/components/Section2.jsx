import React, { useRef, useEffect, useState } from 'react';
import './Section2.css';

const Section2 = ({viewportSize}) => {

  return (
    <>
      <div className="section-2" id="forwho">
        <div className="text-1">
          <div
            className="row-1"
            data-aos={viewportSize.width > 767 ? 'fade-right' : 'fade-up'}
            data-duration="800"
          >
            <div className="text--title">
              <span className="line-title--text"></span>
              <span className="text--title">BUKU INI UNTUK SIAPA</span>
            </div>
            <div className="section-2__description">
              Buku yang cocok dibaca untuk Front-end dan Back-end, bahkan UI
              designer!
            </div>
          </div>
          <div
            className="row-2"
            data-aos={viewportSize.width > 767 ? 'fade-left' : 'fade-up'}
            data-duration="1000"
          >
            Buku ini bukan hanya untuk front-end developer yang ingin
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
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
      img: '/assets/code-1.png',
      title: 'Utility-First Framework',
      desc: 'Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.',
    },
    {
      img: '/assets/code-2.png',
      title: 'Tailwind JIT Engine',
      desc: 'JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.',
    },
    {
      img: '/assets/code-3.png',
      title: 'Unopinionated-Framework',
      desc: 'Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.',
    },
  ];

  const cardRef = useRef(null);

  useEffect(() => {

    const cardElement = document.querySelectorAll('.card');

    viewportSize.width > 767 && Array.from(cardElement).forEach((item, index) => {
      item.dataset.aosDelay = index == 0 ? 0 : 400 * index;
    });

  }, []);

  return (
    <>
      <div className="grid-12 cards">
        {cards.map((item, index) => (
          <div className="card" key={index} ref={cardRef} data-aos="zoom-in">
            <div className="card__image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card__title">{item.title}</div>
            <div className="card__description">{item.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section2;
