import React, { useState, useRef, useEffect } from 'react';
import Hero from './Hero';
import './Header.css';
import { BsList, BsFillCaretUpFill, BsFillPeopleFill, BsFillXDiamondFill, BsEyeFill, BsPencilFill} from 'react-icons/bs';

const Header = ({viewportSize}) => {
  const [bar, setBar] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);
  const headerRef = useRef(null)

  const barHeaderRef = useRef(null);

  const navBarHandle = () => {
    setBar(!bar);
    barHeaderRef.current.style = `display: ${!bar ? 'flex' : 'none'}`;
  };

  useEffect(()=> {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setFixedHeader(true);
        headerRef.current?.classList.add('fixed')
      }else{
        setFixedHeader(false);
        headerRef.current?.classList.remove('fixed')
      }
    };

    window.addEventListener('scroll', handleScroll);

    window.addEventListener("hashchange", function() {

      const listMenu = document.querySelectorAll('.menu ul li')
    
      Array.from(listMenu).forEach(item => {
        if(item.dataset.for == window.location.hash){
          item.classList.add("active");
        }else{
          item.classList.contains("active") && item.classList.remove("active");
        }
      })
    })
    
    window.dispatchEvent(new Event("hashchange"));

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  
  },[fixedHeader])

  const menuList = [
    {name: 'Top', fragmen: '#header', icon: <BsFillCaretUpFill className='icon__list'/>},
    {name: 'For Everyone', fragmen: '#forwho', icon: <BsFillPeopleFill className='icon__list'/>},
    {name: 'Benefit', fragmen: '#benefit', icon: <BsFillXDiamondFill className='icon__list'/>},
    {name: 'Preview', fragmen: '#preview', icon: <BsEyeFill className='icon__list'/>},
    {name: 'Penulis', fragmen: '#writer', icon: <BsPencilFill className='icon__list'/>},
  ]

  return (
    <>
      <div className="main-header" id="header">
        <div className="header" ref={headerRef}>
      <div className="bar__header" ref={barHeaderRef}>
      <div className="logo">
            <div className="logo-icon">M</div>
            <span>The Malaka</span>
          </div>
          <div className="menu">
            <ul>
              {menuList.map((item, index) => <li key={index} data-for={item.fragmen}>{item.icon}
                <a href={item.fragmen}>{item.name}</a>
              </li>)}
            </ul>
          </div>
      </div>
          <div className="nav-right">
            <button className="button-download">Download</button>
          </div>
          <div className="nav-bar" onClick={navBarHandle}>
            <BsList />
          </div>
        </div>
        <Hero viewportSize={viewportSize} />
      </div>
    </>
  );
};

export default Header;
