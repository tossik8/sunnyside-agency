import Header from "./Header"
import "../css/Intro.css"

const Intro = () => {
  return (
    <div className="landing-wrapper d-flex flex-column align-items-center">
        <Header/>
        <h1 className="title text-center">WE ARE CREATIVES</h1>
        <img className="arrow" src="../images/icon-arrow-down.svg" alt="Arrow down." />
    </div>
  )
}

export default Intro
