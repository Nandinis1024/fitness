import './App.css'
import './index.css'
import Features from './components/Features'
import Course from './components/Course'
import My from './components/My'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import { Spotlight } from './components/ui/spotlight'
import Intro from './components/Intro'
import Bottombar from './components/Bottombar'
import { useEffect } from 'react'

function App() {

  const count = async () => {
    await fetch('http://ec2-52-66-249-248.ap-south-1.compute.amazonaws.com:3000/visitor', {
      method: 'POST'
    })
  }

  useEffect(() => count(), [])

  return (
    <div className="bg-background dark" style={{
      background: `
      linear-gradient(90deg, black calc(22px - 1px), transparent 100%) center / 22px 22px,
      linear-gradient(black calc(22px - 1px), transparent 100%) center / 22px 22px,
      white
      `
  }}>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 fixed"
        fill="white" />
      <Intro />
      <My />
      <Features />
      <Course />
      <Testimonials />
      <Footer />
      <Bottombar />
    </div>
  )
}

export default App
