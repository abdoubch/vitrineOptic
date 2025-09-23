import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OptiKids from './pages/OptiKids';
import OptiqueAdultes from './pages/OptiqueAdultes';
import Senior from './pages/Senior';
import Choufa from './pages/Choufa';
import Ophtalmologie from './pages/Ophtalmologie';
import Contactologie from './pages/Contactologie';
import Audioprothese from './pages/Audioprothese';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/optikids" element={<OptiKids />} />
            <Route path="/optique-adultes" element={<OptiqueAdultes />} />
            <Route path="/senior" element={<Senior />} />
            <Route path="/choufa" element={<Choufa />} />
            <Route path="/ophtalmologie" element={<Ophtalmologie />} />
            <Route path="/contactologie" element={<Contactologie />} />
            <Route path="/audioprothese" element={<Audioprothese />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;