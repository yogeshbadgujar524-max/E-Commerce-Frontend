import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import About from './Pages/About'
import Shopping from './Pages/Shopping'
import Cart from './Pages/AddToCart'
import Wishlist from './Components/Wishlist'
import Deals from './Pages/Deals'
import ContactUs from './Pages/ContactUs'
import Payment from './Pages/Payment'
import OrderTracking from './Pages/OrderTracking'
import Orders from './Pages/Orders'
import ProccessingPage from './Pages/ProccessingPage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProtectedRoute from './Components/ProtectedRoute'
import AdminDashboard from './Admin/AdminDashboard'
import Users from './Admin/Users'
import Products from './Admin/Products'
import AdminLayout from './Admin/AdminLayout'
import OrdersAdmin from './Admin/OrdersAdmin'
import Analytics from './Admin/Analytics'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-white">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>} />
            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>} />
            <Route path='/shop' element={<Shopping />} />
            <Route path='/yourdeals' element={
              <ProtectedRoute>
                <Deals />
              </ProtectedRoute>} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>} />
            <Route path='/tracking' element={<OrderTracking />} />
            <Route path='/orders' element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/proccess' element={<ProccessingPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="ordersadmin" element={<OrdersAdmin />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
