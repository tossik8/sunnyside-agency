import { useEffect, useRef, useState } from "react";
import "../css/Header.css"

const Header = () => {
  const navTag = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const setNavigation = () : void => {
    if(document.documentElement.clientWidth < 710){
      navTag.current!.classList.remove("active");
      navTag.current!.classList.add("inactive");
      menuButton.current!.classList.remove("inactive");
      menuButton.current!.classList.add("active");
    }
    else{
      navTag.current!.classList.remove("inactive");
      navTag.current!.classList.add("active");
      menuButton.current!.classList.remove("active");
      menuButton.current!.classList.add("inactive");
      if(isOpen){
        document.getElementsByClassName("menu")[0].classList.add("inactive");
        document.getElementsByClassName("menu")[0].classList.remove("active");
        menuButton.current!.style.opacity = "1";
        setIsOpen(false);
      }
    }
  }
  useEffect(() => {
    setNavigation();
  }, []);
  window.onresize = () => setNavigation();

  const handleClick = () => {
    if(!isOpen){
      document.getElementsByClassName("menu")[0].classList.add("active");
      document.getElementsByClassName("menu")[0].classList.remove("inactive");
      menuButton.current!.style.opacity = "0.4";
      setIsOpen(true);
    }
    else{
      document.getElementsByClassName("menu")[0].classList.remove("active");
      document.getElementsByClassName("menu")[0].classList.add("inactive");
      menuButton.current!.style.opacity = "1";
      setIsOpen(false);
    }
  }

  return (
    <header className="d-flex flex-wrap px-4 px-sm-5 py-4 justify-content-between align-items-sm-center header">
        <img src="/logo.svg" alt="Sunnyside logo." />
        <nav ref={navTag} className="main-nav inactive">
            <ul className="d-flex justify-content-between align-items-center ps-0 mb-0">
                <li className="list-group-item"><a className="text-decoration-none link" href="#about">About</a></li>
                <li className="list-group-item"><a className="text-decoration-none link" href="#services">Services</a></li>
                <li className="list-group-item"><a className="text-decoration-none link" href="#projects">Projects</a></li>
                <li className="list-group-item"><button className="contact-button">CONTACT</button></li>
            </ul>
        </nav>
        <button onClick={handleClick} ref={menuButton} className="menu-button p-0 pb-1 inactive"><img src="/icon-hamburger.svg" alt="Menu icon."/></button>
        <div className="menu mt-5 py-4 inactive">
          <ul className="d-flex flex-column justify-content-between align-items-center ps-0 mb-0">
            <li className="list-group-item mb-3"><a className="text-decoration-none link menu-link" href="#about">About</a></li>
            <li className="list-group-item mb-3"><a className="text-decoration-none link menu-link" href="#services">Services</a></li>
            <li className="list-group-item mb-3"><a className="text-decoration-none link menu-link" href="#projects">Projects</a></li>
            <li className="list-group-item"><button className="contact-button contact-menu-button">CONTACT</button></li>
          </ul>
        </div>
    </header>
  )
}

export default Header
