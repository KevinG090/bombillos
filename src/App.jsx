import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [accion, setAccion] = useState(false)
  const [description, setDescription] = useState("encender")
  
  const cambiarEstado = () => {
    if (accion == false) {
      setAccion(true)
      setDescription("apagar")
    }else if (accion == true) {
      setAccion(false)
      setDescription("encender")
    }
    
  }

  return (
    <div className="App">
      <div className='contenedorImagen'>
        {
          accion == false ? (
            <img src="/bombilloApagado.png" />
          ) : (
            <img src="/bombilloEncendido.png" />
          )
        }
        <button onClick={cambiarEstado}>{description}</button>
      </div>

    </div>
  )
}

export default App
