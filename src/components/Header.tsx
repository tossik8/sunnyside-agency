import "../css/Header.css"

const Header = () => {
  return (
    <header className="d-flex px-5 py-4 justify-content-between align-items-center header">
        <img src="../../images/logo.svg" alt="Sunnyside logo." />
        <nav className="main-nav">
            <ul className="d-flex justify-content-between align-items-center ps-0 mb-0">
                <li className="list-group-item"><a className="text-decoration-none link" href="#about">About</a></li>
                <li className="list-group-item"><a className="text-decoration-none link" href="#services">Services</a></li>
                <li className="list-group-item"><a className="text-decoration-none link" href="#projects">Projects</a></li>
                <li className="list-group-item"><button className="contact-button">CONTACT</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
