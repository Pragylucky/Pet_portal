import React, { useContext } from 'react'
import { Plus, Package, Filter, ShoppingCart, Heart, Star } from 'lucide-react'
import { AppContext } from '../context/AppContext'

const products = [
  {
    id: 1,
    name: "Premium Dog Food - Royal Canin",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800",
    category: "Food",
    seller: "PetStore Pro"
  },
  {
    id: 2,
    name: "Interactive Cat Toy Set",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800",
    category: "Toys",
    seller: "PlayPets"
  },
  {
    id: 3,
    name: "Luxury Pet Bed - Memory Foam",
    price: 3999,
    originalPrice: 4999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800",
    category: "Accessories",
    seller: "ComfortPets"
  }
]

const Marketplace: React.FC = () => {
  const { cartItems, setCartItems } = useContext(AppContext)
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Pet Marketplace</h1>
            <p className="text-gray-600">Everything your pet needs, delivered to your door</p>
          </div>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Sell Product
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          {['Food', 'Toys', 'Accessories', 'Grooming', 'Health', 'Adoption'].map(category => (
            <button key={category} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-pink-500 hover:shadow-lg transition">
              <Package className="w-8 h-8 mx-auto mb-2 text-pink-500" />
              <span className="text-sm font-medium">{category}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input type="text" placeholder="Search products..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" />
            </div>
            <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option>All Categories</option>
              <option>Food</option>
              <option>Toys</option>
              <option>Accessories</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
                <button className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-pink-500" />
                </button>
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full">
                    <span className="text-xs font-bold">{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <span className="text-xs text-pink-500 font-medium bg-pink-50 px-2 py-1 rounded-full">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">by {product.seller}</p>
                <button onClick={() => setCartItems([...cartItems, product])} className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Marketplace
