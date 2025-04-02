import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactMe from './components/ContactMe';
import Login from './components/Login';
import Signin from './components/Signin';
import PetCare from './components/Care';
import BuyNow from './components/Buy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/care" element={<PetCare />} />
        <Route path="/buy" element={<BuyNow />} />
      </Routes>
    </Router>
  );
}

export default App;
