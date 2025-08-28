import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
// import Footer from './components/Footer'
// import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
