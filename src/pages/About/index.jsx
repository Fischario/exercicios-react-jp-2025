import { Link } from 'react-router-dom'
import './style.css'

export default function About() {
    return (
        <>
            <h1>Página Sobre</h1>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
        </>
    )
}