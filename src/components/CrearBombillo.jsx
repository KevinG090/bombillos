
import { useState } from 'react'

const CrearBombillo = () => {

    const [accion, setAccion] = useState(false)
    const [description, setDescription] = useState("encender")

    const cambiarEstado = () => {
        if (accion == false) {
            setAccion(true)
            setDescription("apagar")
        } else if (accion == true) {
            setAccion(false)
            setDescription("encender")
        }
    }

    return (
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
    )
}

export default CrearBombillo