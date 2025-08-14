// ```jsx
"use client";
import React, { useState } from 'react';
import { Trophy, Star, MapPin, Calendar, Users, TrendingUp, Award, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');

  // Mock data
  const leaderboardData = [
    { id: 1, name: 'Alex Johnson', avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=AJ', points: 2450, rank: 1, trips: 12, completed: 10 },
    { id: 2, name: 'Sarah Chen', avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=SC', points: 2100, rank: 2, trips: 15, completed: 13 },
    { id: 3, name: 'Mike Rodriguez', avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=MR', points: 1950, rank: 3, trips: 10, completed: 8 },
    { id: 4, name: 'Emma Wilson', avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=EW', points: 1780, rank: 4, trips: 18, completed: 15 },
    { id: 5, name: 'David Kim', avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=DK', points: 1620, rank: 5, trips: 14, completed: 11 },
  ];

  const userStats = {
    name: 'John Doe',
    avatar: 'https://placehold.co/60x60/3b82f6/ffffff?text=JD',
    points: 1850,
    rank: 3,
    totalTrips: 12,
    completedTrips: 9,
    streak: 7,
    level: 'Advanced Explorer',
    progress: 75
  };

  const achievements = [
    { id: 1, title: 'First Trip', description: 'Complete your first trip', icon: '✈️', earned: true },
    { id: 2, title: 'Trailblazer', description: 'Complete 5 trips', icon: '🏔️', earned: true },
    { id: 3, title: 'Explorer', description: 'Visit 10 different countries', icon: '🌎', earned: false },
    { id: 4, title: 'Photographer', description: 'Take 50 photos during trips', icon: '📸', earned: false },
    { id: 5, title: 'Social Butterfly', description: 'Invite 3 friends to join trips', icon: '👥', earned: true },
  ];

  const recentActivity = [
    { id: 1, action: 'completed', trip: 'Alps Adventure', date: '2 hours ago', points: 200 },
    { id: 2, action: 'started', trip: 'Beach Getaway', date: '1 day ago', points: 150 },
    { id: 3, action: 'earned', achievement: 'Trailblazer', date: '2 days ago', points: 300 },
    { id: 4, action: 'completed', trip: 'City Tour', date: '3 days ago', points: 100 },
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'blue' }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className={`text-2xl font-bold text-${color}-600 mt-1`}>{value}</p>
          {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </motion.div>
  );

  const LeaderboardItem = ({ user, isCurrentUser = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center p-4 rounded-lg border transition-all duration-200 ${
        isCurrentUser 
          ? 'bg-blue-50 border-blue-200 shadow-sm' 
          : 'bg-white border-gray-100 hover:shadow-md'
      }`}
    >
      <div className="flex items-center space-x-4 flex-1">
        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full font-bold text-gray-700">
          {user.rank}
        </div>
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <h3 className={`font-semibold ${isCurrentUser ? 'text-blue-600' : 'text-gray-900'}`}>
            {user.name}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {user.trips} trips
            </span>
            <span className="flex items-center">
              <Trophy className="w-4 h-4 mr-1" />
              {user.completed} completed
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-900">{user.points.toLocaleString()} pts</p>
        {isCurrentUser && (
          <p className="text-xs text-blue-600 font-medium">Your Rank</p>
        )}
      </div>
    </motion.div>
  );

  const AchievementItem = ({ achievement }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border ${
        achievement.earned 
          ? 'bg-green-50 border-green-200' 
          : 'bg-gray-50 border-gray-200 opacity-70'
      }`}
    >
      <div className="flex items-start space-x-3">
        <span className="text-2xl">{achievement.icon}</span>
        <div className="flex-1">
          <h4 className={`font-semibold ${achievement.earned ? 'text-green-800' : 'text-gray-700'}`}>
            {achievement.title}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
          {achievement.earned && (
            <div className="mt-2 flex items-center text-green-600 text-xs font-medium">
              <Award className="w-3 h-3 mr-1" />
              Earned
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ActivityItem = ({ activity }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-100"
    >
      <div className="flex-shrink-0">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <div className="flex-1">
        <p className="text-gray-900">
          <span className="font-medium">{activity.action === 'completed' ? 'Completed' : activity.action === 'started' ? 'Started' : 'Earned'}</span>{' '}
          {activity.action === 'completed' || activity.action === 'started' ? activity.trip : activity.achievement}
        </p>
        <p className="text-sm text-gray-500">{activity.date}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Star className="w-4 h-4 text-yellow-500" />
        <span className="font-semibold text-gray-900">{activity.points}</span>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">TravelRank</h1>
            </div>
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'leaderboard'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Leaderboard
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'achievements'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Achievements
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'activity'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Activity
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Stats Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={userStats.avatar} alt={userStats.name} className="w-16 h-16 rounded-full border-2 border-white" />
                <div>
                  <h2 className="text-2xl font-bold">{userStats.name}</h2>
                  <p className="text-blue-100">{userStats.level}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm bg-blue-500 px-2 py-1 rounded-full">
                      Rank #{userStats.rank}
                    </span>
                    <span className="ml-2 text-sm text-blue-100">
                      {userStats.streak} day streak
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{userStats.points.toLocaleString()}</p>
                <p className="text-blue-100">Total Points</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-100">Progress to next level</span>
                <span className="text-sm text-blue-100">{userStats.progress}%</span>
              </div>
              <div className="w-full bg-blue-500 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${userStats.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Trophy}
            title="Total Points"
            value={userStats.points.toLocaleString()}
            subtitle="All time"
            color="blue"
          />
          <StatCard
            icon={Target}
            title="Trips Completed"
            value={userStats.completedTrips}
            subtitle="Out of {userStats.totalTrips}"
            color="green"
          />
          <StatCard
            icon={Calendar}
            title="Current Streak"
            value={`${userStats.streak} days`}
            subtitle="Keep it going!"
            color="orange"
          />
          <StatCard
            icon={Users}
            title="Friends"
            value="12"
            subtitle="Active travelers"
            color="purple"
          />
        </div>

        {/* Content Sections */}
        {activeTab === 'leaderboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Leaderboard</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>Top Travelers</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {leaderboardData.map((user) => (
                <LeaderboardItem 
                  key={user.id} 
                  user={user} 
                  isCurrentUser={user.id === 1} 
                />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Award className="w-4 h-4" />
                <span>Congratulations!</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <AchievementItem key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Latest actions</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default App;
