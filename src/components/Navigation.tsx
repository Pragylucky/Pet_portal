import React, { useState, useContext } from 'react'
import { Heart, ShoppingCart, MessageCircle, Search, Filter, MapPin, Star, Users, Bell, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, cartItems, setUser } = useContext(AppContext)
  const location = useLocation()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-800">PetMatch</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition ${(location.pathname === '/home' || location.pathname === '/') ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
              <Heart className="w-4 h-4" />
              <span>Find Match</span>
            </Link>
            <Link to="/marketplace" className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition ${location.pathname === '/marketplace' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
              <ShoppingCart className="w-4 h-4" />
              <span>Shop</span>
            </Link>
            <Link to="/community" className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition ${location.pathname === '/community' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
              <Users className="w-4 h-4" />
              <span>Community</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600" />
            <MessageCircle className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </div>
            {user ? (
              <div className="flex items-center space-x-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
            ) : (
              <button 
                onClick={() => setUser({ name: 'Demo User' })}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Login
              </button>
            )}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2">Find Match</Link>
            <Link to="/marketplace" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2">Shop</Link>
            <Link to="/community" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2">Community</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
