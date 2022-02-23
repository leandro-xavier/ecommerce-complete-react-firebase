import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Accessories } from '../components/categories/Accessories';
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
    </Routes>
  </BrowserRouter>
  )
}
