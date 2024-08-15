import './App.css'
import './index.css'
import Features from './components/Features'
import Course from './components/Course'
import My from './components/My'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import { Spotlight } from './components/ui/spotlight'

function App() {

  return (
    <div className="bg-background dark">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 fixed"
        fill="white" />
      <My />
      <Features />
      <Course />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
