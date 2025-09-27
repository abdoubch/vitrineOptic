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
import ProfessionnelSportif from './pages/ProfessionnelSportif';
import InteractifOptitech from './pages/InteractifOptitech';

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
            <Route path="/professionnel-sportif" element={<ProfessionnelSportif />} />
            <Route path="/interactif-optitech" element={<InteractifOptitech />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;