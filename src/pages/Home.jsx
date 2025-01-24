import React, { useState, useEffect, useRef } from 'react';
import { fetchServicios } from '../services/ApiCall';
import ServicioItem from '../components/ServiceItem';
import PropTypes from 'prop-types';
import WelcomeCarousel from '../components/WelcomeCarousel';

const Home = () => {
    const [servicios, setServicios] = useState([]);
    const serviciosRef = useRef(null);
    const infoRef = useRef(null);
  
    const scrollToSection = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    useEffect(() => {
      const obtenerServicios = async () => {
        const data = await fetchServicios();
        setServicios(data);
      };
  
      obtenerServicios();
    }, []);
  
    return (
      <>
        <nav>
          <button onClick={() => scrollToSection(infoRef)}>Información del Hospital</button>
          <button onClick={() => scrollToSection(serviciosRef)}>Servicios Destacados</button>
        </nav>
        <WelcomeCarousel />
        <section ref={serviciosRef}>
          <h2>Servicios Destacados</h2>
          <ul>
            {servicios.length === 0 ? (
              <p>Cargando servicios...</p>
            ) : (
              servicios.map((servicio) => <ServicioItem key={servicio.id} servicio={servicio} />)
            )}
          </ul>
        </section>
      </>
    );
  };

  Home.propTypes = {
    servicios: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default Home;