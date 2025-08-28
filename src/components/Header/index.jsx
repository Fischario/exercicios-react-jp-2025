import './style.css'

function Header({ titulo }) {
    return (
        <header>
            <h1>{ titulo ? titulo : 'vixe rapaiz tá vazio' }</h1>
        </header>
    )
}

export default Header