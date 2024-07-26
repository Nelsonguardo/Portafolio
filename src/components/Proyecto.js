import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/Trabajos.js'

const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        const proyecto = trabajos.filter(trabajo => trabajo.nombre === params.nombre);
        setProyecto(proyecto[0]);
    }, []);
    return (
        <div className='page page-work'>
            <div className='mask'>
            <img src={'/imagenes/' + proyecto.id + '.jpg'}/>
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target="_blank">Ir al sitio</a>
            
        </div>
    )
}

export default Proyecto
