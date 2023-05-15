import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Grid from './components/Grid'
import Intro from './components/Intro'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Intro/>
      <main>
        <Grid/>
        <Testimonials/>
        <Gallery/>
      </main>
      <Footer/>
    </>
  )
}

export default App
