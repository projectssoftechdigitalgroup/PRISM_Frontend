import React from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
   
    </>
  )
}

export default App


