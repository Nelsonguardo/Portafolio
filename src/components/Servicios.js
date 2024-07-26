import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-arrow slick-next" onClick={onClick}>&gt;</div>;
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-arrow slick-prev" onClick={onClick}>&lt;</div>;
};

const Servicios = () => {
    const servicios = [
        { title: "Desarrollo de API", description: "Creación de APIs robustas y personalizadas para facilitar la integración y la interoperabilidad entre tus sistemas y aplicaciones, garantizando una comunicación eficiente y segura." },
        { title: "Desarrollo de Aplicaciones Web Progresivas", description: "Construcción de aplicaciones web con características de aplicaciones nativas, brindando una experiencia de usuario excepcional y un rendimiento óptimo en todos los dispositivos." },
        { title: "Desarrollo de Microservicios", description: "Implementación de arquitecturas de microservicios personalizadas para sistemas altamente escalables y flexibles, garantizando una eficiencia y un rendimiento óptimos." },
        { title: "Desarrollo web", description: "Desarrollamos tu página web desde cero, adaptándonos a tus necesidades específicas y utilizando las últimas tecnologías para garantizar un sitio web rápido, seguro y completamente funcional." },
        { title: "Diseño Web  Profesional", description: "Creamos diseños web personalizados y atractivos, combinando creatividad y funcionalidad para proporcionar una experiencia de usuario excepcional y representar tu marca de manera efectiva." },
        { title: "Integraciones de Sistemas", description: "Integración de sistemas y aplicaciones de terceros para mejorar la funcionalidad" },
        { title: "Mantenimiento y Soporte", description: "Planes de mantenimiento continuo y soporte técnico para garantizar la operatividad del sitio" },
        { title: "Análisis de Datos y Métricas", description: "Recopilación y análisis detallado de datos para proporcionarte información valiosa sobre el comportamiento de tus usuarios, ayudándote a tomar decisiones estratégicas fundamentadas" },
        { title: "Automatización de Procesos", description: "Implementación de soluciones para automatizar tareas repetitivas y mejorar la eficiencia" },
        { title: "Consultoría Tecnológica", description: "Asesoramiento experto sobre tecnologías y arquitecturas adecuadas para proyectos web" },
        { title: "Optimización de Rendimiento", description: "Mejora del rendimiento del sitio web, velocidad de carga y optimización de recursos" },
        { title: "Posicionamiento Web", description: "Mejora del posicionamiento de tu sitio web en los motores de búsqueda, aumentando su visibilidad y atrayendo más tráfico orgánico a tu página." },
    ];

    // Ordenar los servicios alfabéticamente
    servicios.sort((a, b) => a.title.localeCompare(b.title));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div className='page'>
            <h1 className='heading'>Servicios</h1>
            <Slider {...settings}>
                {servicios.map((servicio, index) => (
                    <div key={index} className="service">
                        <h2>{servicio.title}</h2>
                        <p>{servicio.description}</p>
                    </div>
                ))}
            </Slider>
            <style>
                {`
                    .slick-next {
                        background-color: rgba(0, 0, 0, 0.1); /* Color de fondo al pasar el mouse */
                        color: black; /* Color del texto al pasar el mouse */
                    }
                    .slick-prev {
                        background-color: rgba(0, 0, 0, 0.1); /* Color de fondo al pasar el mouse */
                        color: black; /* Color del texto al pasar el mouse */

                    }
                    .slick-next:hover {
                        background-color: rgba(0, 0, 0, 0.1); /* Color de fondo al pasar el mouse */
                        color: black; /* Color del texto al pasar el mouse */
                    }
                    .slick-prev:hover {
                        background-color: rgba(0, 0, 0, 0.1); /* Color de fondo al pasar el mouse */
                        color: black; /* Color del texto al pasar el mouse */
                    }
                `}
            </style>
        </div>
    );
};

export default Servicios;
