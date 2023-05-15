import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className="landing-wrapper d-flex flex-column align-items-center">
        <Header/>
        <h1 className="title my-5">WE ARE CREATIVES</h1>
        <img className="arrow" src="../images/icon-arrow-down.svg" alt="Arrow down." />
      </div>

    </>
  )
}

export default App
