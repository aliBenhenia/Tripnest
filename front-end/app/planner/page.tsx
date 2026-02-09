"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Calendar, MapPin, Users, Wallet, FileText, CheckCircle, Bell, User, Edit, Trash2, Eye, Route,Clock } from 'lucide-react';

// API Service (unchanged)
const apiService = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/planner` || 'http://localhost:3000/api/planner',
  async request(endpoint, method = 'GET', data = null) {
      const options = {
          method,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('TOKEN_KEY')}`
          }
      };
      if (data) {
          options.body = JSON.stringify(data);
      }
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      return response.json();
  },
  // Trips
  getTrips: () => apiService.request('/trips'),
  createTrip: (trip) => apiService.request('/trips', 'POST', trip),
  updateTrip: (id, trip) => apiService.request(`/trips/${id}`, 'PUT', trip),
  deleteTrip: (id) => apiService.request(`/trips/${id}`, 'DELETE'),
  // Packing Items
  getPackingItems: (tripId) => apiService.request(`/trips/${tripId}/packing-items`),
  createPackingItem: (tripId, item) => apiService.request(`/trips/${tripId}/packing-items`, 'POST', item),
  updatePackingItem: (id, item) => apiService.request(`/packing-items/${id}`, 'PUT', item),
  deletePackingItem: (id) => apiService.request(`/packing-items/${id}`, 'DELETE'),
  // Expenses
  getExpenses: (tripId) => apiService.request(`/trips/${tripId}/expenses`),
  createExpense: (tripId, expense) => apiService.request(`/trips/${tripId}/expenses`, 'POST', expense),
  updateExpense: (id, expense) => apiService.request(`/expenses/${id}`, 'PUT', expense),
  deleteExpense: (id) => apiService.request(`/expenses/${id}`, 'DELETE'),
  // Companions
  getCompanions: (tripId) => apiService.request(`/trips/${tripId}/companions`),
  createCompanion: (tripId, companion) => apiService.request(`/trips/${tripId}/companions`, 'POST', companion),
  updateCompanion: (id, companion) => apiService.request(`/companions/${id}`, 'PUT', companion),
  deleteCompanion: (id) => apiService.request(`/companions/${id}`, 'DELETE'),
  // Documents
  getDocuments: (tripId) => apiService.request(`/trips/${tripId}/documents`),
  createDocument: (tripId, document) => apiService.request(`/trips/${tripId}/documents`, 'POST', document),
  deleteDocument: (id) => apiService.request(`/documents/${id}`, 'DELETE'),
  // Activities
  getActivities: (tripId) => apiService.request(`/trips/${tripId}/activities`),
  createActivity: (tripId, activity) => apiService.request(`/trips/${tripId}/activities`, 'POST', activity),
  updateActivity: (id, activity) => apiService.request(`/activities/${id}`, 'PUT', activity),
  deleteActivity: (id) => apiService.request(`/activities/${id}`, 'DELETE')
};

