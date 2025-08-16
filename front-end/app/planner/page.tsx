// Okay, I understand. You want a single Next.js page file that replicates the functionality and UI of the provided HTML/JSX example. Here is the converted Next.js page:

// ```jsx
// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

// API Service
const apiService = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api` || 'http://localhost:3000/api',

  async request(endpoint, method = 'GET', data = null) {
      const options = {
          method,
          headers: {
              'Content-Type': 'application/json',
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

// Main App Component
export default function TravelPlanner() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load trips on mount
  useEffect(() => {
      loadTrips();
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
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-2xl text-blue-600">Loading...</div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Travel Planner MVP</title>
        <meta name="description" content="Plan your perfect journey" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <style jsx global>{`
          .fade-in {
              animation: fadeIn 0.3s ease-in;
          }
          @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .tab-active {
              border-bottom: 3px solid #3b82f6;
              color: #3b82f6;
          }
        `}</style>
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Travel Planner</h1>
              <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                      <i className="fas fa-bell text-gray-600"></i>
                  </button>
                  <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <i className="fas fa-user"></i>
                      </div>
                      <span className="ml-2 text-gray-700">User</span>
                  </div>
              </div>
          </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-8">
                  <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                      Dashboard
                  </button>
                  {selectedTrip && (
                      <button
                          onClick={() => setActiveTab('trip-details')}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'trip-details' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                          {selectedTrip.name}
                      </button>
                  )}
              </div>
          </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {error}
                  <button 
                      onClick={() => setError(null)}
                      className="float-right text-red-500 hover:text-red-700"
                  >
                      <i className="fas fa-times"></i>
                  </button>
              </div>
          )}

          {activeTab === 'dashboard' && (
              <Dashboard 
                  trips={trips} 
                  onSelectTrip={handleSelectTrip}
                  onCreateTrip={handleCreateTrip}
                  onUpdateTrip={handleUpdateTrip}
                  onDeleteTrip={handleDeleteTrip}
              />
          )}

          {activeTab === 'trip-details' && selectedTrip && (
              <TripDetails 
                  trip={selectedTrip}
                  onUpdateTrip={handleUpdateTrip}
                  onBack={() => setActiveTab('dashboard')}
              />
          )}
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
      <div className="fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                  <h2 className="text-2xl font-bold text-gray-900">My Trips</h2>
                  <p className="mt-1 text-gray-600">Plan and organize your travels</p>
              </div>
              <button
                  onClick={() => setShowModal(true)}
                  className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                  <i className="fas fa-plus mr-2"></i>
                  New Trip
              </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-lg">
                          <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                      </div>
                      <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Total Trips</p>
                          <p className="text-2xl font-semibold">{trips.length}</p>
                      </div>
                  </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-lg">
                          <i className="fas fa-check-circle text-green-600 text-xl"></i>
                      </div>
                      <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Confirmed</p>
                          <p className="text-2xl font-semibold">{trips.filter(t => t.status === 'confirmed').length}</p>
                      </div>
                  </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                          <i className="fas fa-calendar-alt text-yellow-600 text-xl"></i>
                      </div>
                      <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Planning</p>
                          <p className="text-2xl font-semibold">{trips.filter(t => t.status === 'planning').length}</p>
                      </div>
                  </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                      <div className="p-3 bg-purple-100 rounded-lg">
                          <i className="fas fa-route text-purple-600 text-xl"></i>
                      </div>
                      <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">In Progress</p>
                          <p className="text-2xl font-semibold">{trips.filter(t => t.status === 'in-progress').length}</p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-gray-400"></i>
                  </div>
                  <input
                      type="text"
                      placeholder="Search trips..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
              </div>
              <select
                  className="block w-full md:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
              >
                  <option value="all">All Statuses</option>
                  <option value="planning">Planning</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="in-progress">In Progress</option>
              </select>
          </div>

          {/* Trips List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrips.map((trip) => (
                  <div key={trip._id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                      <div className="p-6">
                          <div className="flex justify-between items-start">
                              <div>
                                  <h3 className="text-lg font-semibold text-gray-900">{trip.name}</h3>
                                  <p className="text-gray-600 mt-1">{trip.destinations}</p>
                              </div>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                  trip.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                  trip.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-blue-100 text-blue-800'
                              }`}>
                                  {trip.status}
                              </span>
                          </div>
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                              <i className="far fa-calendar-alt mr-2"></i>
                              {trip.dates}
                          </div>
                          <div className="mt-6 flex justify-between">
                              <button
                                  onClick={() => onSelectTrip(trip)}
                                  className="text-blue-600 hover:text-blue-800 flex items-center"
                              >
                                  <i className="fas fa-eye mr-1"></i> View
                              </button>
                              <div className="flex space-x-2">
                                  <button
                                      onClick={() => handleEditTrip(trip)}
                                      className="text-gray-500 hover:text-gray-700"
                                  >
                                      <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                      onClick={() => onDeleteTrip(trip._id)}
                                      className="text-red-500 hover:text-red-700"
                                  >
                                      <i className="fas fa-trash"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {filteredTrips.length === 0 && (
              <div className="text-center py-12">
                  <i className="fas fa-map-marked-alt text-gray-300 text-5xl mb-4"></i>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No trips found</h3>
                  <p className="text-gray-500">Create your first trip to get started</p>
              </div>
          )}

          {/* Trip Modal */}
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
      </div>
  );
};

