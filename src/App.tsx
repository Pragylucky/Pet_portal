import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Community from './pages/Community'
import { AppProvider } from './context/AppContext'
import Navigation from './components/Navigation'
import LoginModal from './components/LoginModal'

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <LoginModal />
      </div>
    </AppProvider>
  )
}

export default App
