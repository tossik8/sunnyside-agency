import { useRef } from "react";
import "../css/Header.css"

const Header = () => {
  const navTag = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const setNavigation = () => {
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
    }
  }

  window.onload = () => setNavigation();
  window.onresize = () => setNavigation();

  return (
    <header className="d-flex px-5 py-4 justify-content-between align-items-center header">
        <img src="../../images/logo.svg" alt="Sunnyside logo." />
        <nav ref={navTag} className="main-nav inactive">
            <ul className="d-flex justify-content-between align-items-center ps-0 mb-0">
                <li className="list-group-item"><a className="text-decoration-none link" href="#about">About</a></li>
                <li className="list-group-item"><a className="text-decoration-none link" href="#services">Services</a></li>
                <li className="list-group-item"><a className="text-decoration-none link" href="#projects">Projects</a></li>
                <li className="list-group-item"><button className="contact-button">CONTACT</button></li>
            </ul>
        </nav>
        <button ref={menuButton} className="menu-button px-0 inactive"><img src="../../images/icon-hamburger.svg" alt="Menu icon."/></button>
    </header>
  )
}

export default Header
