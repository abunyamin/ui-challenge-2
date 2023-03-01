import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <Frame />
        <Frame2 />
        <div className="copyright">
          <span>COPYRIGHT © 2022 — DESIGN NAUVAL</span>
        </div>
      </div>
    </>
  );
};

const Frame = () => {
  return (
    <>
      <div className="footer__frame">
        <div className="row-1" data-aos="fade-right">
          <h2>Sudah siap meningkatkan skill kamu?</h2>
          <span>
            Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
            pertanyaan kamu di halaman bantuan.
          </span>
        </div>
        <div className="row-2" data-aos="fade-left">
          <button className="button__frame--help">Pusat bantuan</button>
          <button className="button__frame--regist">Mendaftar</button>
        </div>
      </div>
    </>
  );
};

const Frame2 = () => {
  const footerMenu = [
    { title: 'PRODUCTS', list: ['Coursses', 'Books', 'Freebies', 'Classes'] },
    {
      title: 'COMPANY',
      list: [
        'About Us',
        'Contact',
        'Pripacy Policy',
        'Terms of Services',
        'Help',
      ],
    },
    { title: 'GET IN TOUCH', list: ['Twitter', 'Facebook', 'Dribbble'] },
  ];
  return (
    <>
      <div className="footer__frame-2">
        <div className="row-1">
          <div className="footer__logo">M</div>
          <div className="footer__site-name">
            <span>The Malaka</span>
          </div>
          <span>
            Malaka adalah situs penyedia kursus ilmu komputer berbahasa
            Indonesia, mulai dari pengembangan hingga desain grafis.
          </span>
        </div>
        <div className="row-2">
          {footerMenu.map((item, index) => (
            <>
              <div className="footer__menu--item" key={index}>
                <h2>{item.title}</h2>
                <ul>
                  {item.list.map((itemList, count) => (
                    <>
                      <li key={count}>{itemList}</li>
                    </>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
