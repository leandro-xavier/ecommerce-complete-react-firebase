import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Accessories } from '../components/categories/Accessories';
import { Audio } from '../components/categories/Audio';
import { Cleaning } from '../components/categories/Cleaning';
import { Lights } from '../components/categories/Lights';
import { Portection } from '../components/categories/Portection';
import { Retrovisores } from '../components/categories/Retrovisores';
import { Tires } from '../components/categories/tires';
import { HomePage } from '../components/home/HomePage';
import { Navigation } from '../components/navigation/Navigation';
import { AllProductsPage } from '../components/products/AllProductsPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<AllProductsPage />}></Route>
      <Route path="/categories/accessories" element={<Accessories />}></Route>
      <Route path="/categories/lights" element={<Lights />}></Route>
      <Route path="/categories/audio" element={<Audio />}></Route>
      <Route path="/categories/cleaning" element={<Cleaning/>}></Route>
      <Route path="/categories/retrovisores" element={<Retrovisores />}></Route>
      <Route path="/categories/protection" element={<Portection/>}></Route>
      <Route path="/categories/tires" element={<Tires />}></Route>
    </Routes>
  </BrowserRouter>
  )
}
