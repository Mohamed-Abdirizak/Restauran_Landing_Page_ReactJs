import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './routes/About';
import Designs from './routes/Designs';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/designs' element={<Designs />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
   </> 
  );
}

export default App;
