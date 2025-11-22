import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaFlag, FaChartLine, FaCalendarAlt, FaRunning, FaWeight, FaHeartbeat, FaUtensils, FaFire, FaBullseye } from 'react-icons/fa';

const GoalsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [newGoal, setNewGoal] = useState({
    title: '',
    type: 'fitness',
    target: '',
    deadline: '',
    description: ''
  });

  // Goal categories
  const goalTypes = [
    { id: 'fitness', name: 'Fitness', icon: FaRunning, color: 'text-blue-500' },
    { id: 'weight', name: 'Weight', icon: FaWeight, color: 'text-green-500' },
    { id: 'nutrition', name: 'Nutrition', icon: FaUtensils, color: 'text-yellow-500' },
    { id: 'health', name: 'Health', icon: FaHeartbeat, color: 'text-red-500' },
    { id: 'strength', name: 'Strength', icon: FaFire, color: 'text-orange-500' },
  ];

  // Sample goals data
  const currentGoals = [
    {
      id: 1,
      title: 'Lose 10 Pounds',
      type: 'weight',
      target: '10 lbs',
      current: '4 lbs',
      progress: 40,
      deadline: '2024-03-15',
      description: 'Lose weight through consistent exercise and healthy eating',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      activities: ['Cardio 3x/week', 'Strength training 2x/week', 'Calorie tracking'],
      milestones: [
        { target: '2 lbs', achieved: true, date: '2024-01-15' },
        { target: '5 lbs', achieved: false, date: '2024-02-01' },
        { target: '10 lbs', achieved: false, date: '2024-03-15' }
      ]
    },
    {
      id: 2,
      title: 'Run 5K Without Stopping',
      type: 'fitness',
      target: '5 km',
      current: '3 km',
      progress: 60,
      deadline: '2024-02-28',
      description: 'Build endurance to run 5 kilometers continuously',
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      activities: ['Interval training', 'Long distance runs', 'Rest days'],
      milestones: [
        { target: '1 km', achieved: true, date: '2024-01-10' },
        { target: '3 km', achieved: true, date: '2024-01-25' },
        { target: '5 km', achieved: false, date: '2024-02-28' }
      ]
    },
    {
      id: 3,
      title: 'Build Muscle Mass',
      type: 'strength',
      target: '5 lbs muscle',
      current: '2 lbs muscle',
      progress: 40,
      deadline: '2024-04-01',
      description: 'Increase lean muscle mass through strength training',
      image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      activities: ['Weight lifting 4x/week', 'High protein diet', 'Adequate rest'],
      milestones: [
        { target: '2 lbs', achieved: true, date: '2024-01-20' },
        { target: '5 lbs', achieved: false, date: '2024-04-01' }
      ]
    },
    {
      id: 4,
      title: 'Eat 5 Servings of Vegetables Daily',
      type: 'nutrition',
      target: '5 servings/day',
      current: '3 servings/day',
      progress: 60,
      deadline: '2024-02-15',
      description: 'Improve nutrition by increasing vegetable intake',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      activities: ['Meal prep', 'Vegetable snacks', 'Salad with every meal'],
      milestones: [
        { target: '3 servings', achieved: true, date: '2024-01-15' },
        { target: '5 servings', achieved: false, date: '2024-02-15' }
      ]
    }
  ];

  const completedGoals = [
    {
      id: 5,
      title: 'Drink 8 Glasses of Water Daily',
      type: 'health',
      target: '8 glasses/day',
      current: '8 glasses/day',
      progress: 100,
      deadline: '2024-01-20',
      completedDate: '2024-01-18',
      description: 'Establish hydration habit',
      image: 'https://images.unsplash.com/photo-1548839140-29f70f1d9a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      activities: ['Carry water bottle', 'Set reminders', 'Track intake']
    },
    {
      id: 6,
      title: 'Complete 30-Day Yoga Challenge',
      type: 'fitness',
      target: '30 days',
      current: '30 days',
      progress: 100,
      deadline: '2024-01-15',
      completedDate: '2024-01-15',
      description: 'Build flexibility and reduce stress',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      activities: ['Daily yoga practice', 'Breathing exercises', 'Meditation']
    }
  ];

  // Suggested goals
  const suggestedGoals = [
    {
      id: 7,
      title: 'Bench Press 200 lbs',
      type: 'strength',
      description: 'Increase your bench press strength',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      difficulty: 'Advanced',
      duration: '12 weeks'
    },
    {
      id: 8,
      title: 'Complete a Marathon',
      type: 'fitness',
      description: 'Train for and complete a full marathon',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      difficulty: 'Advanced',
      duration: '20 weeks'
    },
    {
      id: 9,
      title: 'Reduce Body Fat by 5%',
      type: 'weight',
      description: 'Lower body fat percentage through diet and exercise',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      difficulty: 'Intermediate',
      duration: '8 weeks'
    },
    {
      id: 10,
      title: 'Meditate Daily for 30 Days',
      type: 'health',
      description: 'Establish a daily meditation practice',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      difficulty: 'Beginner',
      duration: '30 days'
    }
  ];

  const goals = activeTab === 'current' ? currentGoals : completedGoals;

  const handleCreateGoal = (e) => {
    e.preventDefault();
    // Handle goal creation logic here
    console.log('New goal:', newGoal);
    setNewGoal({
      title: '',
      type: 'fitness',
      target: '',
      deadline: '',
      description: ''
    });
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    if (progress >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const targetDate = new Date(deadline);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Achieve Your Fitness Goals</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Set, track, and accomplish your fitness objectives with personalized goal planning.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-2xl">
              <FaBullseye className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{currentGoals.length}</div>
              <div className="text-gray-600">Active Goals</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <FaTrophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{completedGoals.length}</div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <FaChartLine className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(currentGoals.reduce((acc, goal) => acc + goal.progress, 0) / currentGoals.length)}%
              </div>
              <div className="text-gray-600">Average Progress</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <FaCalendarAlt className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {Math.min(...currentGoals.map(goal => getDaysRemaining(goal.deadline)))}
              </div>
              <div className="text-gray-600">Days to Next Deadline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column - Goals List */}
            <div className="lg:w-2/3">
              {/* Tabs */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('current')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === 'current'
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-teal-50'
                  }`}
                >
                  Current Goals
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === 'completed'
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-teal-50'
                  }`}
                >
                  Completed Goals
                </button>
              </div>

              {/* Goals Grid */}
              <div className="grid grid-cols-1 gap-6">
                {goals.map(goal => {
                  const IconComponent = goalTypes.find(type => type.id === goal.type)?.icon || FaFlag;
                  const typeColor = goalTypes.find(type => type.id === goal.type)?.color || 'text-gray-500';
                  
                  return (
                    <div key={goal.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* Goal Image */}
                        <div className="md:w-1/3">
                          <img 
                            src={goal.image} 
                            alt={goal.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        
                        {/* Goal Content */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <IconComponent className={`w-6 h-6 ${typeColor}`} />
                              <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                            </div>
                            {activeTab === 'current' && (
                              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                                {getDaysRemaining(goal.deadline)} days left
                              </span>
                            )}
                          </div>

                          <p className="text-gray-600 mb-4">{goal.description}</p>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Progress: {goal.progress}%</span>
                              <span>{goal.current} / {goal.target}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full ${getProgressColor(goal.progress)} transition-all duration-500`}
                                style={{ width: `${goal.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Activities */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {goal.activities.slice(0, 3).map((activity, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                {activity}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <button 
                              onClick={() => setSelectedGoal(goal)}
                              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                              View Details
                            </button>
                            {activeTab === 'current' && (
                              <button className="px-4 py-2 border border-gray-300 hover:border-teal-300 rounded-lg transition-colors duration-200">
                                Update Progress
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Empty State */}
              {goals.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <FaTrophy className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    {activeTab === 'current' ? 'No active goals' : 'No completed goals'}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {activeTab === 'current' 
                      ? 'Start by creating your first fitness goal!' 
                      : 'Complete some goals to see them here'
                    }
                  </p>
                  {activeTab === 'current' && (
                    <button 
                      onClick={() => document.getElementById('create-goal-modal').showModal()}
                      className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                      Create Your First Goal
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Right Column - Quick Actions & Suggestions */}
            <div className="lg:w-1/3">
              {/* Create Goal Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Create New Goal</h3>
                <p className="text-gray-600 mb-4">Start your journey towards a new achievement</p>
                <button 
                  onClick={() => document.getElementById('create-goal-modal').showModal()}
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  + Create Goal
                </button>
              </div>

              {/* Suggested Goals */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Suggested Goals</h3>
                <div className="space-y-4">
                  {suggestedGoals.map(goal => {
                    const IconComponent = goalTypes.find(type => type.id === goal.type)?.icon || FaFlag;
                    const typeColor = goalTypes.find(type => type.id === goal.type)?.color || 'text-gray-500';
                    
                    return (
                      <div key={goal.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer">
                        <img 
                          src={goal.image} 
                          alt={goal.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{goal.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span className={`px-2 py-1 rounded-full text-xs ${getProgressColor(0)} text-white`}>
                              {goal.difficulty}
                            </span>
                            <span>{goal.duration}</span>
                          </div>
                        </div>
                        <IconComponent className={`w-5 h-5 ${typeColor}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Goal Modal */}
      <dialog id="create-goal-modal" className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-6">Create New Goal</h3>
          
          <form onSubmit={handleCreateGoal} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goal Title</label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="e.g., Run 5K, Lose 10 pounds"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goal Type</label>
              <select
                value={newGoal.type}
                onChange={(e) => setNewGoal({...newGoal, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {goalTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target</label>
                <input
                  type="text"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g., 10 lbs, 5 km"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                <input
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newGoal.description}
                onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Describe your goal and why it's important to you..."
              ></textarea>
            </div>

            <div className="modal-action">
              <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg transition-colors duration-200">
                Create Goal
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Goal Detail Modal */}
      {selectedGoal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setSelectedGoal(null)}></div>
          
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all">
              <button
                onClick={() => setSelectedGoal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 transition-colors duration-200 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedGoal.image} 
                alt={selectedGoal.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedGoal.title}</h2>
                <p className="text-gray-600 mb-6">{selectedGoal.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-lg font-bold text-teal-600">{selectedGoal.progress}%</div>
                    <div className="text-sm text-gray-600">Progress</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{getDaysRemaining(selectedGoal.deadline)}</div>
                    <div className="text-sm text-gray-600">Days Remaining</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Milestones</h3>
                  <div className="space-y-2">
                    {selectedGoal.milestones?.map((milestone, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${milestone.achieved ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className={`${milestone.achieved ? 'text-green-600' : 'text-gray-600'}`}>
                            {milestone.target}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{milestone.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Activities</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedGoal.activities.map((activity, index) => (
                      <span key={index} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalsPage;