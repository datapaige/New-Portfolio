import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Projects from './pages/projects';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>

  )
}

export default App;