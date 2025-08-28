import './style.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <Header titulo="batata" />
      <main>
        <Link to='/about'>
          <button>Navegar para About</button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

export default Home