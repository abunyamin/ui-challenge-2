import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './PDFViewer.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(()=> {

    const pdfPages = document.querySelectorAll('.react-pdf__Page');

    Array.from(pdfPages).forEach((item, index) => {
      item.style.position = "absolute";
      item.setAttribute('style', `transform: translateX(${index == 0 ? 0 : 24 * index}px); z-index: ${5 - index}`)
      item.removeAttribute("height")
      item.removeAttribute("width")

      item.firstChild.removeAttribute('style')
    })

  },[numPages, pageNumber])

  return (
    <div className="pdfviewer">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}  style={{ width: "100vw" }}>

          {
    new Array(5).fill(0).map((_, index) => (
      <Page
      width={240}
      style={{transform: `scale(${1 - (index / 10)});`,
    maxWidth: '320px'}}
      renderAnnotationLayer={false}
      renderTextLayer={false}
      pageNumber={pageNumber + (index == 0 ? index : index + 1 )}
      key={index}
    />
    ))
}
        </Document>
        <div className="pdfviewer__button">
        <button className="pdfviewer__button--left" 
        disabled={pageNumber === 1}
        onClick={() => setPageNumber((p) => Math.max(1, p - 1))}>
          <BsArrowLeftShort />
        </button>
        <button className="pdfviewer__button--right" disabled={pageNumber === numPages}
        onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}>
          <BsArrowRightShort />
        </button>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFViewer;