export default function TravelPlanner() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  // Load trips on mount
  useEffect(() => {
    // check if token exist or not
    const token = localStorage.getItem('TOKEN_KEY');
    if (!token)
        window.location.href = '/auth/login';
      loadTrips();
      const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('TOKEN_KEY');
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
              });
              if (!res.ok) throw new Error('Failed to fetch profile');
              const data = await res.json();
              const userData = data.data.user;
            setAvatarPreview(`${process.env.NEXT_PUBLIC_API_URL}${userData.avatar}`);
            } catch (error) {
              console.error("Error fetching user profile:", error);
              // toast.error("Unable to fetch user data. There was an issue fetching your profile data.");
            }
          };
          fetchUserProfile();
  }, []);

  const loadTrips = async () => {
      try {
          setLoading(true);
          const data = await apiService.getTrips();
          setTrips(data);
      } catch (err) {
          setError('Failed to load trips');
          console.error(err);
      } finally {
          setLoading(false);
      }
  };

  const handleCreateTrip = async (tripData) => {
      try {
          const newTrip = await apiService.createTrip(tripData);
          setTrips([...trips, newTrip]);
          return newTrip;
      } catch (err) {
          setError('Failed to create trip');
          console.error(err);
      }
  };

  const handleUpdateTrip = async (id, tripData) => {
      try {
          const updatedTrip = await apiService.updateTrip(id, tripData);
          setTrips(trips.map(trip => trip._id === id ? updatedTrip : trip));
          if (selectedTrip && selectedTrip._id === id) {
              setSelectedTrip(updatedTrip);
          }
      } catch (err) {
          setError('Failed to update trip');
          console.error(err);
      }
  };

  const handleDeleteTrip = async (id) => {
      try {
          await apiService.deleteTrip(id);
          setTrips(trips.filter(trip => trip._id !== id));
          if (selectedTrip && selectedTrip._id === id) {
              setSelectedTrip(null);
              setActiveTab('dashboard');
          }
      } catch (err) {
          setError('Failed to delete trip');
          console.error(err);
      }
  };

  const handleSelectTrip = (trip) => {
      setSelectedTrip(trip);
      setActiveTab('trip-details');
  };

  if (loading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <motion.div 
                className="text-3xl text-blue-600 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Loading...
              </motion.div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <motion.h1 
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Travel Planner
              </motion.h1>
              <div className="flex items-center space-x-4">
                  <motion.button 
                    className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                      {/* <Bell className="text-gray-600" size={20} /> */}
                  </motion.button>
                  <div className="flex items-center">
                      
                  </div>
              </div>
          </div>
      </header>
      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-8">
                  <motion.button
                      onClick={() => setActiveTab('dashboard')}
                      className={`py-4 px-1 font-medium text-sm relative ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                  >
                      Dashboard
                      {activeTab === 'dashboard' && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                          layoutId="navIndicator"
                        />
                      )}
                  </motion.button>
                  {selectedTrip && (
                      <motion.button
                          onClick={() => setActiveTab('trip-details')}
                          className={`py-4 px-1 font-medium text-sm relative ${activeTab === 'trip-details' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                          whileHover={{ y: -2 }}
                          whileTap={{ y: 0 }}
                      >
                          {selectedTrip.name}
                          {activeTab === 'trip-details' && (
                            <motion.div 
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                              layoutId="navIndicator"
                            />
                          )}
                      </motion.button>
                  )}
              </div>
          </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {error && (
                <motion.div 
                  className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                    {error}
                    <button 
                        onClick={() => setError(null)}
                        className="float-right text-red-500 hover:text-red-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Dashboard 
                    trips={trips} 
                    onSelectTrip={handleSelectTrip}
                    onCreateTrip={handleCreateTrip}
                    onUpdateTrip={handleUpdateTrip}
                    onDeleteTrip={handleDeleteTrip}
                />
              </motion.div>
            )}
            {activeTab === 'trip-details' && selectedTrip && (
              <motion.div
                key="trip-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TripDetails 
                    trip={selectedTrip}
                    onUpdateTrip={handleUpdateTrip}
                    onBack={() => setActiveTab('dashboard')}
                />
              </motion.div>
            )}
          </AnimatePresence>
      </main>
    </div>
  );
}

