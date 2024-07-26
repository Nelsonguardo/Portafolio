import React from 'react'

const Curriculum = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Curriculum</h1>
            <h2>Experiencia laboral</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cargo</th>
                        <th>Empresa</th>
                        <th>Fechas</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desarrollador Full Stack</td>
                        <td>CY de Colombia</td>
                        <td>Marzo 2023 - Junio 2024</td>
                        <td>
                            <ul>
                                <li>Desarrollo y mantenimiento de portal web para la gestión de la información y los
                                servicios logísticos.</li>
                                <li>Implantación de un módulo de citas para una gestión eficaz de la entrada de
                                vehículos.</li>
                                <li>Actualización y mejora continua de las funciones existentes.</li>
                                <li>Administración y optimización de bases de datos.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Programador Full Stack</td>
                        <td>Graffigna Comunicación Humana</td>
                        <td>Febrero 2023 - Marzo 2023</td>
                        <td>
                            <ul>
                                <li>Desarrollo de una página web para una clínica, enfocada en proporcionar información clara y accesible para los pacientes.</li>
                                <li>Desarrollo visual e interactivos de interfaces de usuario.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Desarrollador Full Stack</td>
                        <td>Atlantic Talent Services</td>
                        <td>Febrero 2021 - Enero 2023</td>
                        <td>
                            <ul>
                                <li>Colaboración estrecha con el equipo informático para la ejecución exitosa de proyectos.</li>
                                <li>Resolución eficiente de problemas relacionados con programas PHP.</li>
                                <li>Aseguramiento del correcto funcionamiento de procesos y la infraestructura web.</li>
                                <li>Desarrollo de scripts para optimizar sistemas y alcanzar objetivos de rendimiento.</li>
                                <li>Pruebas y desarrollo de software adaptado a las necesidades de los clientes.</li>
                                <li>Elaboración de documentación detallada para los productos desarrollados.</li>
                                <li>Utilización de depuradores de código fuente y adaptación de software según requerimientos específicos.</li>
                                <li>Entrega puntual y eficiente de productos dentro de plazos establecidos.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Soporte de Aplicaciones</td>
                        <td>CL SMA</td>
                        <td>Febrero 2020 - Marzo 2020</td>
                        <td> 
                            <ul>
                                <li> Gestión y administración de una plataforma universitaria, garantizando su funcionamiento óptimo para usuarios y administradores.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>Conocimientos</h2>
            <ul>
                <li>PHP</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>JSON</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>Git</li>
                <li>Jira</li>
            </ul>
            <h2>Educación</h2>
            <ul>
                <li>Ingeniero de Sistemas</li>
                <li>Tecnologo en Desarrollo de Software</li>
            </ul>
        </div>
    )
}

export default Curriculum
