import React, {useEffect, useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './routes/About';
import Designs from './routes/Designs';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import useLocalStorage from 'use-local-storage';


function App() {
  const [switchBtn, setSwtichBtn] = useState(false);


  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () =>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwtichBtn(!switchBtn);
    // console.log("clicked...")
    // console.log(newTheme)

  }

  useEffect(()=>{
    if (theme === "dark")
    {
      setSwtichBtn(true);
    }
  })


  return (
    <>
    <Navbar myTheme={theme} onToggleTheme={toggleTheme}onSwitch={switchBtn} />
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
