import React from 'react'
import { Camera, MessageCircle, Award } from 'lucide-react'

const Community: React.FC = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pet Parent Community</h1>
          <p className="text-xl text-gray-600">Connect, share, and learn with fellow pet lovers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Share with Community</h2>
              <textarea placeholder="What's on your mind about your pet?" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none" rows={3}></textarea>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-pink-500">
                    <Camera className="w-5 h-5 mr-2" />
                    Photo
                  </button>
                </div>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">Post</button>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: "Best food recommendations for Golden Retrievers?", author: "Sarah J.", time: "2 hours ago", replies: 12, likes: 24, category: "Nutrition" },
                { title: "My cat won't use the new litter box - help!", author: "Mike R.", time: "5 hours ago", replies: 8, likes: 16, category: "Behavior" },
                { title: "Dog park etiquette - what should new owners know?", author: "Lisa P.", time: "1 day ago", replies: 34, likes: 67, category: "Training" }
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">by {post.author}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.replies} replies
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {post.likes} likes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {['#PuppyTraining', '#CatHealth', '#DogPark', '#PetGrooming', '#AdoptDontShop'].map(tag => (
                  <button key={tag} className="block w-full text-left text-pink-500 hover:text-pink-600 font-medium">{tag}</button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-medium">Pet Adoption Drive</h4>
                  <p className="text-sm text-gray-600">Tomorrow, 10 AM</p>
                  <p className="text-sm text-gray-500">Central Park, Delhi</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-medium">Dog Training Workshop</h4>
                  <p className="text-sm text-gray-600">Dec 30, 2 PM</p>
                  <p className="text-sm text-gray-500">Community Center</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[ { name: "Dr. Priya Sharma", badge: "Vet Expert", points: 2840 }, { name: "Rohit Kumar", badge: "Dog Trainer", points: 1920 }, { name: "Anjali Patel", badge: "Cat Specialist", points: 1680 } ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.badge}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-pink-500">{user.points}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
