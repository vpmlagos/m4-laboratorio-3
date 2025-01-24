import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MedicalTeam from './pages/MedicalTeam';
import Appointments from './pages/Appointments';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeCarousel from './components/WelcomeCarousel';
import ContactForm from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<MedicalTeam />} />
          <Route path="/cita" element={<Appointments />} />
          <Route path='/contacto' element={<ContactForm/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;