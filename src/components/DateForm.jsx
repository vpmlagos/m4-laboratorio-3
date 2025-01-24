import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../styles/DateForm.css'

const DateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    rut: '',
    specialty: '',
  });
  const [error, setError] = useState('');
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.time || !formData.rut || !formData.specialty) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    const rucRegex = /^\d{11}$/;
    if (!rucRegex.test(formData.rut)) {
      setError('El RUT debe tener 11 dígitos.');
      return;
    }

    const today = new Date().toISOString().split('T')[0]; 
    if (formData.date < today) {
      setError('La fecha no puede ser anterior a hoy.');
      return;
    }

    setError('');
    onSubmit(formData); 
    setFormData({
      name: '',
      date: '',
      time: '',
      rut: '',
      specialty: '',
    });
  };

  return (
    <div className='contenedorCita'>
         <h1 className='citaTitle'>Agenda tu cita:</h1>
         <br />
      <Form onSubmit={handleSubmit}>
        {/* Nombre */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            ref={nameInputRef}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ingresa tu nombre"
          />
        </Form.Group>

        {/* Fecha */}
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]} 
          />
        </Form.Group>

        {/* Hora (turnos predefinidos) */}
        <Form.Group className="mb-3" controlId="formTime">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            as="select"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            <option value="">Selecciona un turno</option>
            {/* Turnos de la mañana */}
            <optgroup label="Mañana">
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
            </optgroup>

            {/* Turnos de la tarde */}
            <optgroup label="Tarde">
              <option value="03:00">03:00 PM</option>
              <option value="04:00">04:00 PM</option>
              <option value="05:00">05:00 PM</option>
            </optgroup>
          </Form.Control>
        </Form.Group>

        {/* RUC */}
        <Form.Group className="mb-3" controlId="formRut">
          <Form.Label>RUT</Form.Label>
          <Form.Control
            type="text"
            value={formData.rut}
            onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
            placeholder="Ingresa tu RUT (11 dígitos)"
          />
        </Form.Group>

        {/* Especialidad */}
        <Form.Group className="mb-3" controlId="formSpecialty">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            as="select"
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
          >
            <option value="">Selecciona una especialidad</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Dermatología">Dermatología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Odontología">Odontología</option>
          </Form.Control>
        </Form.Group>

        {/* Mostrar error si es necesario */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Botón de envío */}
        <Button variant="primary" type="submit">
          Agendar
        </Button>
      </Form>
    </div>
  );
};

export default DateForm;