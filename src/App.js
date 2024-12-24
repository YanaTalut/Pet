import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Pets from "./pages/Pets"
import Services from "./pages/Services"
import MainNav from "./components/layout/MainNav";
import MainFooter from './components/layout/MainFooter';


function App() {
  return (
    <div>
      <MainNav/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/pets" element={<Pets/>}>
        </Route>
        <Route path="/services" element={<Services/>}>
        </Route>
      </Routes>
      <MainFooter/>
    </div>
  );
}

export default App;
