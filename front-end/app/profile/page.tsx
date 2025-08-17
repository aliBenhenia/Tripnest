"use client";
import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Heart, MapPin, Calendar, Star, Camera, Settings, User, Globe, Award, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setUserSuccess } from '@/lib/redux/slices/userSlice';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Skeleton Components
const ProfileSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
        <div className="h-32 w-32 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-3">
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-20 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
      <div className="h-20 bg-gray-300 rounded-lg"></div>
    </div>
  </div>
);

const SavedItemsSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-300 rounded-xl h-64"></div>
        ))}
      </div>
    </div>
  </div>
);

const StatsSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[1, 2].map(i => (
          <div key={i} className="h-24 bg-gray-300 rounded-xl"></div>
        ))}
      </div>
      <div className="h-32 bg-gray-300 rounded-xl mb-6"></div>
      <div className="space-y-4">
        {[1, 2].map(i => (
          <div key={i} className="h-4 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  </div>
);

export default function ProfilePage() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('TOKEN_KEY') : null; 
  const [user, setUser] = useState({
    username: 'ali benhnenia',
    bio: 'Adventure seeker exploring the world one destination at a time. Love hiking, photography, and local cuisine.',
    avatar: 'default-avatar.png',
    createdAt: 'January 2023',
    totalTrips: 12,
    favoriteDestinations: ['Paris', 'Tokyo', 'New York'],
    achievements: ['First Trip', 'Explorer', 'Photographer'],
    followers: 1247,
    following: 892,
  });
  
  const [savedItems, setSavedItems] = useState([
    { id: 1, title: 'Eiffel Tower', location: 'Paris, France', rating: 4.8, image: 'https://placehold.co/300x200/4F46E5/FFFFFF?text=Eiffel+Tower' },
    { id: 2, title: 'Tokyo Skyline', location: 'Tokyo, Japan', rating: 4.9, image: 'https://placehold.co/300x200/EC4899/FFFFFF?text=Tokyo+Skyline' },
    { id: 3, title: 'Central Park', location: 'New York, USA', rating: 4.7, image: 'https://placehold.co/300x200/10B981/FFFFFF?text=Central+Park' }
  ]);
  
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [serverError, setServerError] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [initialLoading, setInitialLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      fetchUserProfile();
      setUsername(user.username);
      setBio(user.bio);
    } else {
      setServerError(true);
      setInitialLoading(false);
      console.error("No token found. Please log in.");
      window.location.href = '/auth/login';
    }
  }, []); 

  const fetchUserProfile = async () => {
    try {
      const res = await fetch(`${API_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) throw new Error('Failed to fetch profile');

      const data = await res.json();
      const userData = data.data.user;
      
      if (userData.avatar) {
        setAvatarPreview(`${API_URL}${userData.avatar}`);
      } else {
        setAvatarPreview(null);
      }

      setUser(prev => ({ ...prev, ...userData }));
      setUsername(userData.username || '');
      setBio(userData.bio || '');
      dispatch(setUserSuccess(userData));
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setServerError(true);
    } finally {
      setInitialLoading(false);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!token || !user) {
      return;
    }
    
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('bio', bio);
      if (avatarPreview && avatarPreview.startsWith('data:')) {
        const response = await fetch(avatarPreview);
        const blob = await response.blob();
        formData.append('avatar', blob, 'avatar.png');
      }
      
      const response = await axios.patch(`${API_URL}/api/users/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      
      const updatedUser = response.data.data.user;
      setUser(prev => ({ ...prev, ...updatedUser }));
      setUsername(updatedUser.username || '');
      setBio(updatedUser.bio || '');
      if (updatedUser.avatar) {
        setAvatarPreview(`${API_URL}${updatedUser.avatar}`);
      } else {
        setAvatarPreview(null);
      }
      dispatch(setUserSuccess(updatedUser));
      setEditMode(false);
    } catch (error) {
      console.log("=> ", error);
      if (error.response && error.response.status === 401) {
      } else if (error.response && error.response.status === 500) {
      } else if (error.response && error.response.data) {
      } else {
        console.error("Error updating profile:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const avatarSrc = avatarPreview || 
    `https://placehold.co/100x100/6366F1/FFFFFF?text=${user.username.charAt(0).toUpperCase()}`;

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
          
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === 'profile' && <ProfileSkeleton />}
              {activeTab === 'saved' && <SavedItemsSkeleton />}
              {activeTab === 'stats' && <StatsSkeleton />}
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-6 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="h-10 bg-gray-300 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Travel Profile
          </h1>
          <p className="text-gray-600 text-lg">Manage your travel adventures and saved destinations</p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-xl mb-8 w-fit"
        >
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'saved', label: 'Saved Places', icon: Heart },
            { id: 'stats', label: 'Travel Stats', icon: TrendingUp }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-white shadow-lg text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {serverError ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-200 rounded-2xl shadow-lg p-6 mb-6"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="text-red-500" size={24} />
                <div>
                  <h2 className="text-xl font-semibold text-red-700 mb-1">Server Connection Error</h2>
                  <p className="text-red-600 mb-4">We're having trouble connecting to the server.</p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setServerError(false)}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    Retry Connection
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {activeTab === 'profile' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                  >
                    {editMode ? (
                      <form onSubmit={handleUpdateProfile} className="space-y-6">
                        <div className="flex flex-col items-center mb-6">
                          <div className="relative group">
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg"
                            >
                              <img
                                src={avatarSrc}
                                alt={user?.username || "Profile"}
                                className="h-full w-full object-cover"
                              />
                            </motion.div>
                            <label htmlFor="avatar-upload" className="absolute bottom-2 right-2 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-lg group-hover:scale-110">
                              <Camera size={18} />
                            </label>
                            <input 
                              id="avatar-upload" 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={handleAvatarChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name
                            </label>
                            <input
                              id="username" 
                              value={username} 
                              onChange={(e) => setUsername(e.target.value)} 
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                              required 
                            />
                          </div>
                          <div>
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                              Bio
                            </label>
                            <textarea
                              id="bio" 
                              value={bio} 
                              onChange={(e) => setBio(e.target.value)} 
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm resize-none"
                            />
                          </div>
                        </div>

                        <div className="flex space-x-3 pt-4">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                          >
                            {loading ? (
                              <>
                                <Loader2 className="animate-spin" size={18} />
                                <span>Saving...</span>
                              </>
                            ) : (
                              <>
                                <Save size={18} />
                                <span>Save Changes</span>
                              </>
                            )}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button" 
                            onClick={() => setEditMode(false)}
                            className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors shadow-lg"
                          >
                            <X size={18} />
                            <span>Cancel</span>
                          </motion.button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="relative"
                          >
                            <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
                              <img
                                src={avatarSrc}
                                alt={user?.username || "Profile"}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{user?.username}</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">{user?.bio}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
                                <Calendar size={16} />
                                <span>
                                  Joined {new Date(user?.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long'
                                  })}
                                </span>
                              </span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setEditMode(true)}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                          >
                            <Edit3 size={18} />
                            <span className="hidden sm:inline">Edit Profile</span>
                          </motion.button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          {[
                            { icon: MapPin, label: 'Total Trips', value: user?.totalTrips, color: 'from-blue-50 to-indigo-50', textColor: 'text-blue-600' },
                            { icon: Star, label: 'Favorites', value: savedItems.length, color: 'from-green-50 to-emerald-50', textColor: 'text-green-600' },
                            { icon: Award, label: 'Achievements', value: user?.achievements.length, color: 'from-purple-50 to-pink-50', textColor: 'text-purple-600' }
                          ].map((stat, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              className={`bg-gradient-to-r ${stat.color} p-5 rounded-xl shadow-lg`}
                            >
                              <div className="flex items-center space-x-3 mb-2">
                                <stat.icon className={stat.textColor} size={24} />
                                <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                              </div>
                              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="border-t pt-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Stats</h3>
                          <div className="flex space-x-8">
                            <div className="text-center">
                              <p className="text-3xl font-bold text-gray-900">{user?.followers?.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Followers</p>
                            </div>
                            <div className="text-center">
                              <p className="text-3xl font-bold text-gray-900">{user?.following?.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Following</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                {activeTab === 'saved' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Saved Destinations</h2>
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full">
                        <Heart size={20} className="text-red-500" />
                        <span className="font-medium text-gray-700">{savedItems.length} Saved</span>
                      </div>
                    </div>

                    {savedItems.length === 0 ? (
                      <div className="text-center py-16">
                        <Heart size={64} className="mx-auto text-gray-300 mb-6" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">No saved destinations yet</h3>
                        <p className="text-gray-600 mb-6">Start saving your favorite travel spots!</p>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg font-medium"
                        >
                          Explore Destinations
                        </motion.button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedItems.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                          >
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-5">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                <div className="flex items-center space-x-1 text-yellow-500">
                                  <Star size={16} fill="currentColor" />
                                  <span className="text-sm font-semibold">{item.rating}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                                <MapPin size={14} />
                                <span className="text-sm">{item.location}</span>
                              </div>
                              <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium shadow-lg"
                              >
                                View Details
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'stats' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Travel Statistics</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900">Countries Visited</h3>
                          <Globe className="text-blue-600" size={28} />
                        </div>
                        <p className="text-4xl font-bold text-blue-600 mb-2">15</p>
                        <p className="text-gray-600 text-sm">Explore more destinations!</p>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900">Favorite Destinations</h3>
                          <Star className="text-green-600" size={28} />
                        </div>
                        <p className="text-4xl font-bold text-green-600 mb-2">{user?.favoriteDestinations.length}</p>
                        <p className="text-gray-600 text-sm">Based on your saved places</p>
                      </motion.div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 mb-6">Recent Achievements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {user?.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl text-center shadow-lg"
                          >
                            <Award className="mx-auto text-purple-600 mb-3" size={28} />
                            <p className="font-semibold text-gray-900">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-6">Travel Progress</h3>
                      <div className="space-y-6">
                        {[
                          { label: 'Trip Completion', value: 75, color: 'bg-blue-600' },
                          { label: 'Photo Uploads', value: 42, color: 'bg-green-600' }
                        ].map((progress, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{progress.label}</span>
                              <span className="text-sm font-medium text-gray-700">{progress.value}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${progress.value}%` }}
                                transition={{ delay: index * 0.2, duration: 1 }}
                                className={`${progress.color} h-3 rounded-full shadow-inner`}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Settings, label: 'Account Settings' },
                      { icon: Heart, label: 'Saved Places' },
                      { icon: MapPin, label: 'My Trips' }
                    ].map((action, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all text-left"
                      >
                        <action.icon className="text-gray-600" size={22} />
                        <span className="text-gray-700 font-medium">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Favorite Destinations */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-4">Favorite Destinations</h3>
                  <div className="space-y-3">
                    {user?.favoriteDestinations.map((dest, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
                      >
                        <MapPin className="text-blue-600" size={18} />
                        <span className="text-gray-700 font-medium">{dest}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Heart, text: 'Saved Eiffel Tower to favorites', time: '2 hours ago', color: 'bg-red-500' },
                      { icon: MapPin, text: 'Completed trip to Paris', time: '1 day ago', color: 'bg-green-500' },
                      { icon: Award, text: 'Earned "Explorer" achievement', time: '3 days ago', color: 'bg-purple-500' }
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-3 h-3 ${activity.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <div>
                          <p className="text-sm text-gray-700 leading-relaxed">{activity.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}