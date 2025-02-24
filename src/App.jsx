import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './Components/Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo titulo={"Creando titulo"}/>
    </>
  )
}

export default App
