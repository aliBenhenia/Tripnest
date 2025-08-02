// ```jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusCircle, 
  Edit3, 
  Trash2, 
  Filter, 
  Star, 
  MapPin, 
  Calendar,
  ChevronDown,
  X,
  Search,
  Heart,
  Share2
} from 'lucide-react';

const initialStops = [
  {
    id: '1',
    name: 'Paris - Eiffel Tower',
    description: 'Visit the iconic Eiffel Tower and enjoy breathtaking views of the city.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Sightseeing',
    rating: 4.8,
    duration: '3 hours',
    location: 'Paris, France'
  },
  {
    id: '2',
    name: 'Rome - Colosseum',
    description: 'Explore the ancient Roman Colosseum and learn about its fascinating history.',
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=',
    ],
    category: 'Historical',
    rating: 4.9,
    duration: '4 hours',
    location: 'Rome, Italy'
  },
  {
    id: '3',
    name: 'Venice - Gondola Ride',
    description: 'Enjoy a romantic gondola ride through the enchanting canals of Venice.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1526483360654-2284d43a72ef?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Relaxation',
    rating: 4.7,
    duration: '2 hours',
    location: 'Venice, Italy'
  },
  {
    id: '4',
    name: 'Tokyo - Shibuya Crossing',
    description: 'Experience the bustling energy of the world\'s busiest pedestrian crossing.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Sightseeing',
    rating: 4.6,
    duration: '2 hours',
    location: 'Tokyo, Japan'
  },
  {
    id: '5',
    name: 'New York - Statue of Liberty',
    description: 'Visit the iconic Statue of Liberty and take a ferry tour around Manhattan.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Historical',
    rating: 4.5,
    duration: '3 hours',
    location: 'New York, USA'
  },
  {
    id: '6',
    name: 'Bali - Uluwatu Temple',
    description: 'Watch stunning sunsets at this cliffside temple overlooking the Indian Ocean.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1526483360654-2284d43a72ef?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Relaxation',
    rating: 4.9,
    duration: '2.5 hours',
    location: 'Bali, Indonesia'
  }
];

const categories = [
  { id: 'All', name: 'All Stops', icon: '🌍' },
  { id: 'Sightseeing', name: 'Sightseeing', icon: '🏛️' },
  { id: 'Historical', name: 'Historical', icon: '📜' },
  { id: 'Relaxation', name: 'Relaxation', icon: '🌿' }
];

const TripPlanner = () => {
  const [stops, setStops] = useState(initialStops);
  const [filterCategory, setFilterCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStop, setEditingStop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredStops = stops.filter(stop => {
    const matchesCategory = selectedCategory === 'All' || stop.category === selectedCategory;
    const matchesSearch = stop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stop.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDragStart = (e, stop) => {
    e.dataTransfer.setData('stopId', stop.id);
    setIsAnimating(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('stopId');
    const draggedIndex = stops.findIndex(stop => stop.id === draggedId);
    
    if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
      const newStops = [...stops];
      const [movedItem] = newStops.splice(draggedIndex, 1);
      newStops.splice(targetIndex, 0, movedItem);
      setStops(newStops);
    }
    setIsAnimating(false);
  };

  const openNewStopModal = () => {
    setEditingStop(null);
    setIsModalOpen(true);
  };

  const openEditStopModal = (stop) => {
    setEditingStop(stop);
    setIsModalOpen(true);
  };

  const deleteStop = (id) => {
    setStops(stops.filter(stop => stop.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const stopData = {
      id: Date.now().toString(),
      name: formData.get('name'),
      description: formData.get('description'),
      images: formData.get('images').split(',').map(url => url.trim()).filter(url => url),
      category: formData.get('category'),
      rating: 4.5,
      duration: '2 hours',
      location: 'Unknown Location'
    };
    
    setStops([...stops, stopData]);
    setIsModalOpen(false);
    e.target.reset();
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Sightseeing': return 'bg-blue-100 text-blue-800';
      case 'Historical': return 'bg-purple-100 text-purple-800';
      case 'Relaxation': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-4xl">🌍</span>
                Your Trip Planner
              </h1>
              <p className="text-gray-600 mt-1">Plan your perfect journey with our interactive planner</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openNewStopModal}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              Add New Stop
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search stops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full lg:w-64"
                />
              </div>
              
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Stops</p>
                <p className="text-2xl font-bold text-gray-900">{stops.length}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(stops.reduce((acc, stop) => acc + stop.rating, 0) / stops.length * 10) / 10}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(stops.map(s => s.category)).size}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Filter className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="text-2xl font-bold text-gray-900">15h</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Stops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredStops.map((stop, index) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                draggable
                onDragStart={(e) => handleDragStart(e, stop)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-move"
              >
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={stop.images[0]}
                      alt={stop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(stop.category)}`}>
                      {stop.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-medium">{stop.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{stop.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{stop.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{stop.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{stop.location}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => openEditStopModal(stop)}
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteStop(stop.id)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredStops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MapPin className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No stops found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={openNewStopModal}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Add Your First Stop
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingStop ? 'Edit Trip Stop' : 'Add New Trip Stop'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stop Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingStop?.name || ''}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    defaultValue={editingStop?.description || ''}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue={editingStop?.category || 'Sightseeing'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="Sightseeing">Sightseeing</option>
                    <option value="Historical">Historical</option>
                    <option value="Relaxation">Relaxation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URLs (comma separated)</label>
                  <input
                    type="text"
                    name="images"
                    placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                    defaultValue={editingStop?.images?.join(', ') || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {editingStop ? 'Update' : 'Add'} Stop
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TripPlanner;
