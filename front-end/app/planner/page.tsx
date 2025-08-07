"use client";

// app/App.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar,
  MapPin, 
  Suitcase, 
  DollarSign, 
  FileText, 
  Users, 
  Upload, 
  Plus, 
  Edit, 
  Trash2,
  CheckCircle,
  Move,
  Clock,
  Camera,
  ChevronRight,
  Star,
  Search,
  Filter,
  Home,
  User,
  Settings,
  Map
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTripModalVisible, setIsTripModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newActivity, setNewActivity] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [editingTrip, setEditingTrip] = useState(null);
  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "Summer in Italy 🇮🇹",
      dates: "Aug 5 - Aug 12, 2023",
      destinations: "Rome, Florence, Venice",
      status: "planning"
    },
    {
      id: 2,
      name: "Beach Vacation in Bali 🇮🇩",
      dates: "Sep 15 - Sep 22, 2023",
      destinations: "Bali, Ubud",
      status: "confirmed"
    },
    {
      id: 3,
      name: "Business Trip to Tokyo 🇯🇵",
      dates: "Oct 5 - Oct 10, 2023",
      destinations: "Tokyo",
      status: "in-progress"
    }
  ]);
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);

  // Mock data for selected trip
  const [packingItems, setPackingItems] = useState([
    { id: 1, name: 'Passport', packed: false },
    { id: 2, name: 'Flight tickets', packed: true },
    { id: 3, name: 'Camera', packed: false },
    { id: 4, name: 'Travel adapter', packed: false },
    { id: 5, name: 'Toothbrush', packed: false },
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Flights', amount: 850, description: 'Round-trip flight' },
    { id: 2, category: 'Accommodation', amount: 600, description: 'Hotel stay' },
    { id: 3, category: 'Food', amount: 300, description: 'Meals and snacks' },
    { id: 4, category: 'Activities', amount: 200, description: 'Colosseum tour' },
  ]);

  const [companions, setCompanions] = useState([
    { id: 1, name: 'Sarah Johnson', role: 'Accommodation', sharedExpenses: 150 },
    { id: 2, name: 'Michael Chen', role: 'Transportation', sharedExpenses: 80 },
    { id: 3, name: 'Emma Rodriguez', role: 'Activities', sharedExpenses: 120 },
  ]);

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Passport Scan', type: 'PDF', date: '2023-07-15' },
    { id: 2, name: 'Hotel Confirmation', type: 'PDF', date: '2023-07-20' },
    { id: 3, name: 'Flight E-ticket', type: 'PDF', date: '2023-07-10' },
  ]);

  const [itinerary, setItinerary] = useState([
    { 
      day: 1, 
      date: 'Aug 5', 
      activities: [
        { id: 1, time: '2:00 PM', activity: '✈️ Arrival in Rome', notes: '' },
        { id: 2, time: '3:30 PM', activity: '🏨 Check-in: Hotel Roma', notes: '' },
        { id: 3, time: '7:00 PM', activity: '🍝 Dinner at Trattoria', notes: '' },
      ]
    },
    { 
      day: 2, 
      date: 'Aug 6', 
      activities: [
        { id: 4, time: '9:00 AM', activity: '📍 Visit: Colosseum', notes: 'Book tickets online' },
        { id: 5, time: '12:00 PM', activity: '🍽️ Lunch at Pantheon', notes: '' },
        { id: 6, time: '3:00 PM', activity: '🏛️ Visit: Vatican Museums', notes: '' },
      ]
    },
    { 
      day: 3, 
      date: 'Aug 7', 
      activities: [
        { id: 7, time: '10:00 AM', activity: '🎨 Visit: Galleria Borghese', notes: '' },
        { id: 8, time: '2:00 PM', activity: '🚶‍♂️ Walking tour of Trastevere', notes: '' },
        { id: 9, time: '6:00 PM', activity: '🍷 Wine tasting', notes: '' },
      ]
    }
  ]);

  const [newTrip, setNewTrip] = useState({
    name: '',
    dates: '',
    destinations: ''
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newActivity && selectedDate) {
      // Add new activity logic here
    }
    setIsModalVisible(false);
    setNewActivity('');
    setNewTime('');
    setNewNotes('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewActivity('');
    setNewTime('');
    setNewNotes('');
  };

  const handleTripOk = () => {
    if (newTrip.name && newTrip.dates && newTrip.destinations) {
      const trip = {
        id: Date.now(),
        ...newTrip,
        status: 'planning'
      };
      setTrips([...trips, trip]);
      setNewTrip({ name: '', dates: '', destinations: '' });
      setIsTripModalVisible(false);
    }
  };

  const handleTripCancel = () => {
    setIsTripModalVisible(false);
    setNewTrip({ name: '', dates: '', destinations: '' });
  };

  const togglePacked = (id) => {
    setPackingItems(packingItems.map(item => 
      item.id === id ? { ...item, packed: !item.packed } : item
    ));
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
    if (selectedTrip.id === id) {
      setSelectedTrip(trips.find(trip => trip.id !== id) || trips[0]);
    }
  };

  const updateTrip = (id, updates) => {
    setTrips(trips.map(trip => 
      trip.id === id ? { ...trip, ...updates } : trip
    ));
  };

  const totalBudget = 2500;
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = totalBudget - totalSpent;

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button 
          onClick={() => setIsTripModalVisible(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} className="mr-1" />
          New Trip
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-100">Active Trips</p>
              <p className="text-3xl font-bold mt-2">{trips.length}</p>
            </div>
            <Home size={32} className="text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-green-100">Upcoming</p>
              <p className="text-3xl font-bold mt-2">2</p>
            </div>
            <Calendar size={32} className="text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-purple-100">Budget</p>
              <p className="text-3xl font-bold mt-2">${remainingBudget}</p>
            </div>
            <DollarSign size={32} className="text-purple-200" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Trips</h2>
        <div className="space-y-4">
          {trips.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">{trip.name}</h3>
                  <p className="text-sm text-gray-500">{trip.destinations} • {trip.dates}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  trip.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                  trip.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {trip.status}
                </span>
                <button 
                  onClick={() => setSelectedTrip(trip)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderItinerary = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Itinerary</h2>
        <button 
          onClick={showModal}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} className="mr-1" />
          Add Activity
        </button>
      </div>
      
      {itinerary.map((day) => (
        <div key={day.day} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Calendar className="mr-2 text-blue-500" size={20} />
              Day {day.day} ({day.date})
            </h3>
          </div>
          
          <div className="space-y-4">
            {day.activities.map((activity) => (
              <div key={activity.id} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <Clock className="text-blue-500" size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium">{activity.time}</p>
                    <Move className="text-gray-400 cursor-move" size={16} />
                  </div>
                  <p className="text-gray-700 mt-1">{activity.activity}</p>
                  {activity.notes && (
                    <p className="text-sm text-gray-500 mt-1">{activity.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMap = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <MapPin className="mr-2 text-blue-500" size={20} />
          Interactive Map
        </h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm">Satellite</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm">Terrain</button>
        </div>
      </div>
      
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-4xl text-blue-500 mx-auto mb-2" />
            <p className="text-gray-600">Google Maps Integration</p>
            <p className="text-sm text-gray-500 mt-2">Locations: Rome, Florence, Venice</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Map markers simulation */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
        
        {/* Route line simulation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path 
            d="M 25% 25% Q 50% 30% 75% 33%" 
            stroke="#3b82f6" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="5,5"
          />
        </svg>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Rome</h4>
          <p className="text-sm text-gray-600">Colosseum, Vatican City</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Florence</h4>
          <p className="text-sm text-gray-600">Uffizi Gallery, Duomo</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Venice</h4>
          <p className="text-sm text-gray-600">St. Mark's Square, Grand Canal</p>
        </div>
      </div>
    </div>
  );

  const renderPackingList = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          {/* <Suitcase className="mr-2 text-blue-500" size={20} /> */}
          Packing Checklist
        </h2>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus size={16} className="mr-1" />
          Add Item
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          {packingItems.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <input 
                type="checkbox" 
                checked={item.packed}
                onChange={() => togglePacked(item.id)}
                className="mr-3 h-5 w-5 text-blue-500 rounded"
              />
              <span className={`${item.packed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="space-y-3">
          {packingItems.slice(3).map((item) => (
            <div key={item.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <input 
                type="checkbox" 
                checked={item.packed}
                onChange={() => togglePacked(item.id)}
                className="mr-3 h-5 w-5 text-blue-500 rounded"
              />
              <span className={`${item.packed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-medium mb-3">Suggested Items:</h3>
        <div className="flex flex-wrap gap-2">
          {['Sunscreen', 'Chargers', 'Medications', 'Travel guide', 'Reusable water bottle', 'Power bank', 'Travel pillow'].map((item, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer hover:bg-blue-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBudget = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <DollarSign className="mr-2 text-blue-500" size={20} />
          Budget Tracker
        </h2>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus size={16} className="mr-1" />
          Add Expense
        </button>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Total Budget</span>
          <span className="font-medium">${totalBudget}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Spent</span>
          <span className="font-medium text-red-500">${totalSpent}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-medium">Remaining</span>
          <span className={`font-medium ${remainingBudget >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            ${remainingBudget}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full" 
            style={{ width: `${Math.min(100, (totalSpent / totalBudget) * 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-medium">Recent Expenses</h3>
        {expenses.map((expense) => (
          <div key={expense.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{expense.description}</p>
              <p className="text-sm text-gray-500">{expense.category}</p>
            </div>
            <span className="font-medium">${expense.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotes = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold flex items-center mb-6">
        <FileText className="mr-2 text-blue-500" size={20} />
        Travel Notes & Journal
      </h2>
      <div className="space-y-4">
        <textarea 
          className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Plan your trip, add tips, or journal your experiences..."
        ></textarea>
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );

  const renderCompanions = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <Users className="mr-2 text-blue-500" size={20} />
          Travel Companions
        </h2>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus size={16} className="mr-1" />
          Add Person
        </button>
      </div>
      
      <div className="space-y-4">
        {companions.map((companion) => (
          <div key={companion.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              {companion.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{companion.name}</h3>
              <p className="text-sm text-gray-500">{companion.role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Shared: <span className="font-medium">${companion.sharedExpenses}</span></p>
              <div className="flex items-center justify-end mt-1">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-xs text-gray-500 ml-1">3</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <FileText className="mr-2 text-blue-500" size={20} />
          Documents & Tickets
        </h2>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Upload size={16} className="mr-1" />
          Upload
        </button>
      </div>
      
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
            <FileText className="text-blue-500 mr-3" size={24} />
            <div className="flex-1">
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-gray-500">{doc.type} • Uploaded {doc.date}</p>
            </div>
            <button className="flex items-center text-blue-500 hover:text-blue-700">
              <Camera size={16} className="mr-1" />
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                <Map />
              </div>
              {/* <h1 className="text-xl font-bold text-gray-900">Planner</h1> */}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search trips..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Plus size={16} className="mr-1" />
                New Trip
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={20} className="text-gray-600" />
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Home size={18} className="mr-3" />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'itinerary' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Calendar size={18} className="mr-3" />
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'map' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MapPin size={18} className="mr-3" />
                  Map
                </button>
                <button
                  onClick={() => setActiveTab('packing')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'packing' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {/* <Suitcase size={18} className="mr-3" /> */}
                  Packing
                </button>
                <button
                  onClick={() => setActiveTab('budget')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'budget' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <DollarSign size={18} className="mr-3" />
                  Budget
                </button>
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'notes' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText size={18} className="mr-3" />
                  Notes
                </button>
                <button
                  onClick={() => setActiveTab('companions')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'companions' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Users size={18} className="mr-3" />
                  Companions
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'documents' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText size={18} className="mr-3" />
                  Documents
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings size={18} className="mr-3" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Trip Selector */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{selectedTrip.name}</h1>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center">
                      <Calendar className="text-blue-500 mr-2" size={16} />
                      <span className="text-gray-600">{selectedTrip.dates}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-blue-500 mr-2" size={16} />
                      <span className="text-gray-600">{selectedTrip.destinations}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit size={16} className="mr-1" />
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteTrip(selectedTrip.id)}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'itinerary' && renderItinerary()}
              {activeTab === 'map' && renderMap()}
              {activeTab === 'packing' && renderPackingList()}
              {activeTab === 'budget' && renderBudget()}
              {activeTab === 'notes' && renderNotes()}
              {activeTab === 'companions' && renderCompanions()}
              {activeTab === 'documents' && renderDocuments()}
            </div>
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Add New Activity</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                <input
                  type="text"
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What are you doing?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 2:00 PM"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add any notes..."
                  rows="3"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleOk}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Activity
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Trip Modal */}
      {isTripModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Create New Trip</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trip Name</label>
                <input
                  type="text"
                  value={newTrip.name}
                  onChange={(e) => setNewTrip({...newTrip, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Summer in Italy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                <input
                  type="text"
                  value={newTrip.dates}
                  onChange={(e) => setNewTrip({...newTrip, dates: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Aug 5 - Aug 12, 2023"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destinations</label>
                <input
                  type="text"
                  value={newTrip.destinations}
                  onChange={(e) => setNewTrip({...newTrip, destinations: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Rome, Florence, Venice"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleTripCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleTripOk}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Create Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
