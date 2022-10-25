import React from 'react'
import CrearBombillo from './CrearBombillo'

const ContadorBombillos = ({count , aumentar , disminuir}) => {

    
    const disminuirMax = () => {
        let cont = count.length
        disminuir(count[cont-1])
    }

  return (
    <>
        {
          count.map((bomb , index) => (
            <CrearBombillo key={index}/>
          ))
        }
        <div className='contenedorBotones'>
            <button onClick={aumentar} >Aumentar</button>
            <button onClick={disminuirMax} >disminuir</button>
        </div>
    </>
  )
}

export default ContadorBombillos