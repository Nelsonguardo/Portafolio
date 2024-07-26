import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Apellidos: '',
        Email: '',
        Mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { Nombre, Apellidos, Email, Mensaje } = formData;
        const body = `
            Nombre: ${Nombre}
            Apellidos: ${Apellidos}
            Email: ${Email}
            
            Mensaje:
            ${Mensaje}
        `;
        window.location.href = `mailto:guardonei4@gmail.com?subject=Contacto desde portafolio&body=${encodeURIComponent(body)}`;
        setFormData({
            Nombre: '',
            Apellidos: '',
            Email: '',
            Mensaje: ''
        });
    };

    return (
        <div className='page'>
            <h1 className='heading'>Contacto</h1>
            <form className='contact' onSubmit={handleSubmit}>
                <input type="text" name="Nombre" placeholder='Nombre' value={formData.Nombre} onChange={handleChange} />
                <input type="text" name="Apellidos" placeholder='Apellidos' value={formData.Apellidos} onChange={handleChange} />
                <input type="email" name="Email" placeholder='Email' value={formData.Email} onChange={handleChange} />
                <textarea name="Mensaje" placeholder='Motivo de contacto' value={formData.Mensaje} onChange={handleChange}></textarea>
                <input type="submit" value='Enviar' />
            </form>
        </div>
    );
};

export default Contacto;
