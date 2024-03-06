import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Category from './pages/category/Category'
import Menu from './pages/menu/Menu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import "./i18n/i18n"
import Layout from './components/Layout/Layout'
import ProductLodo from './pages/product/ProductLodo'
import Card from './pages/card/Card'

const App = () => {
  return (
    <div >
   
    <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/productLogo/:id' element={<ProductLodo/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App