import './style.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Review from './components/Preview';
import Features from './components/Features';
import Profiles from './components/Profiles';
import Testimonial from './components/Testimonial';
import Offer from './components/Offer';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    AOS.init({ once: false });

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header viewportSize={viewportSize} />
      <Section2 viewportSize={viewportSize} />
      <Section3 viewportSize={viewportSize} />
      <Section4 viewportSize={viewportSize} />
      <Section5 viewportSize={viewportSize} />
      <Review viewportSize={viewportSize} />
      <Features viewportSize={viewportSize} />
      <Profiles />
      <Testimonial viewportSize={viewportSize}/>
      <Offer />
      <Footer />
    </>
  );
}
