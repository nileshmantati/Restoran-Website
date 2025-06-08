// Website Link
// https://themewagon.github.io/restoran/index.html
import React from 'react';
import '../Styles/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Service from './Service';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Masterchefs from './Masterchefs';
import Testimonial from './Testimonial';
// import { Routes, Route } from "react-router";


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/notes" element={ } />
          <Route path="/" element={ } />
        </Routes>
      </Router> */}
      <Header />
      <Service />
      <About />
      <Menu />
      <Reservation />
      <Masterchefs />
      <Testimonial />
    </div>
  );
}

export default App;