// Trip Modal Component
const TripModal = ({ trip, onSave, onClose }) => {
  const [formData, setFormData] = useState({
      name: trip?.name || '',
      dates: trip?.dates || '',
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
      onSave(formData);
  };

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                          {trip ? 'Edit Trip' : 'Create New Trip'}
                      </h3>
                      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                          <i className="fas fa-times"></i>
                      </button>
                  </div>
                  <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Trip Name</label>
                              <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                  required
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                              <input
                                  type="text"
                                  name="dates"
                                  value={formData.dates}
                                  onChange={handleChange}
                                  placeholder="e.g., 2023-06-15 to 2023-06-25"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                  required
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Destinations</label>
                              <input
                                  type="text"
                                  name="destinations"
                                  value={formData.destinations}
                                  onChange={handleChange}
                                  placeholder="e.g., Paris, Rome, Barcelona"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                  required
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                              <select
                                  name="status"
                                  value={formData.status}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                              >
                                  <option value="planning">Planning</option>
                                  <option value="confirmed">Confirmed</option>
                                  <option value="in-progress">In Progress</option>
                              </select>
                          </div>
                      </div>
                      <div className="mt-6 flex justify-end space-x-3">
                          <button
                              type="button"
                              onClick={onClose}
                              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                          >
                              Cancel
                          </button>
                          <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                              {trip ? 'Update' : 'Create'}
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
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
          <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
      );
  }

  return (
      <div className="fade-in">
          <div className="mb-6">
              <button
                  onClick={onBack}
                  className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
              >
                  <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
              </button>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                      <h2 className="text-2xl font-bold text-gray-900">{trip.name}</h2>
                      <div className="flex items-center mt-2 text-gray-600">
                          <i className="far fa-calendar-alt mr-2"></i>
                          <span>{trip.dates}</span>
                          <span className="mx-2">•</span>
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          <span>{trip.destinations}</span>
                      </div>
                  </div>
                  <span className={`mt-4 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                      trip.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      trip.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                  }`}>
                      {trip.status.replace('-', ' ')}
                  </span>
              </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                  {['packing', 'expenses', 'companions', 'documents', 'activities'].map((section) => (
                      <button
                          key={section}
                          onClick={() => setActiveSection(section)}
                          className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                              activeSection === section
                                  ? 'border-blue-500 text-blue-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                      >
                          {section}
                      </button>
                  ))}
              </nav>
          </div>

          {/* Section Content */}
          <div className="bg-white rounded-lg shadow p-6">
              {activeSection === 'packing' && (
                  <PackingSection
                      items={packingItems}
                      onCreate={handleCreatePackingItem}
                      onUpdate={handleUpdatePackingItem}
                      onDelete={handleDeletePackingItem}
                  />
              )}

              {activeSection === 'expenses' && (
                  <ExpensesSection
                      expenses={expenses}
                      onCreate={handleCreateExpense}
                      onUpdate={handleUpdateExpense}
                      onDelete={handleDeleteExpense}
                  />
              )}

              {activeSection === 'companions' && (
                  <CompanionsSection
                      companions={companions}
                      onCreate={handleCreateCompanion}
                      onUpdate={handleUpdateCompanion}
                      onDelete={handleDeleteCompanion}
                  />
              )}

              {activeSection === 'documents' && (
                  <DocumentsSection
                      documents={documents}
                      onCreate={handleCreateDocument}
                      onDelete={handleDeleteDocument}
                  />
              )}

              {activeSection === 'activities' && (
                  <ActivitiesSection
                      activities={activities}
                      onCreate={handleCreateActivity}
                      onUpdate={handleUpdateActivity}
                      onDelete={handleDeleteActivity}
                  />
              )}
          </div>
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
          <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Packing List</h3>
              <button
                  onClick={() => setShowForm(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                  <i className="fas fa-plus mr-2"></i> Add Item
              </button>
          </div>

          {showForm && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">{editingItem ? 'Edit Item' : 'Add New Item'}</h4>
                  <div className="flex gap-3">
                      <input
                          type="text"
                          placeholder="Item name"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <label className="flex items-center">
                          <input
                              type="checkbox"
                              className="rounded text-blue-600 focus:ring-blue-500"
                              checked={formData.packed}
                              onChange={(e) => setFormData({...formData, packed: e.target.checked})}
                          />
                          <span className="ml-2 text-gray-700">Packed</span>
                      </label>
                      <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                          Save
                      </button>
                      <button
                          onClick={resetForm}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                          Cancel
                      </button>
                  </div>
              </div>
          )}

          <div className="space-y-3">
              {items.map((item) => (
                  <div key={item._id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                          <button
                              onClick={() => togglePacked(item)}
                              className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center ${
                                  item.packed 
                                      ? 'bg-green-500 border-green-500 text-white' 
                                      : 'border-gray-300'
                              }`}
                          >
                              {item.packed && <i className="fas fa-check text-xs"></i>}
                          </button>
                          <span className={item.packed ? 'line-through text-gray-500' : 'text-gray-900'}>
                              {item.name}
                          </span>
                      </div>
                      <div className="flex space-x-2">
                          <button
                              onClick={() => handleEdit(item)}
                              className="text-gray-500 hover:text-gray-700"
                          >
                              <i className="fas fa-edit"></i>
                          </button>
                          <button
                              onClick={() => onDelete(item._id)}
                              className="text-red-500 hover:text-red-700"
                          >
                              <i className="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
              ))}
          </div>

          {items.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-suitcase text-3xl mb-2"></i>
                  <p>No packing items yet</p>
              </div>
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
          <div className="flex justify-between items-center mb-6">
              <div>
                  <h3 className="text-lg font-medium text-gray-900">Expenses</h3>
                  <p className="text-gray-600">Total: ${totalExpenses.toFixed(2)}</p>
              </div>
              <button
                  onClick={() => setShowForm(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                  <i className="fas fa-plus mr-2"></i> Add Expense
              </button>
          </div>

          {showForm && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                          type="text"
                          placeholder="Category"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                      />
                      <input
                          type="number"
                          placeholder="Amount"
                          step="0.01"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Description"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-3">
                      <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                          Save
                      </button>
                      <button
                          onClick={resetForm}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                          Cancel
                      </button>
                  </div>
              </div>
          )}

          <div className="space-y-3">
              {expenses.map((expense) => (
                  <div key={expense._id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center">
                          <div>
                              <h4 className="font-medium text-gray-900">{expense.category}</h4>
                              <p className="text-gray-600">{expense.description}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                              <span className="font-semibold text-green-600">${expense.amount.toFixed(2)}</span>
                              <div className="flex space-x-2">
                                  <button
                                      onClick={() => handleEdit(expense)}
                                      className="text-gray-500 hover:text-gray-700"
                                  >
                                      <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                      onClick={() => onDelete(expense._id)}
                                      className="text-red-500 hover:text-red-700"
                                  >
                                      <i className="fas fa-trash"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {expenses.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-wallet text-3xl mb-2"></i>
                  <p>No expenses recorded yet</p>
              </div>
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
          <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Travel Companions</h3>
              <button
                  onClick={() => setShowForm(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                  <i className="fas fa-plus mr-2"></i> Add Companion
              </button>
          </div>

          {showForm && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">{editingCompanion ? 'Edit Companion' : 'Add New Companion'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                          type="text"
                          placeholder="Name"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Role"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                      />
                      <input
                          type="number"
                          placeholder="Shared Expenses"
                          step="0.01"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.sharedExpenses}
                          onChange={(e) => setFormData({...formData, sharedExpenses: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-3">
                      <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                          Save
                      </button>
                      <button
                          onClick={resetForm}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                          Cancel
                      </button>
                  </div>
              </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companions.map((companion) => (
                  <div key={companion._id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start">
                          <div>
                              <h4 className="font-medium text-gray-900">{companion.name}</h4>
                              <p className="text-gray-600">{companion.role}</p>
                              <p className="text-sm text-green-600 mt-1">
                                  Shared: ${companion.sharedExpenses.toFixed(2)}
                              </p>
                          </div>
                          <div className="flex space-x-2">
                              <button
                                  onClick={() => handleEdit(companion)}
                                  className="text-gray-500 hover:text-gray-700"
                              >
                                  <i className="fas fa-edit"></i>
                              </button>
                              <button
                                  onClick={() => onDelete(companion._id)}
                                  className="text-red-500 hover:text-red-700"
                              >
                                  <i className="fas fa-trash"></i>
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {companions.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-users text-3xl mb-2"></i>
                  <p>No companions added yet</p>
              </div>
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
          <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Travel Documents</h3>
              <button
                  onClick={() => setShowForm(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                  <i className="fas fa-plus mr-2"></i> Add Document
              </button>
          </div>

          {showForm && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">Add New Document</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                          type="text"
                          placeholder="Document Name"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Document Type"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-3">
                      <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                          Save
                      </button>
                      <button
                          onClick={resetForm}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                          Cancel
                      </button>
                  </div>
              </div>
          )}

          <div className="space-y-3">
              {documents.map((doc) => (
                  <div key={doc._id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center">
                          <div>
                              <h4 className="font-medium text-gray-900">{doc.name}</h4>
                              <p className="text-gray-600">{doc.type}</p>
                              <p className="text-sm text-gray-500 mt-1">
                                  Added: {new Date(doc.date).toLocaleDateString()}
                              </p>
                          </div>
                          <button
                              onClick={() => onDelete(doc._id)}
                              className="text-red-500 hover:text-red-700"
                          >
                              <i className="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
              ))}
          </div>

          {documents.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-file-alt text-3xl mb-2"></i>
                  <p>No documents added yet</p>
              </div>
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
          <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Itinerary</h3>
              <button
                  onClick={() => setShowForm(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                  <i className="fas fa-plus mr-2"></i> Add Activity
              </button>
          </div>

          {showForm && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">{editingActivity ? 'Edit Activity' : 'Add New Activity'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      <input
                          type="text"
                          placeholder="Time (e.g., 09:00)"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Activity"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.activity}
                          onChange={(e) => setFormData({...formData, activity: e.target.value})}
                      />
                      <input
                          type="text"
                          placeholder="Notes"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      />
                      <input
                          type="number"
                          placeholder="Day"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.day}
                          onChange={(e) => setFormData({...formData, day: e.target.value})}
                      />
                  </div>
                  <div className="flex gap-3 mt-3">
                      <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                          Save
                      </button>
                      <button
                          onClick={resetForm}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                          Cancel
                      </button>
                  </div>
              </div>
          )}

          <div className="space-y-8">
              {Object.keys(groupedActivities).sort((a, b) => a - b).map((day) => (
                  <div key={day}>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Day {day}</h4>
                      <div className="space-y-3">
                          {groupedActivities[day].map((activity) => (
                              <div key={activity._id} className="p-4 border border-gray-200 rounded-lg">
                                  <div className="flex justify-between items-start">
                                      <div className="flex items-start">
                                          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                              <span className="font-medium text-blue-800">{activity.time}</span>
                                          </div>
                                          <div>
                                              <h5 className="font-medium text-gray-900">{activity.activity}</h5>
                                              {activity.notes && (
                                                  <p className="text-gray-600 mt-1">{activity.notes}</p>
                                              )}
                                          </div>
                                      </div>
                                      <div className="flex space-x-2">
                                          <button
                                              onClick={() => handleEdit(activity)}
                                              className="text-gray-500 hover:text-gray-700"
                                          >
                                              <i className="fas fa-edit"></i>
                                          </button>
                                          <button
                                              onClick={() => onDelete(activity._id)}
                                              className="text-red-500 hover:text-red-700"
                                          >
                                              <i className="fas fa-trash"></i>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>

          {activities.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-calendar-alt text-3xl mb-2"></i>
                  <p>No activities planned yet</p>
              </div>
          )}
      </div>
  );
};
// ```