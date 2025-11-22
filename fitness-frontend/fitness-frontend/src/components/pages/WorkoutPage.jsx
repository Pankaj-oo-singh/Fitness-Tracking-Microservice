import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaClock, FaFire, FaDumbbell, FaRunning, FaUserFriends, FaStar } from 'react-icons/fa';

const WorkoutsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Workout categories
  const categories = [
    { id: 'all', name: 'All Workouts' },
    { id: 'strength', name: 'Strength Training' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'hiit', name: 'HIIT' },
    { id: 'yoga', name: 'Yoga & Flexibility' },
    { id: 'beginner', name: 'Beginner Friendly' },
  ];

  // Sample workout data
  const workouts = [
    {
      id: 1,
      title: 'Full Body Strength',
      category: 'strength',
      duration: 45,
      difficulty: 'Intermediate',
      calories: 320,
      image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Sarah Johnson',
      rating: 4.8,
      description: 'Complete full body workout focusing on compound movements for maximum strength gains.',
      exercises: ['Squats', 'Bench Press', 'Deadlifts', 'Overhead Press']
    },
    {
      id: 2,
      title: 'HIIT Burner',
      category: 'hiit',
      duration: 30,
      difficulty: 'Advanced',
      calories: 450,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Mike Chen',
      rating: 4.9,
      description: 'High-intensity interval training to boost metabolism and burn fat effectively.',
      exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'Plank Jacks']
    },
    {
      id: 3,
      title: 'Morning Yoga Flow',
      category: 'yoga',
      duration: 60,
      difficulty: 'Beginner',
      calories: 180,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Emma Davis',
      rating: 4.7,
      description: 'Gentle yoga sequence to awaken your body and mind, perfect for morning routine.',
      exercises: ['Sun Salutations', 'Warrior Poses', 'Tree Pose', 'Child\'s Pose']
    },
    {
      id: 4,
      title: 'Beginner Cardio',
      category: 'beginner',
      duration: 25,
      difficulty: 'Beginner',
      calories: 200,
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Alex Rodriguez',
      rating: 4.5,
      description: 'Low-impact cardio workout perfect for those starting their fitness journey.',
      exercises: ['Walking', 'Light Jogging', 'Step-ups', 'Arm Circles']
    },
    {
      id: 5,
      title: 'Upper Body Power',
      category: 'strength',
      duration: 50,
      difficulty: 'Intermediate',
      calories: 280,
      image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Chris Taylor',
      rating: 4.6,
      description: 'Focus on building upper body strength with targeted exercises for chest, back, and arms.',
      exercises: ['Push-ups', 'Pull-ups', 'Shoulder Press', 'Bicep Curls']
    },
    {
      id: 6,
      title: 'Core Crusher',
      category: 'strength',
      duration: 35,
      difficulty: 'Intermediate',
      calories: 250,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Lisa Wang',
      rating: 4.8,
      description: 'Intense core workout to build strong abs and improve overall stability.',
      exercises: ['Planks', 'Russian Twists', 'Leg Raises', 'Bicycle Crunches']
    },
    {
      id: 7,
      title: 'Fat Burn Cardio',
      category: 'cardio',
      duration: 40,
      difficulty: 'Intermediate',
      calories: 380,
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'David Kim',
      rating: 4.7,
      description: 'Sustained cardio session designed to maximize fat burning and endurance.',
      exercises: ['Running', 'Jump Rope', 'High Knees', 'Butt Kicks']
    },
    {
      id: 8,
      title: 'Restorative Yoga',
      category: 'yoga',
      duration: 45,
      difficulty: 'Beginner',
      calories: 120,
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      trainer: 'Sophia Martinez',
      rating: 4.9,
      description: 'Gentle restorative practice to release tension and promote relaxation.',
      exercises: ['Gentle Stretches', 'Breathing Exercises', 'Supported Poses', 'Meditation']
    }
  ];

  // Filter workouts based on category and search term
  const filteredWorkouts = workouts.filter(workout => {
    const matchesCategory = activeCategory === 'all' || workout.category === activeCategory;
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Workout Programs</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Discover personalized workout routines for every fitness level. Transform your body and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredWorkouts.map(workout => (
              <div key={workout.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                {/* Workout Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}>
                      {workout.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-white bg-black/50 rounded-full px-2 py-1">
                    <FaStar className="w-3 h-3 text-yellow-400" />
                    <span className="text-sm">{workout.rating}</span>
                  </div>
                </div>

                {/* Workout Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                      {workout.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {workout.description}
                  </p>

                  {/* Workout Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="w-4 h-4 mr-2 text-teal-500" />
                      <span>{workout.duration} minutes</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaFire className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{workout.calories} calories</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUserFriends className="w-4 h-4 mr-2 text-blue-500" />
                      <span>By {workout.trainer}</span>
                    </div>
                  </div>

                  {/* Exercises Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Exercises:</h4>
                    <div className="flex flex-wrap gap-1">
                      {workout.exercises.slice(0, 3).map((exercise, index) => (
                        <span key={index} className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                          {exercise}
                        </span>
                      ))}
                      {workout.exercises.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{workout.exercises.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
                      Start Workout
                    </button>
                    <button className="p-2 border border-gray-300 hover:border-teal-300 rounded-lg transition-colors duration-200">
                      <FaHeart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredWorkouts.length === 0 && (
            <div className="text-center py-12">
              <FaDumbbell className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No workouts found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Body?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Join thousands of users who have achieved their fitness goals with our workout programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Start Free Trial
            </Link>
            <button className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200">
              Browse All Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkoutsPage;