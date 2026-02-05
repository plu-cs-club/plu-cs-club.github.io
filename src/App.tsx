import { HashRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
