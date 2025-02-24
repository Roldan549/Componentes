import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './Components/Titulo'
import { Resultado } from './Components/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo titulo={"Creando titulo"}/>
      <Resultado numero1={7} numero2={9} />
    </>
  )
}

export default App
