"use client"

import React, { useState, useEffect } from 'react';
import useAuthRedux from '@/hooks/useAuthRedux';
import ProtectedRoute from '@/components/ProtectedRoute';
import { User, Settings, CreditCard, Bell, Lock, HelpCircle, LogOut, ChevronRight, Globe, ChevronDown, Heart, Camera, MapPin, Calendar, Star, Edit, Mail, Phone, Share2, Instagram, Twitter, Facebook, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setUserSuccess, updateUserAvatar, updateUserProfile } from '@/lib/redux/slices/userSlice';
import { addSavedItem, fetchSavedItemsSuccess, removeSavedItem, SavedItem } from '@/lib/redux/slices/savedItemsSlice';
import { addActivity, fetchActivitiesSuccess, ActivityItem } from '@/lib/redux/slices/recentActivitySlice';
import { Tabs, TabsList, TabsContent } from "@/components/ui/tabs";

// Mock data for saved items and recent activity
const mockSavedItems: SavedItem[] = [
  {
    id: '1',
    title: 'Marrakech City Tour',
    description: 'Explore the vibrant city of Marrakech',
    image: 'https://images.unsplash.com/photo-1539020140153-e8c5073eacbe',
    type: 'experience',
    savedAt: new Date(Date.now() - 86400000 * 3).toISOString() // 3 days ago
  },
  {
    id: '2',
    title: 'Casablanca Beach Resort',
    description: 'Luxury resort with private beach access',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    type: 'place',
    savedAt: new Date(Date.now() - 86400000 * 5).toISOString() // 5 days ago
  },
  {
    id: '3',
    title: 'Fes Cultural Experience',
    description: 'Immerse yourself in the rich culture of Fes',
    image: 'https://images.unsplash.com/photo-1531501410720-c8d437948191',
    type: 'experience',
    savedAt: new Date(Date.now() - 86400000 * 7).toISOString() // 7 days ago
  }
];

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'Viewed Chefchaouen Tour',
    description: 'You viewed details about the Blue City tour',
    type: 'view',
    timestamp: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
    referenceId: '101',
    referenceType: 'experience'
  },
  {
    id: '2',
    title: 'Searched for "Sahara desert"',
    description: 'You searched for desert experiences',
    type: 'search',
    timestamp: new Date(Date.now() - 86400000 * 2).toISOString() // 2 days ago
  },
  {
    id: '3',
    title: 'Saved Atlas Mountains Trek',
    description: 'You added Atlas Mountains Trek to your saved items',
    image: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae',
    type: 'save',
    timestamp: new Date(Date.now() - 86400000 * 4).toISOString(), // 4 days ago
    referenceId: '202',
    referenceType: 'experience'
  }
];

