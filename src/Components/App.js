// Website Link
// https://themewagon.github.io/restoran/index.html
import React from 'react';
import '../Styles/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';

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
      <Homepage />
    </div>
  );
}

export default App;
