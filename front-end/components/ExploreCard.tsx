"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, MapPin, Star } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { addSavedItem, removeSavedItem, SavedItem } from '@/lib/redux/slices/savedItemsSlice';
import { toast } from '@/components/ui/use-toast';
import { addActivity } from '@/lib/redux/slices/recentActivitySlice';
import useAuthRedux from '@/hooks/useAuthRedux';

type ExploreCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'experience' | 'place' | 'city';
  rating?: number;
  location?: string;
  price?: string;
};

export default function ExploreCard({
  id,
  title,
  description,
  image,
  type,
  rating = 4.5,
  location = 'Morocco',
  price,
}: ExploreCardProps) {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuthRedux();
  const savedItems = useAppSelector(state => state.savedItems.items);
  const isSaved = savedItems.some(item => item.id === id);

  const handleSaveToggle = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to save items",
        variant: "destructive",
      });
      return;
    }

    if (isSaved) {
      // Remove from saved items
      dispatch(removeSavedItem(id));
      toast({
        title: "Removed from saved items",
        variant: "default",
      });
    } else {
      // Add to saved items
      const newSavedItem: SavedItem = {
        id,
        title,
        description,
        image,
        type,
        savedAt: new Date().toISOString(),
      };
      
      dispatch(addSavedItem(newSavedItem));
      
      // Add activity for saving item
      dispatch(addActivity({
        id: Date.now().toString(),
        title: `Saved ${title}`,
        description: `You added ${title} to your saved items`,
        image,
        type: 'save',
        timestamp: new Date().toISOString(),
        referenceId: id,
        referenceType: type
      }));
      
      toast({
        title: "Added to saved items",
        description: "View in your profile",
        variant: "default",
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleSaveToggle}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isSaved ? 'bg-primary text-white' : 'bg-white/90 text-gray-600'
          } shadow-sm hover:shadow-md transition-all duration-200`}
          aria-label={isSaved ? "Remove from saved" : "Save this item"}
        >
          <Heart className={`h-5 w-5 ${isSaved ? 'fill-white' : ''}`} />
        </button>
        
        {location && (
          <div className="absolute bottom-3 left-3 bg-black/40 text-white text-xs py-1 px-2 rounded-full flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          {rating && (
            <div className="flex items-center text-xs">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          {price && (
            <div className="text-primary font-semibold">
              {price}
              <span className="text-gray-500 font-normal text-sm"> / person</span>
            </div>
          )}
          
          <Link 
            href={`/${type}/${id}`}
            className="text-primary text-sm font-medium hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}