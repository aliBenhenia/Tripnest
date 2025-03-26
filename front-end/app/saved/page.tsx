"use client"

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { removeSavedItem } from '@/lib/redux/slices/savedItemsSlice';
import { Heart, MapPin, Calendar, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';
import useAuthRedux from '@/hooks/useAuthRedux';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SavedPage() {
  const { isAuthenticated } = useAuthRedux();
  const savedItems = useAppSelector(state => state.savedItems.items);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeSavedItem(id));
    toast({
      title: "Item removed from saved items",
      variant: "default",
    });
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

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/explore" className="text-gray-500 hover:text-gray-900">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold">Your Saved Items</h1>
          </div>
          
          {savedItems.length > 0 ? (
            <div className="space-y-4">
              {savedItems.map(item => (
                <div key={item.id} className="flex border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                            {item.type === 'experience' ? 'Experience' : item.type === 'place' ? 'Place' : 'City'}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      </div>
                      <button 
                        className="text-red-500 p-1 hover:bg-red-50 rounded-full transition-colors"
                        onClick={() => handleRemoveItem(item.id)}
                        aria-label="Remove from saved items"
                      >
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">{item.description}</p>
                    
                    <div className="mt-3 flex flex-wrap items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>Saved on {formatDate(item.savedAt)}</span>
                      </div>
                      
                      <Link 
                        href={`/${item.type}/${item.id}`}
                        className="text-sm font-medium text-primary hover:underline mt-2 sm:mt-0"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No saved items yet</h2>
              <p className="text-gray-600 mb-4">
                Items you save will appear here. Start exploring and save your favorite places and experiences.
              </p>
              <Link href="/explore">
                <Button>
                  Explore Morocco
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}