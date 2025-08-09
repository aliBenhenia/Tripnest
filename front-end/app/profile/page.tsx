// ```jsx
"use client";
import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Heart, MapPin, Calendar, Star, Camera, Settings, User, Globe, Award, TrendingUp, AlertCircle } from 'lucide-react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setUserSuccess } from '@/lib/redux/slices/userSlice';
import axios from 'axios';
// const API_URL = 'http://localhost:3001';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ProfilePage() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('TOKEN_KEY') : null;
  const [user, setUser] = useState({
    username: 'ali benhnenia',
    bio: 'Adventure seeker exploring the world one destination at a time. Love hiking, photography, and local cuisine.',
    avatar: 'default-avatar.png',
    timestamps: 'January 2023',
    totalTrips: 12,
    favoriteDestinations: ['Paris', 'Tokyo', 'New York'],
    achievements: ['First Trip', 'Explorer', 'Photographer'],
    followers: 1247,
    following: 892
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
  const dispatch = useAppDispatch();
  useEffect(() => {
    // fetch user profile data
    if (token) {
      fetchUserProfile();
      setUsername(user.username);
      setBio(user.bio);
    }
    else {
      setServerError(true);
      console.error("No token found. Please log in.");
      window.location.href = '/auth/login'; // redirect to login if no token
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
        // before set avatar prix with base url server
        if (userData.avatar) {
          setAvatarPreview(`${API_URL}${userData.avatar}`);
        }else {
          setAvatarPreview(null);
        }

        // set only some fields to avoid overwriting the entire user object
        setUser(prev => ({ ...prev, ...userData }));

        // setUser(userData);
        setUsername(userData.username || '');
        setBio(userData.bio || '');
        dispatch(setUserSuccess(userData));
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setServerError(true);
        // toast.error("Unable to fetch user data. There was an issue fetching your profile data.");
      }
    };


      const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!token || !user) {
          // toast.error("Authentication required. You must be logged in to update your profile.");
          return;
        }
    
        setLoading(true);
    
        try {
          // const isValid = await validateToken();
          // if (!isValid) throw new Error('Authentication expired. Please log in again.');
    
          const formData = new FormData();
          formData.append('username', username);
          formData.append('bio', bio);
          if (avatarPreview) {
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

    
          // toast.success("Profile updated successfully");
        } catch (error: any) {
          console.log("=> ",error);
          if (error.response && error.response.status === 401) {
            // toast.error("Authentication expired. Please log in again.");
            // logout();
          }
          else if (error.response && error.response.status === 500) {
            // toast.error("Server error. Please try again later.");
          } else if (error.response && error.response.data) {
            // toast.error(error.response.data.message || "Failed to update profile. Please try again.");
          } else
            console.error("Error updating profile:", error);
            // toast.error(error.response.data.message || "Failed to update profile. Please try again.");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUser(prev => ({ ...prev, username, bio }));
      setEditMode(false);
      setLoading(false);
    }, 1000);
  };

  const avatarSrc = avatarPreview || 
    `https://placehold.co/100x100/6366F1/FFFFFF?text=${user.username.charAt(0).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Travel Profile</h1>
          <p className="text-gray-600">Manage your travel adventures and saved destinations</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === 'profile' 
                ? 'bg-white shadow-sm text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <User size={18} />
            <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === 'saved' 
                ? 'bg-white shadow-sm text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Heart size={18} />
            <span>Saved Places</span>
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === 'stats' 
                ? 'bg-white shadow-sm text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <TrendingUp size={18} />
            <span>Travel Stats</span>
          </button>
        </div>

        {serverError ? (
          <div className="bg-red-50 border border-red-200 rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-3">
              <AlertCircle className="text-red-500" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-1">Server Connection Error</h2>
                <p className="text-red-600 mb-4">We're having trouble connecting to the server.</p>
                <button 
                  onClick={() => setServerError(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Retry Connection
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  {editMode ? (
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="flex flex-col items-center mb-6">
                        <div className="relative w-32 h-32 mb-4">
                          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
                            <img
                              src={avatarSrc}
                              alt={user?.username || "Profile"}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-lg">
                            <Camera size={16} />
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
                            full Name
                          </label>
                          <input
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-3 pt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Saving...</span>
                            </>
                          ) : (
                            <>
                              <Save size={18} />
                              <span>Save Changes</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button" 
                          onClick={() => setEditMode(false)}
                          className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <X size={18} />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                        <div className="relative">
                          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
                            <img
                              src={avatarSrc}
                              alt={user?.username || "Profile"}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{user?.username}</h2>
                          <p className="text-gray-600 mb-4">{user?.bio}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>Joined {user?.timestamps}</span>
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setEditMode(true)}
                          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Edit3 size={18} />
                          <span>Edit Profile</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <MapPin className="text-blue-600" size={20} />
                            <span className="text-sm font-medium text-gray-600">Total Trips</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">{user?.totalTrips}</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Star className="text-green-600" size={20} />
                            <span className="text-sm font-medium text-gray-600">Favorites</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">{savedItems.length}</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Award className="text-purple-600" size={20} />
                            <span className="text-sm font-medium text-gray-600">Achievements</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">{user?.achievements.length}</p>
                        </div>
                      </div>

                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Stats</h3>
                        <div className="flex space-x-6">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{user?.followers}</p>
                            <p className="text-sm text-gray-600">Followers</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{user?.following}</p>
                            <p className="text-sm text-gray-600">Following</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'saved' && (
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Saved Destinations</h2>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <Heart size={20} />
                      <span className="font-medium">{savedItems.length} Saved</span>
                    </div>
                  </div>

                  {savedItems.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved destinations yet</h3>
                      <p className="text-gray-600 mb-4">Start saving your favorite travel spots!</p>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Explore Destinations
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {savedItems.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900">{item.title}</h3>
                              <div className="flex items-center space-x-1 text-yellow-500">
                                <Star size={16} fill="currentColor" />
                                <span className="text-sm font-medium">{item.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-600 mb-3">
                              <MapPin size={14} />
                              <span className="text-sm">{item.location}</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Statistics</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Countries Visited</h3>
                        <Globe className="text-blue-600" size={24} />
                      </div>
                      <p className="text-3xl font-bold text-blue-600 mb-2">15</p>
                      <p className="text-gray-600 text-sm">Explore more destinations!</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Favorite Destinations</h3>
                        <Star className="text-green-600" size={24} />
                      </div>
                      <p className="text-3xl font-bold text-green-600 mb-2">{user?.favoriteDestinations.length}</p>
                      <p className="text-gray-600 text-sm">Based on your saved places</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {user?.achievements.map((achievement, index) => (
                        <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg text-center">
                          <Award className="mx-auto text-purple-600 mb-2" size={24} />
                          <p className="font-medium text-gray-900">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Travel Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Trip Completion</span>
                          <span className="text-sm font-medium text-gray-700">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Photo Uploads</span>
                          <span className="text-sm font-medium text-gray-700">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings className="text-gray-600" size={20} />
                    <span className="text-gray-700">Account Settings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="text-gray-600" size={20} />
                    <span className="text-gray-700">Saved Places</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <MapPin className="text-gray-600" size={20} />
                    <span className="text-gray-700">My Trips</span>
                  </button>
                </div>
              </div>

              {/* Favorite Destinations */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Favorite Destinations</h3>
                <div className="space-y-3">
                  {user?.favoriteDestinations.map((dest, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <MapPin className="text-blue-600" size={16} />
                      <span className="text-gray-700">{dest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-700">Saved Eiffel Tower to favorites</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-700">Completed trip to Paris</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-700">Earned "Explorer" achievement</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
