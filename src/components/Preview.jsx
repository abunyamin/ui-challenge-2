import React from 'react';
import PDFViewer from './PDFViewer'
import './Preview.css';

const Review = () => {

  return (
    <>
      <div className="preview" id="preview">
        <div className="preview__text">
          <div className="preview__text--title" data-aos="fade-up">
            PRATINJAU
          </div>
          <div
            className="preview__text--desc"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi
            di dalam buku ini
          </div>
          <div
            className="preview__text--desc-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
            detail halaman buku tersebut dan membaca isinya.
          </div>
        </div>
        <div className="preview__ebook">
          <div className="row-1" data-aos="fade-right">
            <img
              src="/assets/book-tailwind-3.png"
              alt="preview Image"
            />
          </div>
          <div className="row-2">
          <PDFViewer file="/file-book.pdf" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
