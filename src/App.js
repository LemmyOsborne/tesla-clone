import React from 'react';
import { Home } from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import { Car } from "./components/cars/Car/Car";
import { Layout } from "./components/Layout/Layout";
import carInfo from "./carInfo.json"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        {carInfo.map(item => (
          <Route path={item.path} element={<Car key={item.id} {...item} />} />
        ))}
      </Route>
    </Routes>
  )
}

export default App;