type ProfileUser = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  createdAt: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function ProfilePage() {
  const { user: authUser, token, validateToken, logout } = useAuthRedux();
  const [user, setUser] = useState<ProfileUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [serverError, setServerError] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState('saved');

  // Redux
  const dispatch = useAppDispatch();
  const reduxUser = useAppSelector(state => state.user.currentUser);
  const savedItems = useAppSelector(state => state.savedItems.items);
  const recentActivities = useAppSelector(state => state.recentActivity.activities);

  useEffect(() => {
    if (authUser && token) {
      // Check if token is valid before fetching
      validateToken().then(isValid => {
        if (isValid) {
          fetchUserProfile();
          setServerError(false);
        } else {
          console.error('Token validation failed');
          toast({
            title: "Authentication expired",
            description: "Please log in again",
            variant: "destructive",
          });
          logout();
        }
      }).catch(error => {
        console.error('Server connection error:', error);
        setServerError(true);
        // Show server connection error toast
        toast({
          title: "Server connection error",
          description: "Unable to connect to the server. Please check your internet connection or try again later.",
          variant: "destructive",
        });
      });
    }
  }, [authUser, token]);

  // Initialize mock data for demo
  useEffect(() => {
    if (savedItems.length === 0) {
      dispatch(fetchSavedItemsSuccess(mockSavedItems));
    }
    
    if (recentActivities.length === 0) {
      dispatch(fetchActivitiesSuccess(mockActivities));
    }
  }, [dispatch, savedItems.length, recentActivities.length]);

  const fetchUserProfile = async () => {
    if (!token) return;

    try {
      // Determine if we should use regular or local API
      const infoResponse = await fetch(`${API_URL}/`);
      const infoData = await infoResponse.json();
      const profileEndpoint = infoData.userEndpoints[0].includes('local') 
        ? '/api/local-users/profile' 
        : '/api/users/profile';

      console.log('Using profile endpoint:', `${API_URL}${profileEndpoint}`);

      const response = await fetch(`${API_URL}${profileEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Profile response status:', response.status);

      // Check if response is not ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Profile fetch error:', errorData);
        throw new Error(errorData.message || 'Failed to fetch profile');
      }

      const data = await response.json();
      console.log('Profile data:', data);
      
      const userData = data.data.user;
      setUser(userData);
      setName(userData.name);
      setEmail(userData.email);
      
      // Update Redux store
      dispatch(setUserSuccess(userData));
    } catch (error) {
      console.error('Error fetching profile:', error);
      // Fallback to auth user if profile fetch fails
      if (authUser) {
        console.log('Falling back to auth user:', authUser);
        const fallbackUser = {
          id: authUser.id,
          name: authUser.name,
          email: authUser.email,
          avatar: null,
          createdAt: authUser.createdAt
        };
        setUser(fallbackUser);
        setName(authUser.name);
        setEmail(authUser.email);
        
        // Update Redux store with fallback user
        dispatch(setUserSuccess(fallbackUser));
      }
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to update your profile",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Validate token first
      const isTokenValid = await validateToken();
      if (!isTokenValid) {
        throw new Error('Authentication expired. Please log in again.');
      }

      // Determine if we should use regular or local API
      const infoResponse = await fetch(`${API_URL}/`);
      const infoData = await infoResponse.json();
      const profileEndpoint = infoData.userEndpoints[0].includes('local') 
        ? '/api/local-users/profile' 
        : '/api/users/profile';

      console.log('Using update endpoint:', `${API_URL}${profileEndpoint}`);
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      
      if (avatarFile) {
        console.log('Uploading avatar file:', avatarFile.name, avatarFile.type, avatarFile.size);
        formData.append('avatar', avatarFile);
      }

      // Log formData entries for debugging
      for (const [key, value] of formData.entries()) {
        console.log(`FormData: ${key} - ${value instanceof File ? 'File: ' + value.name : value}`);
      }

      const response = await fetch(`${API_URL}${profileEndpoint}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      console.log('Update response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Profile update error:', errorData);
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const data = await response.json();
      console.log('Updated profile data:', data);
      
      const updatedUser = data.data.user;
      setUser(updatedUser);
      
      // Update Redux store with updated user data
      if (avatarFile) {
        dispatch(updateUserAvatar(updatedUser.avatar));
      }
      dispatch(updateUserProfile({
        name: updatedUser.name,
        email: updatedUser.email
      }));
      
      // Add activity for profile update
      dispatch(addActivity({
        id: Date.now().toString(),
        title: 'Profile Updated',
        description: avatarFile ? 'You updated your profile and avatar' : 'You updated your profile information',
        type: 'view',
        timestamp: new Date().toISOString(),
      }));
      
      // Update local storage user
      const userKey = 'travila_user';
      const storedUser = localStorage.getItem(userKey);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const updatedStoredUser = {
          ...parsedUser,
          name: updatedUser.name,
          email: updatedUser.email
        };
        localStorage.setItem(userKey, JSON.stringify(updatedStoredUser));
        console.log('Updated localStorage user data');
      }

      setEditMode(false);
      toast({
        title: "Profile updated successfully",
        variant: "default",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      
      // Check if this is an authentication error
      if (error instanceof Error && error.message.toLowerCase().includes('authentication')) {
        logout();
      }
      
      toast({
        title: "Failed to update profile",
        description: error instanceof Error ? error.message : 'An unknown error occurred',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Handle removing a saved item
  const handleRemoveSavedItem = (itemId: string) => {
    dispatch(removeSavedItem(itemId));
    toast({
      title: "Item removed from saved items",
      variant: "default",
    });
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          
          {serverError ? (
            <div className="bg-red-50 border border-red-200 rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold text-red-700 mb-2">Server Connection Error</h2>
              <p className="text-red-600 mb-4">
                We're having trouble connecting to the server. This might be due to:
              </p>
              <ul className="list-disc pl-5 text-red-600 mb-4">
                <li>Your internet connection</li>
                <li>The server is temporarily unavailable</li>
                <li>A configuration issue</li>
              </ul>
              <Button 
                onClick={() => {
                  setServerError(false);
                  if (authUser && token) fetchUserProfile();
                }}
              >
                Retry Connection
              </Button>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                {editMode ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative w-24 h-24 mb-4">
                        <div className="h-24 w-24 rounded-full overflow-hidden">
                          <img
                            src={avatarPreview || (user?.avatar ? `${API_URL}${user.avatar}` : 
                              `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || '')}&background=random&size=128`)}
                            alt={user?.name || "Profile"}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer hover:bg-blue-700">
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
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 pt-3">
                      <Button type="submit" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Changes'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setEditMode(false);
                          setName(user?.name || '');
                          setEmail(user?.email || '');
                          setAvatarPreview(null);
                          setAvatarFile(null);
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img
                          src={user?.avatar ? `${API_URL}${user.avatar}` : 
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || '')}&background=random&size=128`}
                          alt={user?.name || "Profile"}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold">{user?.name}</h2>
                        <p className="text-gray-600">{user?.email}</p>
                        <p className="text-sm text-gray-500">Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <Button onClick={() => setEditMode(true)}>
                        Edit Profile
                      </Button>
                    </div>
                  </>
                )}
              </div>
              
              {/* Tabs for Saved Items and Recent Activity */}
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="border-b border-gray-200">
                  <nav className="flex gap-2 px-6">
                    <button
                      onClick={() => setActiveTab('saved')}
                      className={`py-4 px-2 font-medium text-sm border-b-2 -mb-px transition-colors ${
                        activeTab === 'saved' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        <span>Saved Items</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab('activity')}
                      className={`py-4 px-2 font-medium text-sm border-b-2 -mb-px transition-colors ${
                        activeTab === 'activity' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Recent Activity</span>
                      </div>
                    </button>
                  </nav>
                </div>
                
                <div className="p-6">
                  {activeTab === 'saved' ? (
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Your Saved Items</h2>
                      {savedItems.length > 0 ? (
                        <div className="space-y-4">
                          {savedItems.map(item => (
                            <div key={item.id} className="flex border border-gray-200 rounded-lg overflow-hidden">
                              <div className="w-24 h-24 shrink-0">
                                <img 
                                  src={item.image} 
                                  alt={item.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 p-3">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                                  <button 
                                    className="text-gray-400 hover:text-red-500 p-1"
                                    onClick={() => handleRemoveSavedItem(item.id)}
                                  >
                                    <Heart className="h-4 w-4 fill-current" />
                                  </button>
                                </div>
                                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-xs text-gray-500">Saved on {formatDate(item.savedAt)}</span>
                                  <Link 
                                    href={`/${item.type}/${item.id}`}
                                    className="text-xs text-primary font-medium hover:underline"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 border border-gray-200 rounded-md">
                          <p className="text-gray-800">No saved items found.</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Your Recent Activity</h2>
                      {recentActivities.length > 0 ? (
                        <div className="space-y-4">
                          {recentActivities.map(activity => (
                            <div key={activity.id} className="flex border border-gray-200 rounded-lg overflow-hidden">
                              <div className="w-2 bg-primary"></div>
                              <div className="flex-1 p-3">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-medium text-gray-900">{activity.title}</h3>
                                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                    {formatDate(activity.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{activity.description}</p>
                                {activity.referenceId && (
                                  <div className="mt-2">
                                    <Link 
                                      href={`/${activity.referenceType}/${activity.referenceId}`}
                                      className="text-xs text-primary font-medium hover:underline"
                                    >
                                      View Details
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 border border-gray-200 rounded-md">
                          <p className="text-gray-800">No recent activity found.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}