import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaDumbbell, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        
        {/* Animated 404 Graphic */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-gray-300 opacity-50">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-teal-600 animate-bounce">
              <FaExclamationTriangle className="inline-block mb-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          
          {/* Main Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-2">
            The page you're looking for seems to have wandered off during a workout.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Don't worry, even the best fitness plans need adjustments sometimes!
          </p>

          {/* Fitness-themed Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center">
                <FaDumbbell className="w-12 h-12 text-teal-600 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-ping">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <FaHome className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center space-x-2 border border-teal-600 text-teal-600 hover:bg-teal-50 py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/workouts"
                className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 p-3 bg-teal-50 rounded-lg transition-colors duration-200"
              >
                <FaDumbbell className="w-4 h-4" />
                <span className="text-sm">Workouts</span>
              </Link>
              <Link
                to="/diet"
                className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 p-3 bg-teal-50 rounded-lg transition-colors duration-200"
              >
                <FaUtensils className="w-4 h-4" />
                <span className="text-sm">Diet Plans</span>
              </Link>
              <Link
                to="/goals"
                className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 p-3 bg-teal-50 rounded-lg transition-colors duration-200"
              >
                <FaTrophy className="w-4 h-4" />
                <span className="text-sm">Goals</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 p-3 bg-teal-50 rounded-lg transition-colors duration-200"
              >
                <FaUser className="w-4 h-4" />
                <span className="text-sm">Profile</span>
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <FaSearch className="w-4 h-4 text-gray-400" />
              <span>Can't find what you're looking for? Try using the search feature.</span>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please{' '}
            <a href="/contact" className="text-teal-600 hover:text-teal-700 underline">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;