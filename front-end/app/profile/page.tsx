"use client"

import React, { useState, useEffect } from 'react';
import useAuthRedux from '@/hooks/useAuthRedux';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setUserSuccess, updateUserAvatar, updateUserProfile } from '@/lib/redux/slices/userSlice';
import { Tabs } from "@/components/ui/tabs";
import axios from "axios";

const API_URL = 'http://localhost:3001';

export default function ProfilePage() {
  const { user: authUser, validateToken, logout } = useAuthRedux();
  const token = typeof window !== 'undefined' ? localStorage.getItem('TOKEN_KEY') : null;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [serverError, setServerError] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authUser && token) {
      validateToken().then(isValid => {
        if (isValid) {
          fetchUserProfile();
          setServerError(false);
        } else {
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
        toast({
          title: "Server connection error",
          description: "Unable to connect to the server.",
          variant: "destructive",
        });
      });
    }
  }, [authUser, token]);

  const fetchUserProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch(`${API_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      const userData = data.data.user;
      setUser(userData);
      setUsername(userData.username || '');
      setBio(userData.bio || '');
      dispatch(setUserSuccess(userData));
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
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
      const isTokenValid = await validateToken();
      if (!isTokenValid) {
        throw new Error('Authentication expired. Please log in again.');
      }

      const formData = new FormData();
 formData.append('username', username);
 formData.append('bio', bio);
 formData.append('avatar', avatarFile);
      // Log the FormData content (for debugging purposes)
      for (let [key, value] of formData.entries()) {
        console.log(key, value); // This will print all the appended form data
      }
      const response = await axios.patch(
        `${API_URL}/api/users/update`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
        }
      );
  
      // Check if the response status is successful (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        const updatedUser = response.data.data.user;
        
        setUser(updatedUser);
        dispatch(setUserSuccess(updatedUser));
        toast({
          title: "Profile updated successfully",
          variant: "default",
        });
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Failed to update profile",
        description: error.message || 'An unknown error occurred',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

        {serverError ? (
          <div className="bg-red-50 border border-red-200 rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-red-700 mb-2">Server Connection Error</h2>
            <p className="text-red-600 mb-4">We're having trouble connecting to the server.</p>
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
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            {editMode ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                      <img
                        src={ avatarPreview ? avatarPreview : (user?.avatar === "default-avatar.png" ? `https://static.vecteezy.com/system/resources/previews/001/840/612/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg` : `${API_URL}${user?.avatar}`) }
                        alt={user?.username || "Profile"}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer hover:bg-blue-700">
                      <span>Upload</span>
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
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="bio">Bio</Label>
                    <Input 
                      id="bio" 
                      value={bio} 
                      onChange={(e) => setBio(e.target.value)} 
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
                    onClick={() => setEditMode(false)}
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
                      src={user?.avatar === "default-avatar.png" ? `https://static.vecteezy.com/system/resources/previews/001/840/612/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg ` : `${API_URL}${user?.avatar}`}
                      alt={user?.username || "Profile"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{user?.username}</h2>
                    <p className="text-sm text-gray-500">{user?.bio}</p>
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
        )}
      </div>
    </ProtectedRoute>
  );
}