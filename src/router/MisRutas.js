import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Contacto from '../components/Contacto'
import Servicios from '../components/Servicios'
import Portafolio from '../components/Portafolio'
import Curriculum from '../components/Curriculum'
import HeaderNav from '../components/layaout/HeaderNav'
import Footer from '../components/layaout/Footer'
import Proyecto from '../components/Proyecto'


const MisRutas = () => {
    return (
        <BrowserRouter>

            <HeaderNav />

            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio' />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/proyecto/:nombre' element={<Proyecto />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Footer />

        </BrowserRouter>
    )
}

export default MisRutas
