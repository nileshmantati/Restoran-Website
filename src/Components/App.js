// Website Link
// https://themewagon.github.io/restoran/index.html
import React from 'react';
import '../Styles/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutuspage" element={<Aboutuspage />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/Menupage" element={<Menupage />} />
        <Route path="/Bookingpage" element={<Bookingpage />} />
        <Route path="/Teampage" element={<Teampage />} />
        <Route path="/Testimonialpage" element={<Testimonialpage />} />
        <Route path="/ContactPage" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
