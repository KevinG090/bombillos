import React from 'react'
import CrearBombillo from './CrearBombillo'

const ContadorBombillos = ({count , aumentar , disminuir}) => {

    
      const disminuirMax = () => {
        let cont = count.length
        disminuir(count[cont-1])
    
        // console.log(count.pop())
        // console.log(count)
        // window.location.reload(true)
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
        {/* <input type="submit" value="disminuir" onClick={disminuir} /> */}
      </div>
    </>
  )
}

export default ContadorBombillos