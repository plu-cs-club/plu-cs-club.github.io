import { HashRouter, Route, Routes } from 'react-router-dom';

import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
