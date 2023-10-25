import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import './assets/css/animate.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/slicknav.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
