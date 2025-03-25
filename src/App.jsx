import { useState } from 'react'
import MyFormulario from './components/Formulario/MyFormulario'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <MyFormulario/>

  )
}

export default App
