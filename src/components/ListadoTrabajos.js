import React from 'react'
import { trabajos } from '../data/Trabajos.js'
import { Link } from 'react-router-dom'

const ListadoTrabajos = ({limite}) => {
    return (
        <div>
            <section className='works'>
                {trabajos.slice(0, limite).map(trabajo => (
                    <article className='work-item' key={trabajo.id}>
                        <div className='mask'>
                            <img src={"/imagenes/" + trabajo.id + ".jpg"} />
                        </div>
                        <h2><Link to={`/proyecto/${trabajo.nombre}`}>{trabajo.nombre}</Link></h2>
                        <span>{trabajo.tecnologias}</span>
                        <h3>{trabajo.descripcion}</h3>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default ListadoTrabajos
