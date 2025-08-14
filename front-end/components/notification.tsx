// ```jsx
"use client";
import React, { useState, useRef, useEffect } from 'react';

const NotificationDropdown = ({ isOpen, onClose, notifications = [] }) => {
  if (!isOpen) return null;

  const handleNotificationClick = (id) => {
    // Handle notification click
    console.log('Notification clicked:', id);
  };

  const handleMarkAllAsRead = () => {
    // Handle mark all as read
    console.log('Mark all as read');
  };

  const handleClearAll = () => {
    // Handle clear all
    console.log('Clear all notifications');
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Notifications</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleMarkAllAsRead}
              className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              Mark all as read
            </button>
            <button
              onClick={handleClearAll}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear all
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <svg className="h-12 w-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-gray-500 text-sm">No notifications</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
              onClick={() => handleNotificationClick(notification.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 pt-0.5">
                  {notification.type === 'message' && (
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {notification.type === 'payment' && (
                    <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {notification.type === 'update' && (
                    <svg className="h-4 w-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  {notification.type === 'task' && (
                    <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-medium ${
                      !notification.read ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {notification.title}
                    </h4>
                    {!notification.read && (
                      <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {notification.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full py-2 px-4 text-sm text-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          View all notifications
        </button>
      </div>
    </div>
  );
};

const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: "New Message Received",
      description: "You have a new message from John Doe",
      time: "2 minutes ago",
      read: false,
      type: "message"
    },
    {
      id: 2,
      title: "Payment Successful",
      description: "Your payment of $299.99 has been processed",
      time: "1 hour ago",
      read: false,
      type: "payment"
    },
    {
      id: 3,
      title: "System Update Available",
      description: "A new version of the application is available",
      time: "3 hours ago",
      read: true,
      type: "update"
    },
    {
      id: 4,
      title: "Task Completed",
      description: "Your task 'Design Review' has been completed",
      time: "1 day ago",
      read: true,
      type: "task"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative p-2.5 text-gray-600 hover:text-gray-900 rounded-full transition-all duration-200 border border-gray-200 hover:border-primary/30 group hover:bg-gradient-to-r hover:from-primary/[0.03] hover:to-primary/[0.05] active:scale-[0.98]"
      >
        <svg className="h-[18px] w-[18px] group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-primary rounded-full text-[11px] font-medium flex items-center justify-center text-white border-2 border-white shadow-sm scale-100 group-hover:scale-110 transition-transform group-hover:ring-2 ring-primary/20">
            {unreadCount}
          </span>
        )}
      </button>
      
      <NotificationDropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        notifications={notifications}
      />
    </div>
  );
};

// Export the notification button component
export default NotificationButton;
