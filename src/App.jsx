import React from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContextProvider from './context/AuthContextProvider'
import ProtectedRoute from './components/route/ProtectedRoutes'

const App = () => {
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path="/dashboard" element={ 
          <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
      </Routes>
    </Router>
   
    </AuthContextProvider>
  )
}

export default App


