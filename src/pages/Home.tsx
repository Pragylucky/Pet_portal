import React, { useContext } from 'react'
import { Heart, Search, MapPin, Shield } from 'lucide-react'
import { AppContext } from '../context/AppContext'

const pets = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800",
    verified: true,
    owner: "Sarah Johnson",
    purpose: "Breeding"
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    age: "1 year",
    gender: "Female",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
    verified: true,
    owner: "Rahul Sharma",
    purpose: "Companionship"
  },
  {
    id: 3,
    name: "Rocky",
    breed: "German Shepherd",
    age: "3 years",
    gender: "Male",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800",
    verified: false,
    owner: "Priya Patel",
    purpose: "Playdate"
  }
]

const Home: React.FC = () => {
  const { setSelectedPet } = useContext(AppContext)
  return (
    <div>
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Find the Perfect Match for Your Pet</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Connect with loving pet parents, find breeding partners, or discover new companions for your furry friends</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-600 transition flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Start Matching
            </button>
            <a href="/marketplace" className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition inline-flex items-center">
              Browse Marketplace
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                  <option>All Pets</option>
                  <option>Dogs</option>
                  <option>Cats</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                  <option>All Breeds</option>
                  <option>Golden Retriever</option>
                  <option>Persian Cat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="City or Area" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Pets</h2>
            <p className="text-xl text-gray-600">Meet some of our amazing pets looking for matches</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map(pet => (
              <div key={pet.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="relative">
                  <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
                  {pet.verified && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full flex items-center">
                      <Shield className="w-3 h-3 mr-1" />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                  <button className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{pet.name}</h3>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">{pet.purpose}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{pet.breed} • {pet.age} • {pet.gender}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pet.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">by {pet.owner}</span>
                    <button onClick={() => setSelectedPet(pet)} className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
