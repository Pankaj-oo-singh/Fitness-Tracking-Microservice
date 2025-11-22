import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBell, 
  FaCheck, 
  FaTrash, 
  FaCog, 
  FaDumbbell, 
  FaTrophy, 
  FaUserFriends, 
  FaCalendarAlt, 
  FaExclamationTriangle,
  FaInfoCircle,
  FaStar,
  FaComment,
  FaHeart,
  FaShare,
  FaEnvelope
} from 'react-icons/fa';

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'workout',
      title: 'Workout Reminder',
      message: 'Your scheduled Full Body Strength workout starts in 30 minutes',
      time: '10 minutes ago',
      read: false,
      icon: FaDumbbell,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'New Achievement Unlocked!',
      message: 'You\'ve completed the "Week Warrior" challenge - 4 workouts in a week!',
      time: '1 hour ago',
      read: false,
      icon: FaTrophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 3,
      type: 'social',
      title: 'New Follower',
      message: 'Sarah Johnson started following you',
      time: '2 hours ago',
      read: true,
      icon: FaUserFriends,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      type: 'system',
      title: 'Weekly Progress Report',
      message: 'Your weekly fitness report is ready. You completed 5 workouts this week!',
      time: '5 hours ago',
      read: true,
      icon: FaChartLine,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 5,
      type: 'goal',
      title: 'Goal Progress Update',
      message: 'You\'re 75% towards your "Lose 10 Pounds" goal. Keep it up!',
      time: '1 day ago',
      read: true,
      icon: FaBullseye,
      color: 'text-teal-500',
      bgColor: 'bg-teal-50'
    },
    {
      id: 6,
      type: 'reminder',
      title: 'Meal Plan Reminder',
      message: 'Don\'t forget to log your dinner for today',
      time: '1 day ago',
      read: true,
      icon: FaUtensils,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 7,
      type: 'social',
      title: 'Workout Liked',
      message: 'Mike Chen liked your "HIIT Burner" workout',
      time: '2 days ago',
      read: true,
      icon: FaHeart,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 8,
      type: 'system',
      title: 'App Update',
      message: 'New features available! Check out the updated workout tracking',
      time: '3 days ago',
      read: true,
      icon: FaInfoCircle,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    }
  ]);

  const [settings, setSettings] = useState({
    workoutReminders: true,
    achievementAlerts: true,
    socialNotifications: true,
    systemUpdates: true,
    goalProgress: true,
    emailNotifications: false,
    pushNotifications: true,
    weeklyReports: true
  });

  const notificationTypes = [
    { id: 'all', name: 'All', count: notifications.length },
    { id: 'unread', name: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'workout', name: 'Workouts', count: notifications.filter(n => n.type === 'workout').length },
    { id: 'social', name: 'Social', count: notifications.filter(n => n.type === 'social').length },
    { id: 'system', name: 'System', count: notifications.filter(n => n.type === 'system').length }
  ];

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.read;
    return notification.type === activeTab;
  });

  const getTimeColor = (time) => {
    if (time.includes('minute') || time.includes('hour')) return 'text-red-500';
    if (time.includes('day')) return 'text-orange-500';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <FaBell className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Notifications</h1>
                <p className="text-teal-100 mt-2">
                  Stay updated with your fitness journey
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={markAllAsRead}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <FaCheck className="w-4 h-4" />
                <span>Mark All Read</span>
              </button>
              <button
                onClick={clearAll}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <FaTrash className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column - Notification List */}
            <div className="lg:w-2/3">
              {/* Notification Tabs */}
              <div className="flex space-x-1 mb-6 overflow-x-auto">
                {notificationTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                      activeTab === type.id
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-teal-50'
                    }`}
                  >
                    <span>{type.name}</span>
                    {type.count > 0 && (
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        activeTab === type.id ? 'bg-white/20' : 'bg-teal-100 text-teal-700'
                      }`}>
                        {type.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Notifications List */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {filteredNotifications.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {filteredNotifications.map(notification => {
                      const IconComponent = notification.icon;
                      
                      return (
                        <div
                          key={notification.id}
                          className={`p-6 hover:bg-gray-50 transition-colors duration-200 ${
                            !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            {/* Notification Icon */}
                            <div className={`p-3 rounded-xl ${notification.bgColor}`}>
                              <IconComponent className={`w-6 h-6 ${notification.color}`} />
                            </div>

                            {/* Notification Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 text-lg">
                                  {notification.title}
                                </h3>
                                <span className={`text-sm ${getTimeColor(notification.time)}`}>
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-3">
                                {notification.message}
                              </p>
                              
                              {/* Action Buttons */}
                              <div className="flex space-x-3">
                                {!notification.read && (
                                  <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                                  >
                                    Mark as read
                                  </button>
                                )}
                                {notification.type === 'workout' && (
                                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                                    View Workout
                                  </button>
                                )}
                                {notification.type === 'achievement' && (
                                  <button className="text-sm text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
                                    View Achievement
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Action Menu */}
                            <div className="flex items-center space-x-2">
                              {!notification.read && (
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              )}
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                              >
                                <FaTrash className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Empty State */
                  <div className="text-center py-16">
                    <FaBell className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No notifications found
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {activeTab === 'unread' 
                        ? 'You\'re all caught up! No unread notifications.'
                        : 'No notifications match your current filter.'
                      }
                    </p>
                    {activeTab !== 'all' && (
                      <button
                        onClick={() => setActiveTab('all')}
                        className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
                      >
                        View All Notifications
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Settings */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FaCog className="w-6 h-6 text-teal-600" />
                  <h2 className="text-xl font-bold text-gray-900">Notification Settings</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Notification Types</h3>
                    <div className="space-y-3">
                      {Object.entries({
                        workoutReminders: 'Workout Reminders',
                        achievementAlerts: 'Achievement Alerts',
                        socialNotifications: 'Social Notifications',
                        goalProgress: 'Goal Progress Updates',
                        systemUpdates: 'System Updates',
                        weeklyReports: 'Weekly Reports'
                      }).map(([key, label]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-gray-700">{label}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={settings[key]}
                              onChange={() => toggleSetting(key)}
                              className="sr-only peer" 
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Delivery Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Push Notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={settings.pushNotifications}
                            onChange={() => toggleSetting('pushNotifications')}
                            className="sr-only peer" 
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Email Notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={settings.emailNotifications}
                            onChange={() => toggleSetting('emailNotifications')}
                            className="sr-only peer" 
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Notification Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Notifications</span>
                    <span className="font-medium">{notifications.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Unread</span>
                    <span className="font-medium text-blue-600">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">This Week</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg. Daily</span>
                    <span className="font-medium">3.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotificationPage;