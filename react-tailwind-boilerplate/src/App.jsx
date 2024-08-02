import './App.css'
import './index.css'
import Features from './components/Features'
import Course from './components/Course'
import My from './components/My'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-background dark">
      <My />
      <Features />
      <Course />
      <Footer />
    </div>
  )
}

export default App
