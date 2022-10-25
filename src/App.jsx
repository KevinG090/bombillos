import { useEffect, useState } from 'react'
import './App.css'
import ContadorBombillos from './components/ContadorBombillos';
// import CrearBombillo from './components/CrearBombillo'

let contador = 2;
function App() {

  const [count, setCount] = useState([
    { identificador: "bomb1" },
    // {id : "bomb2"}
  ])


  const aumentar = () => {
    if (count.length < 10) {
      setCount([...count, { identificador: `bomb${contador}` }])
      contador = contador + 1
    } else {
      alert("No puedes aumentar mas de 5")
    }
  }
  const disminuir = (x) => {
    if (count.length > 1) {
      let dataDelete = count[count.length - 1]
      let result = count.filter(item => {
        if (item.identificador != dataDelete.identificador) {
          return item
        }
      })
      console.log(result)
      setCount(result)
    }
    else {
      alert("No puedes ")
    }
  }

  useEffect(() => {
    console.log("objetos " + count.length)
  }, [count])



  return (
    <div className="App">
      <div className='contenedorBombillos'>
        <ContadorBombillos count={count} aumentar={aumentar} disminuir={disminuir} />
      </div>
    </div>
  )
}

export default App
