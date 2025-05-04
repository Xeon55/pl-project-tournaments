import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cs2 from './pages/cs2';
import Dota2 from './pages/dota2';
import Lol from './pages/lol';
import Navbar from './components/navbar';
import Login from './pages/login';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cs2" element={<Cs2 />} />
          <Route path="/dota2" element={<Dota2 />} />
          <Route path="/lol" element={<Lol />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
