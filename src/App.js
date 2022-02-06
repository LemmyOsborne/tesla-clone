import React from 'react';
import { Home } from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import { ModelY } from "./components/cars/ModelY/ModelY";
import { Layout } from "./components/Layout/Layout"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/model-y" element={<ModelY />} />
      </Route>
    </Routes>
  );
}

export default App;
