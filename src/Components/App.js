// Website Link
// https://themewagon.github.io/restoran/index.html
import React from 'react';
import '../Styles/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutuspage from './Aboutuspage';
import Servicepage from './Servicepage';
import Menupage from './Menupage';
import Bookingpage from './Bookingpage';
import Teampage from './Teampage';
import Testimonialpage from './Testimonialpage';
import ContactPage from './ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
          <Route path="/servicepage" element={<Servicepage />} />
          <Route path="/menupage" element={<Menupage />} />
          <Route path="/bookingpage" element={<Bookingpage />} />
          <Route path="/teampage" element={<Teampage />} />
          <Route path="/testimonialpage" element={<Testimonialpage />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
