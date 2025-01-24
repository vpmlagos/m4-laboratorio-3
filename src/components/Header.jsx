import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FaHome, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import '../styles/HeaderStyle.css';

const Header = () => (
    <Navbar className='headerContainer' expand="lg" fixed="top">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <img src="/img/logohoffen.png" alt="Clínica Hoffen" className="img-fluid" />
            </Navbar.Brand>

            {/* Botón hamburguesa para dispositivos pequeños */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="me-3">
                        <FaHome className="me-2" /> Inicio
                    </Nav.Link>
                    <Nav.Link as={Link} to="/equipo" className="me-3">
                        <FaUsers className="me-2" /> Equipo Médico
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cita">
                        <FaCalendarAlt className="me-2" /> Citas
                    </Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Container>
    </Navbar>
);

export default Header;
