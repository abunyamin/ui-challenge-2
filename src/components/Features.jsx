import React, { useEffect } from 'react';
import './Features.css';
import { BsXCircleFill, BsCheckCircleFill } from 'react-icons/bs'

const Features = ({viewportSize}) => {
  const features = [
    {
      name: 'Buku Digital',
      price: '100000',
      features: [
        { name: 'Buku lengkap', on: true },
        { name: 'Akses secara digital', on: true },
        { name: 'Buku fisik', on: false },
        { name: 'Mendapat pembaruan', on: true },
        { name: 'Konsultasi', on: true },
        { name: 'Dapat diunduh', on: true },
      ],
    },
    {
      name: 'Buku Fisik',
      price: '185000',
      features: [
        { name: 'Buku lengkap', on: true },
        { name: 'Akses secara digital', on: false },
        { name: 'Buku fisik', on: true },
        { name: 'Mendapat pembaruan', on: false },
        { name: 'Konsultasi', on: true },
        { name: 'Dapat diunduh', on: true },
      ],
    },
    {
      name: 'Buku Digital + Fisik',
      price: '250000',
      features: [
        { name: 'Buku lengkap', on: true },
        { name: 'Akses secara digital', on: true },
        { name: 'Buku fisik', on: true },
        { name: 'Mendapat pembaruan', on: true },
        { name: 'Konsultasi', on: true },
        { name: 'Dapat diunduh', on: true },
      ],
    },
  ];

  return (
    <>
      <div className="features">
        <div className="feature__text">
          <div className="feature__text--title" data-aos="fade-up">HARGA BUKU</div>
          <div className="feature__text--desc" data-aos="fade-up" data-aos-duration="400">
            Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
            perangkat kamu
          </div>
          <div className="feature__text--desc-2" data-aos-duration="600">
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
            Hak cipta dilindungi undang-undang.
          </div>
        </div>
        <Cards cards={features} viewportSize={viewportSize} />
        <div className="features__note" data-aos="zoom-in">
    *Buku digital akan dikirimkan ke alamat email kamu<br />
    *Buku fisik dikirim 7 hari setelah pemesanan
    </div>
      </div>
    </>
  );
};

const Cards = ({cards, viewportSize}) => {

  useEffect(()=> {

    const cardElement = document.querySelectorAll('.features__card')

    // If the viewport width is greater 677, each element have a dataset attribute 'data-aos-delay' for delay animation
    viewportSize.width > 677 && Array.from(cardElement).forEach((item, index) => {
      item.dataset.aosDelay = 400 * (index + 1);
    });

  },[])

  return(<>
  <div className="features__cards">
    {cards.map((item, index) => (<>
    <div className="features__card" key={index} data-aos="flip-left">
    <div className="features__cards--title">{item.name}</div>
    <div className="features__cards--price">Rp{item.price}</div>
    <ul className="features__cards--list">
      {item.features.map((feature, count) => <li key={count}>{feature.on ? <BsCheckCircleFill className="check--true" /> : <BsXCircleFill className="check--false" />  } <span>{feature.name}</span></li>)}
    </ul>
    <button className="features__button">Beli Sekarang</button>
    </div>
    </>))}
  </div>
  </>)
}

export default Features;
