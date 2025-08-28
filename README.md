# Exercicios React Jovem Programador 2025

No começo o App.jsx fica tipo assim:

import './App.css'

function App() {  

  return (  
    <>  
    </>  
  )  
}  

export default App

---

### TERNÁRIO: 

###### É tipo um if else curtinho pra propriedades que serão passadas

tem tal coisa ? (se tiver faz isso) : (se não faz isso)

> propriedade ? propriedade : 'nada'

---

O export pode aparecer antes do function no começo:

> export default function tal() {

Pode também ser passado depois no final:

> export default tal

--

### REACT ROUTER DOM

> npm i react-router-dom

botar <BrowserRouter></BrowserRouter> na main.jsx:

import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'  
import './index.css'  
import App from './App.jsx'  
import { BrowserRouter } from 'react-router-dom'  

createRoot(document.getElementById('root')).render(  
  <StrictMode>  
    <BrowserRouter>  
      <App />  
    </BrowserRouter>  
  </StrictMode>,  
)  