// Dashboard Component
const Dashboard = ({ trips, onSelectTrip, onCreateTrip, onUpdateTrip, onDeleteTrip }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTrips = trips.filter(trip => {
      const matchesSearch = trip.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          trip.destinations.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || trip.status === statusFilter;
      return matchesSearch && matchesStatus;
  });

  const handleEditTrip = (trip) => {
      setEditingTrip(trip);
      setShowModal(true);
  };

  const handleSaveTrip = async (tripData) => {
      if (editingTrip) {
          await onUpdateTrip(editingTrip._id, tripData);
      } else {
          await onCreateTrip(tripData);
      }
      setShowModal(false);
      setEditingTrip(null);
  };

  return (
      <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    My Trips
                  </motion.h2>
                  <motion.p 
                    className="mt-2 text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Plan and organize your travels
                  </motion.p>
              </div>
              <motion.button
                  onClick={() => setShowModal(true)}
                  className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
              >
                  <Plus className="mr-2" size={20} />
                  New Trip
              </motion.button>
          </div>
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
              <StatCard 
                icon={<MapPin className="text-blue-600" size={24} />} 
                title="Total Trips" 
                value={trips.length} 
                color="bg-blue-100" 
              />
              <StatCard 
                icon={<CheckCircle className="text-green-600" size={24} />} 
                title="Confirmed" 
                value={trips.filter(t => t.status === 'confirmed').length} 
                color="bg-green-100" 
              />
              <StatCard 
                icon={<Calendar className="text-yellow-600" size={24} />} 
                title="Planning" 
                value={trips.filter(t => t.status === 'planning').length} 
                color="bg-yellow-100" 
              />
              <StatCard 
                icon={<Route className="text-purple-600" size={24} />} 
                title="In Progress" 
                value={trips.filter(t => t.status === 'in-progress').length} 
                color="bg-purple-100" 
              />
          </motion.div>
          {/* Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
              <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="text-gray-400" size={20} />
                  </div>
                  <input
                      type="text"
                      placeholder="Search trips..."
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
              </div>
              <select
                  className="block w-full md:w-48 px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
              >
                  <option value="all">All Statuses</option>
                  <option value="planning">Planning</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="in-progress">In Progress</option>
              </select>
          </motion.div>
          {/* Trips List */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
              <AnimatePresence>
                {filteredTrips.map((trip, index) => (
                    <motion.div 
                      key={trip._id} 
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ y: -5 }}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{trip.name}</h3>
                                    <p className="text-gray-600 mt-2 flex items-center">
                                        <MapPin className="mr-2" size={16} />
                                        {trip.destinations}
                                    </p>
                                </div>
                                <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                                    trip.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                    trip.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-blue-100 text-blue-800'
                                }`}>
                                    {trip.status}
                                </span>
                            </div>
                            <div className="mt-4 flex items-center text-gray-500">
                                <Calendar className="mr-2" size={16} />
                                {trip.checkIn && trip.checkOut 
                                  ? `${new Date(trip.checkIn).toLocaleDateString()} - ${new Date(trip.checkOut).toLocaleDateString()}`
                                  : trip.dates || 'Dates not set'}
                            </div>
                            <div className="mt-6 flex justify-between">
                                <motion.button
                                    onClick={() => onSelectTrip(trip)}
                                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                                    whileHover={{ x: 5 }}
                                >
                                    <Eye className="mr-1" size={16} /> View
                                </motion.button>
                                <div className="flex space-x-2">
                                    <motion.button
                                        onClick={() => handleEditTrip(trip)}
                                        className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Edit size={18} />
                                    </motion.button>
                                    <motion.button
                                        onClick={() => onDeleteTrip(trip._id)}
                                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Trash2 size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
              </AnimatePresence>
          </motion.div>
          {filteredTrips.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                  <MapPin className="text-gray-300 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">No trips found</h3>
                  <p className="text-gray-500">Create your first trip to get started</p>
              </motion.div>
          )}
          {/* Trip Modal */}
          <AnimatePresence>
            {(showModal || editingTrip) && (
                <TripModal
                    trip={editingTrip}
                    onSave={handleSaveTrip}
                    onClose={() => {
                        setShowModal(false);
                        setEditingTrip(null);
                    }}
                />
            )}
          </AnimatePresence>
      </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, color }) => (
  <motion.div 
    className={`${color} p-6 rounded-2xl shadow-md`}
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
  >
      <div className="flex items-center">
          <div className="p-3 rounded-xl bg-white">
              {icon}
          </div>
          <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{title}</p>
              <p className="text-3xl font-bold mt-1">{value}</p>
          </div>
      </div>
  </motion.div>
);

// Trip Modal Component
const TripModal = ({ trip, onSave, onClose }) => {
  const [formData, setFormData] = useState({
      name: trip?.name || '',
      checkIn: trip?.checkIn ? new Date(trip.checkIn).toISOString().split('T')[0] : '',
      checkOut: trip?.checkOut ? new Date(trip.checkOut).toISOString().split('T')[0] : '',
      destinations: trip?.destinations || '',
      status: trip?.status || 'planning'
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Format dates properly
      const tripData = {
          ...formData,
          checkIn: formData.checkIn ? new Date(formData.checkIn).toISOString() : null,
          checkOut: formData.checkOut ? new Date(formData.checkOut).toISOString() : null
      };
      onSave(tripData);
  };

  return (
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
              <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                          {trip ? 'Edit Trip' : 'Create New Trip'}
                      </h3>
                      <motion.button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                      </motion.button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Trip Name</label>
                          <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                          <input
                              type="date"
                              name="checkIn"
                              value={formData.checkIn}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                          <input
                              type="date"
                              name="checkOut"
                              value={formData.checkOut}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Destinations</label>
                          <input
                              type="text"
                              name="destinations"
                              value={formData.destinations}
                              onChange={handleChange}
                              placeholder="e.g., Paris, Rome, Barcelona"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              required
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                          <select
                              name="status"
                              value={formData.status}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          >
                              <option value="planning">Planning</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="in-progress">In Progress</option>
                          </select>
                      </div>
                      <div className="flex justify-end space-x-4 pt-4">
                          <motion.button
                              type="button"
                              onClick={onClose}
                              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                          >
                              Cancel
                          </motion.button>
                          <motion.button
                              type="submit"
                              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-medium shadow-lg"
                              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                              whileTap={{ scale: 0.98 }}
                          >
                              {trip ? 'Update' : 'Create'}
                          </motion.button>
                      </div>
                  </form>
              </div>
          </motion.div>
      </motion.div>
  );
};

// Trip Details Component
const TripDetails = ({ trip, onUpdateTrip, onBack }) => {
  const [packingItems, setPackingItems] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [companions, setCompanions] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activeSection, setActiveSection] = useState('packing');
  const [loading, setLoading] = useState(false);

  // Load all trip data
  useEffect(() => {
      const loadData = async () => {
          setLoading(true);
          try {
              const [packingData, expenseData, companionData, documentData, activityData] = await Promise.all([
                  apiService.getPackingItems(trip._id),
                  apiService.getExpenses(trip._id),
                  apiService.getCompanions(trip._id),
                  apiService.getDocuments(trip._id),
                  apiService.getActivities(trip._id)
              ]);
              setPackingItems(packingData);
              setExpenses(expenseData);
              setCompanions(companionData);
              setDocuments(documentData);
              setActivities(activityData);
          } catch (err) {
              console.error('Failed to load trip data:', err);
          } finally {
              setLoading(false);
          }
      };
      loadData();
  }, [trip._id]);

  // Packing Items CRUD
  const handleCreatePackingItem = async (itemData) => {
      try {
          const newItem = await apiService.createPackingItem(trip._id, itemData);
          setPackingItems([...packingItems, newItem]);
      } catch (err) {
          console.error('Failed to create packing item:', err);
      }
  };

  const handleUpdatePackingItem = async (id, itemData) => {
      try {
          const updatedItem = await apiService.updatePackingItem(id, itemData);
          setPackingItems(packingItems.map(item => item._id === id ? updatedItem : item));
      } catch (err) {
          console.error('Failed to update packing item:', err);
      }
  };

  const handleDeletePackingItem = async (id) => {
      try {
          await apiService.deletePackingItem(id);
          setPackingItems(packingItems.filter(item => item._id !== id));
      } catch (err) {
          console.error('Failed to delete packing item:', err);
      }
  };

  // Expenses CRUD
  const handleCreateExpense = async (expenseData) => {
      try {
          const newExpense = await apiService.createExpense(trip._id, expenseData);
          setExpenses([...expenses, newExpense]);
      } catch (err) {
          console.error('Failed to create expense:', err);
      }
  };

  const handleUpdateExpense = async (id, expenseData) => {
      try {
          const updatedExpense = await apiService.updateExpense(id, expenseData);
          setExpenses(expenses.map(expense => expense._id === id ? updatedExpense : expense));
      } catch (err) {
          console.error('Failed to update expense:', err);
      }
  };

  const handleDeleteExpense = async (id) => {
      try {
          await apiService.deleteExpense(id);
          setExpenses(expenses.filter(expense => expense._id !== id));
      } catch (err) {
          console.error('Failed to delete expense:', err);
      }
  };

  // Companions CRUD
  const handleCreateCompanion = async (companionData) => {
      try {
          const newCompanion = await apiService.createCompanion(trip._id, companionData);
          setCompanions([...companions, newCompanion]);
      } catch (err) {
          console.error('Failed to create companion:', err);
      }
  };

  const handleUpdateCompanion = async (id, companionData) => {
      try {
          const updatedCompanion = await apiService.updateCompanion(id, companionData);
          setCompanions(companions.map(companion => companion._id === id ? updatedCompanion : companion));
      } catch (err) {
          console.error('Failed to update companion:', err);
      }
  };

  const handleDeleteCompanion = async (id) => {
      try {
          await apiService.deleteCompanion(id);
          setCompanions(companions.filter(companion => companion._id !== id));
      } catch (err) {
          console.error('Failed to delete companion:', err);
      }
  };

  // Documents CRUD
  const handleCreateDocument = async (documentData) => {
      try {
          const newDocument = await apiService.createDocument(trip._id, documentData);
          setDocuments([...documents, newDocument]);
      } catch (err) {
          console.error('Failed to create document:', err);
      }
  };

  const handleDeleteDocument = async (id) => {
      try {
          await apiService.deleteDocument(id);
          setDocuments(documents.filter(document => document._id !== id));
      } catch (err) {
          console.error('Failed to delete document:', err);
      }
  };

  // Activities CRUD
  const handleCreateActivity = async (activityData) => {
      try {
          const newActivity = await apiService.createActivity(trip._id, activityData);
          setActivities([...activities, newActivity]);
      } catch (err) {
          console.error('Failed to create activity:', err);
      }
  };

  const handleUpdateActivity = async (id, activityData) => {
      try {
          const updatedActivity = await apiService.updateActivity(id, activityData);
          setActivities(activities.map(activity => activity._id === id ? updatedActivity : activity));
      } catch (err) {
          console.error('Failed to update activity:', err);
      }
  };

  const handleDeleteActivity = async (id) => {
      try {
          await apiService.deleteActivity(id);
          setActivities(activities.filter(activity => activity._id !== id));
      } catch (err) {
          console.error('Failed to delete activity:', err);
      }
  };

  if (loading) {
      return (
          <div className="flex justify-center items-center h-96">
              <motion.div 
                className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
          </div>
      );
  }

  return (
      <div className="space-y-8">
          <div>
              <motion.button
                  onClick={onBack}
                  className="flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
                  whileHover={{ x: -5 }}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Dashboard
              </motion.button>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                      <motion.h2 
                        className="text-3xl font-bold text-gray-900"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {trip.name}
                      </motion.h2>
                      <div className="flex flex-wrap items-center mt-4 text-gray-600 gap-4">
                          <div className="flex items-center">
                              <Calendar className="mr-2" size={18} />
                              <span>
                                {trip.checkIn && trip.checkOut 
                                  ? `${new Date(trip.checkIn).toLocaleDateString()} - ${new Date(trip.checkOut).toLocaleDateString()}`
                                  : 'Dates not set'}
                              </span>
                          </div>
                          <span className="hidden md:block">•</span>
                          <div className="flex items-center">
                              <MapPin className="mr-2" size={18} />
                              <span>{trip.destinations}</span>
                          </div>
                      </div>
                  </div>
                  <motion.span 
                    className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium ${
                        trip.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        trip.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                      {trip.status.replace('-', ' ')}
                  </motion.span>
              </div>
          </div>
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
              <nav className="-mb-px flex flex-wrap gap-4">
                  {['packing', 'expenses', 'companions', 'documents', 'activities'].map((section) => (
                      <motion.button
                          key={section}
                          onClick={() => setActiveSection(section)}
                          className={`py-3 px-1 font-medium text-sm capitalize relative pb-4 ${
                              activeSection === section
                                  ? 'text-blue-600'
                                  : 'text-gray-500 hover:text-gray-700'
                          }`}
                          whileHover={{ y: -2 }}
                          whileTap={{ y: 0 }}
                      >
                          {section}
                          {activeSection === section && (
                            <motion.div 
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                              layoutId="sectionIndicator"
                            />
                          )}
                      </motion.button>
                  ))}
              </nav>
          </div>
          {/* Section Content */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
              <AnimatePresence mode="wait">
                {activeSection === 'packing' && (
                  <motion.div
                    key="packing"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PackingSection
                        items={packingItems}
                        onCreate={handleCreatePackingItem}
                        onUpdate={handleUpdatePackingItem}
                        onDelete={handleDeletePackingItem}
                    />
                  </motion.div>
                )}
                {activeSection === 'expenses' && (
                  <motion.div
                    key="expenses"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExpensesSection
                        expenses={expenses}
                        onCreate={handleCreateExpense}
                        onUpdate={handleUpdateExpense}
                        onDelete={handleDeleteExpense}
                    />
                  </motion.div>
                )}
                {activeSection === 'companions' && (
                  <motion.div
                    key="companions"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CompanionsSection
                        companions={companions}
                        onCreate={handleCreateCompanion}
                        onUpdate={handleUpdateCompanion}
                        onDelete={handleDeleteCompanion}
                    />
                  </motion.div>
                )}
                {activeSection === 'documents' && (
                  <motion.div
                    key="documents"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DocumentsSection
                        documents={documents}
                        onCreate={handleCreateDocument}
                        onDelete={handleDeleteDocument}
                    />
                  </motion.div>
                )}
                {activeSection === 'activities' && (
                  <motion.div
                    key="activities"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ActivitiesSection
                        activities={activities}
                        onCreate={handleCreateActivity}
                        onUpdate={handleUpdateActivity}
                        onDelete={handleDeleteActivity}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
          </motion.div>
      </div>
  );
};

// Packing Section Component
const PackingSection = ({ items, onCreate, onUpdate, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', packed: false });

  const handleSave = async () => {
      if (editingItem) {
          await onUpdate(editingItem._id, formData);
      } else {
          await onCreate(formData);
      }
      resetForm();
  };

  const handleEdit = (item) => {
      setEditingItem(item);
      setFormData({ name: item.name, packed: item.packed });
      setShowForm(true);
  };

  const resetForm = () => {
      setFormData({ name: '', packed: false });
      setEditingItem(null);
      setShowForm(false);
  };

  const togglePacked = async (item) => {
      await onUpdate(item._id, { ...item, packed: !item.packed });
  };

  return (
      <div>
          <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                Packing List
              </h3>
              <motion.button
                  onClick={() => setShowForm(true)}
                  className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
              >
                  <Plus className="mr-2" size={20} />
                  Add Item
              </motion.button>
          </div>
          {showForm && (
              <motion.div 
                className="mb-8 p-6 border border-gray-200 rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                  <h4 className="text-xl font-semibold mb-4">{editingItem ? 'Edit Item' : 'Add New Item'}</h4>
                  <div className="flex flex-col md:flex-row gap-4">
                      <input
                          type="text"
                          placeholder="Item name"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <label className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-xl">
                          <input
                              type="checkbox"
                              className="rounded text-blue-600 focus:ring-blue-500 h-5 w-5"
                              checked={formData.packed}
                              onChange={(e) => setFormData({...formData, packed: e.target.checked})}
                          />
                          <span className="ml-3 text-gray-700">Packed</span>
                      </label>
                      <div className="flex gap-3">
                        <motion.button
                            onClick={handleSave}
                            className="px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Save
                        </motion.button>
                        <motion.button
                            onClick={resetForm}
                            className="px-5 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Cancel
                        </motion.button>
                      </div>
                  </div>
              </motion.div>
          )}
          <div className="space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                    <motion.div 
                      key={item._id} 
                      className="flex items-center justify-between p-5 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="flex items-center">
                            <motion.button
                                onClick={() => togglePacked(item)}
                                className={`w-8 h-8 rounded-full border mr-4 flex items-center justify-center ${
                                    item.packed 
                                        ? 'bg-green-500 border-green-500 text-white' 
                                        : 'border-gray-300'
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {item.packed && <CheckCircle size={20} />}
                            </motion.button>
                            <span className={item.packed ? 'line-through text-gray-500 text-lg' : 'text-gray-900 text-lg'}>
                                {item.name}
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <motion.button
                                onClick={() => handleEdit(item)}
                                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Edit size={20} />
                            </motion.button>
                            <motion.button
                                onClick={() => onDelete(item._id)}
                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Trash2 size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
              </AnimatePresence>
          </div>
          {items.length === 0 && (
              <motion.div 
                className="text-center py-12 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                  <p className="text-xl">No packing items yet</p>
              </motion.div>
          )}
      </div>
  );
};

// Expenses Section Component
const ExpensesSection = ({ expenses, onCreate, onUpdate, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [formData, setFormData] = useState({ category: '', amount: '', description: '' });

  const handleSave = async () => {
      const expenseData = {
          ...formData,
          amount: parseFloat(formData.amount)
      };
      if (editingExpense) {
          await onUpdate(editingExpense._id, expenseData);
      } else {
          await onCreate(expenseData);
      }
      resetForm();
  };

  const handleEdit = (expense) => {
      setEditingExpense(expense);
      setFormData({
          category: expense.category,
          amount: expense.amount.toString(),
          description: expense.description
      });
      setShowForm(true);
  };

  const resetForm = () => {
      setFormData({ category: '', amount: '', description: '' });
      setEditingExpense(null);
      setShowForm(false);
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
      <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Wallet className="mr-3" size={24} />
                    Expenses
                  </h3>
                  <p className="text-gray-600 mt-2 text-lg">Total: <span className="font-bold text-green-600">${totalExpenses.toFixed(2)}</span></p>
              </div>
              <motion.button
                  onClick={() => setShowForm(true)}
                  className="mt-4 md:mt-0 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
              >
                  <Plus className="mr-2" size={20} />
                  Add Expense
              </motion.button>
          </div>
          {showForm && (
              <motion.div 
                className="mb-8 p-6 border border-gray-200 rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                  <h4 className="text-xl font-semibold mb-4">{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                          type="text"
                          placeholder="Category"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                      />
                      <input
                          type="number"
                          placeholder="Amount"
                          step="0.01"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Description"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-4">
                      <motion.button
                          onClick={handleSave}
                          className="px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Save
                      </motion.button>
                      <motion.button
                          onClick={resetForm}
                          className="px-5 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Cancel
                      </motion.button>
                  </div>
              </motion.div>
          )}
          <div className="space-y-4">
              <AnimatePresence>
                {expenses.map((expense) => (
                    <motion.div 
                      key={expense._id} 
                      className="p-5 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">{expense.category}</h4>
                                <p className="text-gray-600 mt-1">{expense.description}</p>
                            </div>
                            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                <span className="text-2xl font-bold text-green-600">${expense.amount.toFixed(2)}</span>
                                <div className="flex space-x-2">
                                    <motion.button
                                        onClick={() => handleEdit(expense)}
                                        className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Edit size={20} />
                                    </motion.button>
                                    <motion.button
                                        onClick={() => onDelete(expense._id)}
                                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Trash2 size={20} />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
              </AnimatePresence>
          </div>
          {expenses.length === 0 && (
              <motion.div 
                className="text-center py-12 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                  <Wallet className="mx-auto mb-4 text-gray-300" size={48} />
                  <p className="text-xl">No expenses recorded yet</p>
              </motion.div>
          )}
      </div>
  );
};

// Companions Section Component
const CompanionsSection = ({ companions, onCreate, onUpdate, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingCompanion, setEditingCompanion] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', sharedExpenses: '' });

  const handleSave = async () => {
      const companionData = {
          ...formData,
          sharedExpenses: parseFloat(formData.sharedExpenses) || 0
      };
      if (editingCompanion) {
          await onUpdate(editingCompanion._id, companionData);
      } else {
          await onCreate(companionData);
      }
      resetForm();
  };

  const handleEdit = (companion) => {
      setEditingCompanion(companion);
      setFormData({
          name: companion.name,
          role: companion.role,
          sharedExpenses: companion.sharedExpenses.toString()
      });
      setShowForm(true);
  };

  const resetForm = () => {
      setFormData({ name: '', role: '', sharedExpenses: '' });
      setEditingCompanion(null);
      setShowForm(false);
  };

  return (
      <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="mr-3" size={24} />
                Travel Companions
              </h3>
              <motion.button
                  onClick={() => setShowForm(true)}
                  className="mt-4 md:mt-0 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
              >
                  <Plus className="mr-2" size={20} />
                  Add Companion
              </motion.button>
          </div>
          {showForm && (
              <motion.div 
                className="mb-8 p-6 border border-gray-200 rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                  <h4 className="text-xl font-semibold mb-4">{editingCompanion ? 'Edit Companion' : 'Add New Companion'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                          type="text"
                          placeholder="Name"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Role"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                      />
                      <input
                          type="number"
                          placeholder="Shared Expenses"
                          step="0.01"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.sharedExpenses}
                          onChange={(e) => setFormData({...formData, sharedExpenses: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-4">
                      <motion.button
                          onClick={handleSave}
                          className="px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Save
                      </motion.button>
                      <motion.button
                          onClick={resetForm}
                          className="px-5 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Cancel
                      </motion.button>
                  </div>
              </motion.div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {companions.map((companion) => (
                    <motion.div 
                      key={companion._id} 
                      className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">{companion.name}</h4>
                                <p className="text-gray-600 mt-1">{companion.role}</p>
                                <p className="text-sm text-green-600 mt-3 font-medium">
                                    Shared: ${companion.sharedExpenses.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <motion.button
                                    onClick={() => handleEdit(companion)}
                                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Edit size={20} />
                                </motion.button>
                                <motion.button
                                    onClick={() => onDelete(companion._id)}
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Trash2 size={20} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
              </AnimatePresence>
          </div>
          {companions.length === 0 && (
              <motion.div 
                className="text-center py-12 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                  <Users className="mx-auto mb-4 text-gray-300" size={48} />
                  <p className="text-xl">No companions added yet</p>
              </motion.div>
          )}
      </div>
  );
};

// Documents Section Component
const DocumentsSection = ({ documents, onCreate, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', type: '' });

  const handleSave = async () => {
      await onCreate({ ...formData, date: new Date().toISOString() });
      resetForm();
  };

  const resetForm = () => {
      setFormData({ name: '', type: '' });
      setShowForm(false);
  };

  return (
      <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="mr-3" size={24} />
                Travel Documents
              </h3>
              <motion.button
                  onClick={() => setShowForm(true)}
                  className="mt-4 md:mt-0 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
              >
                  <Plus className="mr-2" size={20} />
                  Add Document
              </motion.button>
          </div>
          {showForm && (
              <motion.div 
                className="mb-8 p-6 border border-gray-200 rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                  <h4 className="text-xl font-semibold mb-4">Add New Document</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                          type="text"
                          placeholder="Document Name"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Document Type"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-4">
                      <motion.button
                          onClick={handleSave}
                          className="px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Save
                      </motion.button>
                      <motion.button
                          onClick={resetForm}
                          className="px-5 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Cancel
                      </motion.button>
                  </div>
              </motion.div>
          )}
          <div className="space-y-4">
              <AnimatePresence>
                {documents.map((doc) => (
                    <motion.div 
                      key={doc._id} 
                      className="p-5 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">{doc.name}</h4>
                                <p className="text-gray-600 mt-1">{doc.type}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Added: {new Date(doc.date).toLocaleDateString()}
                                </p>
                            </div>
                            <motion.button
                                onClick={() => onDelete(doc._id)}
                                className="mt-4 md:mt-0 text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Trash2 size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
              </AnimatePresence>
          </div>
          {documents.length === 0 && (
              <motion.div 
                className="text-center py-12 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                  <FileText className="mx-auto mb-4 text-gray-300" size={48} />
                  <p className="text-xl">No documents added yet</p>
              </motion.div>
          )}
      </div>
  );
};

// Activities Section Component
const ActivitiesSection = ({ activities, onCreate, onUpdate, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);
  const [formData, setFormData] = useState({ time: '', activity: '', notes: '', day: '' });

  const handleSave = async () => {
      const activityData = {
          ...formData,
          day: parseInt(formData.day)
      };
      if (editingActivity) {
          await onUpdate(editingActivity._id, activityData);
      } else {
          await onCreate(activityData);
      }
      resetForm();
  };

  const handleEdit = (activity) => {
      setEditingActivity(activity);
      setFormData({
          time: activity.time,
          activity: activity.activity,
          notes: activity.notes,
          day: activity.day.toString()
      });
      setShowForm(true);
  };

  const resetForm = () => {
      setFormData({ time: '', activity: '', notes: '', day: '' });
      setEditingActivity(null);
      setShowForm(false);
  };

  // Group activities by day
  const groupedActivities = activities.reduce((groups, activity) => {
      const day = activity.day;
      if (!groups[day]) {
          groups[day] = [];
      }
      groups[day].push(activity);
      return groups;
  }, {});

  return (
      <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Calendar className="mr-3" size={24} />
                Itinerary
              </h3>
              <motion.button
                  onClick={() => setShowForm(true)}
                  className="mt-4 md:mt-0 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
              >
                  <Plus className="mr-2" size={20} />
                  Add Activity
              </motion.button>
          </div>
          {showForm && (
              <motion.div 
                className="mb-8 p-6 border border-gray-200 rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                  <h4 className="text-xl font-semibold mb-4">{editingActivity ? 'Edit Activity' : 'Add New Activity'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <input
                          type="text"
                          placeholder="Time (e.g., 09:00)"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        //   icon={<Clock size={20} className="text-gray-500" />}
                      />
                      <input
                          type="text"
                          placeholder="Activity"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.activity}
                          onChange={(e) => setFormData({...formData, activity: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Notes"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      />
                      <input
                          type="number"
                          placeholder="Day"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.day}
                          onChange={(e) => setFormData({...formData, day: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-4">
                      <motion.button
                          onClick={handleSave}
                          className="px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Save
                      </motion.button>
                      <motion.button
                          onClick={resetForm}
                          className="px-5 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                          Cancel
                      </motion.button>
                  </div>
              </motion.div>
          )}
          <div className="space-y-10">
              {Object.keys(groupedActivities).sort((a, b) => a - b).map((day) => (
                  <motion.div 
                    key={day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">Day {day}</h4>
                      <div className="space-y-4">
                          <AnimatePresence>
                            {groupedActivities[day].map((activity) => (
                                <motion.div 
                                  key={activity._id} 
                                  className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                >
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                        <div className="flex items-start">
                                            <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mr-6">
                                                <Clock size={20} className="text-gray-500" />
                                                <span className="font-bold text-blue-800 text-lg">{activity.time}</span>
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-semibold text-gray-900">{activity.activity}</h5>
                                                {activity.notes && (
                                                    <p className="text-gray-600 mt-2">{activity.notes}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 mt-4 md:mt-0">
                                            <motion.button
                                                onClick={() => handleEdit(activity)}
                                                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Edit size={20} />
                                            </motion.button>
                                            <motion.button
                                                onClick={() => onDelete(activity._id)}
                                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Trash2 size={20} />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                          </AnimatePresence>
                      </div>
                  </motion.div>
              ))}
          </div>
          {activities.length === 0 && (
              <motion.div 
                className="text-center py-12 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                  <Calendar className="mx-auto mb-4 text-gray-300" size={48} />
                  <p className="text-xl">No activities planned yet</p>
              </motion.div>
          )}
      </div>
  );
};