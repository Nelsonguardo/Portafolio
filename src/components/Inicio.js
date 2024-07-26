import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
    return (
        <div className='home'>
            <h1>
                Hola, soy Nelson Guardo y soy <strong>desarrollador Full Stack</strong>,
                y ofrezco mis servicios de <strong>programacion</strong> y <strong>desarrollo </strong>
                en todo tipo de proyectos web.
            </h1>

            <h2 className='title'>
                Te ayudo a crear tu sitio o aplicacion web, tener más
                visibilidad y relevancia en tu negocio. <Link to='/contacto'>Contactame</Link>
            </h2>

            <section className='lasts-works'>
                <h2 className='heading'>Alguno de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos de programacion</p>

                <ListadoTrabajos limite={2}/>
            </section>
        </div>
    )
}

export default Inicio
