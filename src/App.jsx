import { useState } from 'react'
import './App.css'
import { Resultado } from './Components/Resultado'
import { TituloAlternativo } from './Components/TituloAlternativo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TituloAlternativo condicion={false}/>
      <Resultado numero1={8} numero2={10} />

    </>
  )
}

export default App
