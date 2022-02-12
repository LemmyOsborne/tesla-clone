import React from 'react';
import { Home } from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import { Car } from "./components/cars/Car/Car";
import { Layout } from "./components/Layout/Layout";
import carInfo from "./carInfo.json"
import { SolarRoof } from './components/SolarRoof/SolarRoof';
import { SolarPanels } from './components/SolarPanels/SolarPanels';
import { Login } from "./components/Login/Login"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        {carInfo.map(item => (
          <Route path={item.path} key={item.id} element={<Car {...item} />} />
        ))}
        <Route path="/solarroof" element={<SolarRoof />} />
        <Route path="/solarpanels" element={<SolarPanels />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;
