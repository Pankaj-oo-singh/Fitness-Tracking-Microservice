// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUser, FaEdit, FaCamera, FaTrophy, FaChartLine, FaDumbbell, FaUtensils, FaHeart, FaCog, FaSignOutAlt, FaCalendarAlt, FaWeight, FaRuler, FaBirthdayCake } from 'react-icons/fa';

// const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: 'Alex Johnson',
//     username: '@alexj',
//     email: 'alex.johnson@example.com',
//     bio: 'Fitness enthusiast passionate about strength training and healthy living. Always looking for new challenges!',
//     location: 'New York, NY',
//     joinDate: 'January 2024',
//     height: '5\'9"',
//     weight: '165 lbs',
//     age: 28,
//     fitnessLevel: 'Intermediate',
//     goals: ['Build Muscle', 'Improve Strength', 'Eat Healthier'],
//   });

//   const [stats, setStats] = useState({
//     workoutsCompleted: 45,
//     totalMinutes: 2250,
//     caloriesBurned: 12500,
//     currentStreak: 12,
//     goalsAchieved: 8,
//     weeklyAvg: 4.2,
//   });

//   const [workoutHistory, setWorkoutHistory] = useState([
//     { id: 1, name: 'Full Body Strength', date: '2024-02-15', duration: 45, calories: 320, type: 'Strength' },
//     { id: 2, name: 'HIIT Cardio', date: '2024-02-14', duration: 30, calories: 450, type: 'Cardio' },
//     { id: 3, name: 'Upper Body Focus', date: '2024-02-12', duration: 50, calories: 280, type: 'Strength' },
//     { id: 4, name: 'Yoga Flow', date: '2024-02-10', duration: 60, calories: 180, type: 'Flexibility' },
//     { id: 5, name: 'Leg Day', date: '2024-02-08', duration: 55, calories: 380, type: 'Strength' },
//   ]);

//   const [achievements, setAchievements] = useState([
//     { id: 1, name: 'First Workout', description: 'Completed your first workout', icon: '🏃', earned: true, date: '2024-01-15' },
//     { id: 2, name: 'Week Warrior', description: 'Complete 4 workouts in a week', icon: '💪', earned: true, date: '2024-01-22' },
//     { id: 3, name: 'Marathon Runner', description: 'Run 26.2 miles total', icon: '🏅', earned: false, progress: 65 },
//     { id: 4, name: 'Strength Master', description: 'Lift 1000 lbs total', icon: '🏋️', earned: false, progress: 40 },
//     { id: 5, name: 'Consistency King', description: '30-day workout streak', icon: '🔥', earned: false, progress: 80 },
//   ]);

//   const handleInputChange = (field, value) => {
//     setProfileData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSaveProfile = () => {
//     // In a real app, you would save to backend here
//     console.log('Saving profile:', profileData);
//     setIsEditing(false);
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const getAchievementProgress = (achievement) => {
//     if (achievement.earned) return 100;
//     return achievement.progress || 0;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Profile Header */}
//       <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
//             {/* Profile Picture */}
//             <div className="relative">
//               <div className="w-32 h-32 bg-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
//                 {profileData.name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
//                 <FaCamera className="w-4 h-4 text-gray-600" />
//               </button>
//             </div>

//             {/* Profile Info */}
//             <div className="flex-1 text-center md:text-left">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={profileData.name}
//                       onChange={(e) => handleInputChange('name', e.target.value)}
//                       className="text-3xl font-bold bg-transparent border-b border-white/30 focus:border-white focus:outline-none"
//                     />
//                   ) : (
//                     <h1 className="text-3xl font-bold">{profileData.name}</h1>
//                   )}
//                   <p className="text-teal-100">{profileData.username}</p>
//                 </div>
//                 <button
//                   onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
//                   className="mt-4 md:mt-0 flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
//                 >
//                   <FaEdit className="w-4 h-4" />
//                   <span>{isEditing ? 'Save Profile' : 'Edit Profile'}</span>
//                 </button>
//               </div>

//               {isEditing ? (
//                 <textarea
//                   value={profileData.bio}
//                   onChange={(e) => handleInputChange('bio', e.target.value)}
//                   className="w-full bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:border-white resize-none"
//                   rows="3"
//                 />
//               ) : (
//                 <p className="text-teal-100 max-w-2xl">{profileData.bio}</p>
//               )}

//               <div className="flex flex-wrap gap-4 mt-4 text-sm">
//                 <div className="flex items-center space-x-2">
//                   <FaCalendarAlt className="w-4 h-4" />
//                   <span>Joined {profileData.joinDate}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaUser className="w-4 h-4" />
//                   <span>{profileData.fitnessLevel}</span>
//                 </div>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={profileData.location}
//                     onChange={(e) => handleInputChange('location', e.target.value)}
//                     className="bg-transparent border-b border-white/30 focus:border-white focus:outline-none"
//                     placeholder="Location"
//                   />
//                 ) : (
//                   <div className="flex items-center space-x-2">
//                     <span>📍 {profileData.location}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Overview */}
//       <section className="py-8 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//             <div className="text-center p-4 bg-teal-50 rounded-2xl">
//               <FaDumbbell className="w-6 h-6 text-teal-600 mx-auto mb-2" />
//               <div className="text-xl font-bold text-gray-900">{stats.workoutsCompleted}</div>
//               <div className="text-sm text-gray-600">Workouts</div>
//             </div>
//             <div className="text-center p-4 bg-blue-50 rounded-2xl">
//               <FaChartLine className="w-6 h-6 text-blue-600 mx-auto mb-2" />
//               <div className="text-xl font-bold text-gray-900">{stats.totalMinutes}</div>
//               <div className="text-sm text-gray-600">Minutes</div>
//             </div>
//             <div className="text-center p-4 bg-orange-50 rounded-2xl">
//               <FaFire className="w-6 h-6 text-orange-600 mx-auto mb-2" />
//               <div className="text-xl font-bold text-gray-900">{stats.caloriesBurned.toLocaleString()}</div>
//               <div className="text-sm text-gray-600">Calories</div>
//             </div>
//             <div className="text-center p-4 bg-red-50 rounded-2xl">
//               <FaHeart className="w-6 h-6 text-red-600 mx-auto mb-2" />
//               <div className="text-xl font-bold text-gray-900">{stats.currentStreak}</div>
//               <div className="text-sm text-gray-600">Day Streak</div>
//             </div>
//             <div className="text-center p-4 bg-green-50 rounded-2xl">
//               <FaTrophy className="w-6 h-6 text-green-600 mx-auto mb-2" />
//               <div className="text-xl font-bold text-gray-900">{stats.goalsAchieved}</div>
//               <div className="text-sm text-gray-600">Goals Met</div>
//             </div>
//             <div className="text-center p-4 bg-purple-50 rounded-2xl">
//               <FaUtensils className="w-6 h-6 text-purple-600 mx-auto mb-2" />
//               <div className="text-xl font-bold text-gray-900">{stats.weeklyAvg}</div>
//               <div className="text-sm text-gray-600">Weekly Avg</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-8">
            
//             {/* Left Column - Navigation & Personal Info */}
//             <div className="lg:w-1/4">
//               {/* Personal Information Card */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Email</span>
//                     <span className="font-medium">{profileData.email}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Age</span>
//                     {isEditing ? (
//                       <input
//                         type="number"
//                         value={profileData.age}
//                         onChange={(e) => handleInputChange('age', e.target.value)}
//                         className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
//                       />
//                     ) : (
//                       <span className="font-medium">{profileData.age}</span>
//                     )}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Height</span>
//                     {isEditing ? (
//                       <input
//                         type="text"
//                         value={profileData.height}
//                         onChange={(e) => handleInputChange('height', e.target.value)}
//                         className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
//                       />
//                     ) : (
//                       <span className="font-medium">{profileData.height}</span>
//                     )}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Weight</span>
//                     {isEditing ? (
//                       <input
//                         type="text"
//                         value={profileData.weight}
//                         onChange={(e) => handleInputChange('weight', e.target.value)}
//                         className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
//                       />
//                     ) : (
//                       <span className="font-medium">{profileData.weight}</span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Goals Card */}
//               <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">My Goals</h3>
//                 <div className="space-y-3">
//                   {profileData.goals.map((goal, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
//                       <span className="text-gray-700">{goal}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
//                   Update Goals
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Main Content */}
//             <div className="lg:w-3/4">
//               {/* Tabs */}
//               <div className="flex space-x-4 mb-8 overflow-x-auto">
//                 {['overview', 'workouts', 'achievements', 'settings'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
//                       activeTab === tab
//                         ? 'bg-teal-600 text-white shadow-lg'
//                         : 'bg-white text-gray-700 hover:bg-teal-50'
//                     }`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               {activeTab === 'overview' && (
//                 <div className="space-y-6">
//                   {/* Recent Activity */}
//                   <div className="bg-white rounded-2xl shadow-lg p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
//                     <div className="space-y-4">
//                       {workoutHistory.slice(0, 3).map(workout => (
//                         <div key={workout.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                           <div>
//                             <h4 className="font-semibold text-gray-900">{workout.name}</h4>
//                             <p className="text-sm text-gray-600">{formatDate(workout.date)} • {workout.duration}min • {workout.calories} cal</p>
//                           </div>
//                           <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                             workout.type === 'Strength' ? 'bg-blue-100 text-blue-700' :
//                             workout.type === 'Cardio' ? 'bg-green-100 text-green-700' :
//                             'bg-purple-100 text-purple-700'
//                           }`}>
//                             {workout.type}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                     <Link to="/workouts" className="block text-center mt-4 text-teal-600 hover:text-teal-700 font-medium">
//                       View All Activity →
//                     </Link>
//                   </div>

//                   {/* Progress Chart Placeholder */}
//                   <div className="bg-white rounded-2xl shadow-lg p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Progress</h3>
//                     <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <p className="text-gray-500">Progress chart visualization would go here</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'workouts' && (
//                 <div className="bg-white rounded-2xl shadow-lg p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">Workout History</h3>
//                   <div className="space-y-4">
//                     {workoutHistory.map(workout => (
//                       <div key={workout.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                         <div className="flex items-center space-x-4">
//                           <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
//                             <FaDumbbell className="w-6 h-6 text-teal-600" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-gray-900">{workout.name}</h4>
//                             <p className="text-sm text-gray-600">{formatDate(workout.date)} • {workout.duration} minutes</p>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-semibold text-gray-900">{workout.calories} cal</div>
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             workout.type === 'Strength' ? 'bg-blue-100 text-blue-700' :
//                             workout.type === 'Cardio' ? 'bg-green-100 text-green-700' :
//                             'bg-purple-100 text-purple-700'
//                           }`}>
//                             {workout.type}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'achievements' && (
//                 <div className="bg-white rounded-2xl shadow-lg p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {achievements.map(achievement => (
//                       <div key={achievement.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
//                         <div className="text-3xl">{achievement.icon}</div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
//                           <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div 
//                               className="h-2 rounded-full bg-teal-500 transition-all duration-500"
//                               style={{ width: `${getAchievementProgress(achievement)}%` }}
//                             ></div>
//                           </div>
//                           <div className="flex justify-between text-xs text-gray-500 mt-1">
//                             <span>{achievement.earned ? 'Earned' : 'In Progress'}</span>
//                             <span>{getAchievementProgress(achievement)}%</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'settings' && (
//                 <div className="bg-white rounded-2xl shadow-lg p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>
//                   <div className="space-y-6">
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-4">Notifications</h4>
//                       <div className="space-y-3">
//                         {['Workout reminders', 'Goal updates', 'Weekly progress reports', 'New features'].map(setting => (
//                           <div key={setting} className="flex items-center justify-between">
//                             <span className="text-gray-700">{setting}</span>
//                             <label className="relative inline-flex items-center cursor-pointer">
//                               <input type="checkbox" className="sr-only peer" defaultChecked />
//                               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-4">Privacy</h4>
//                       <div className="space-y-3">
//                         {['Make profile public', 'Show workout statistics', 'Allow messages'].map(setting => (
//                           <div key={setting} className="flex items-center justify-between">
//                             <span className="text-gray-700">{setting}</span>
//                             <label className="relative inline-flex items-center cursor-pointer">
//                               <input type="checkbox" className="sr-only peer" />
//                               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="pt-6 border-t border-gray-200">
//                       <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200">
//                         <FaSignOutAlt className="w-4 h-4" />
//                         <span>Sign Out</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaEdit, 
  FaCamera, 
  FaTrophy, 
  FaChartLine, 
  FaDumbbell, 
  FaUtensils, 
  FaHeart, 
  FaCog, 
  FaSignOutAlt, 
  FaCalendarAlt, 
  FaWeight, 
  FaRuler, 
  FaBirthdayCake,
  FaFire // Added FaFire import
} from 'react-icons/fa';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    username: '@alexj',
    email: 'alex.johnson@example.com',
    bio: 'Fitness enthusiast passionate about strength training and healthy living. Always looking for new challenges!',
    location: 'New York, NY',
    joinDate: 'January 2024',
    height: '5\'9"',
    weight: '165 lbs',
    age: 28,
    fitnessLevel: 'Intermediate',
    goals: ['Build Muscle', 'Improve Strength', 'Eat Healthier'],
  });

  const [stats, setStats] = useState({
    workoutsCompleted: 45,
    totalMinutes: 2250,
    caloriesBurned: 12500,
    currentStreak: 12,
    goalsAchieved: 8,
    weeklyAvg: 4.2,
  });

  const [workoutHistory, setWorkoutHistory] = useState([
    { id: 1, name: 'Full Body Strength', date: '2024-02-15', duration: 45, calories: 320, type: 'Strength' },
    { id: 2, name: 'HIIT Cardio', date: '2024-02-14', duration: 30, calories: 450, type: 'Cardio' },
    { id: 3, name: 'Upper Body Focus', date: '2024-02-12', duration: 50, calories: 280, type: 'Strength' },
    { id: 4, name: 'Yoga Flow', date: '2024-02-10', duration: 60, calories: 180, type: 'Flexibility' },
    { id: 5, name: 'Leg Day', date: '2024-02-08', duration: 55, calories: 380, type: 'Strength' },
  ]);

  const [achievements, setAchievements] = useState([
    { id: 1, name: 'First Workout', description: 'Completed your first workout', icon: '🏃', earned: true, date: '2024-01-15' },
    { id: 2, name: 'Week Warrior', description: 'Complete 4 workouts in a week', icon: '💪', earned: true, date: '2024-01-22' },
    { id: 3, name: 'Marathon Runner', description: 'Run 26.2 miles total', icon: '🏅', earned: false, progress: 65 },
    { id: 4, name: 'Strength Master', description: 'Lift 1000 lbs total', icon: '🏋️', earned: false, progress: 40 },
    { id: 5, name: 'Consistency King', description: '30-day workout streak', icon: '🔥', earned: false, progress: 80 },
  ]);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    // In a real app, you would save to backend here
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getAchievementProgress = (achievement) => {
    if (achievement.earned) return 100;
    return achievement.progress || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 bg-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                <FaCamera className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-3xl font-bold bg-transparent border-b border-white/30 focus:border-white focus:outline-none"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold">{profileData.name}</h1>
                  )}
                  <p className="text-teal-100">{profileData.username}</p>
                </div>
                <button
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  className="mt-4 md:mt-0 flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <FaEdit className="w-4 h-4" />
                  <span>{isEditing ? 'Save Profile' : 'Edit Profile'}</span>
                </button>
              </div>

              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:border-white resize-none"
                  rows="3"
                />
              ) : (
                <p className="text-teal-100 max-w-2xl">{profileData.bio}</p>
              )}

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>Joined {profileData.joinDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUser className="w-4 h-4" />
                  <span>{profileData.fitnessLevel}</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-transparent border-b border-white/30 focus:border-white focus:outline-none"
                    placeholder="Location"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>📍 {profileData.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-teal-50 rounded-2xl">
              <FaDumbbell className="w-6 h-6 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stats.workoutsCompleted}</div>
              <div className="text-sm text-gray-600">Workouts</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-2xl">
              <FaChartLine className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stats.totalMinutes}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-2xl">
              <FaFire className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stats.caloriesBurned.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Calories</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <FaHeart className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stats.currentStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-2xl">
              <FaTrophy className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stats.goalsAchieved}</div>
              <div className="text-sm text-gray-600">Goals Met</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-2xl">
              <FaUtensils className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stats.weeklyAvg}</div>
              <div className="text-sm text-gray-600">Weekly Avg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column - Navigation & Personal Info */}
            <div className="lg:w-1/4">
              {/* Personal Information Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email</span>
                    <span className="font-medium">{profileData.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Age</span>
                    {isEditing ? (
                      <input
                        type="number"
                        value={profileData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                      />
                    ) : (
                      <span className="font-medium">{profileData.age}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Height</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                      />
                    ) : (
                      <span className="font-medium">{profileData.height}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weight</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                      />
                    ) : (
                      <span className="font-medium">{profileData.weight}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Goals Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">My Goals</h3>
                <div className="space-y-3">
                  {profileData.goals.map((goal, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">{goal}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                  Update Goals
                </button>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:w-3/4">
              {/* Tabs */}
              <div className="flex space-x-4 mb-8 overflow-x-auto">
                {['overview', 'workouts', 'achievements', 'settings'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-teal-50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Recent Activity */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {workoutHistory.slice(0, 3).map(workout => (
                        <div key={workout.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">{workout.name}</h4>
                            <p className="text-sm text-gray-600">{formatDate(workout.date)} • {workout.duration}min • {workout.calories} cal</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            workout.type === 'Strength' ? 'bg-blue-100 text-blue-700' :
                            workout.type === 'Cardio' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {workout.type}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link to="/workouts" className="block text-center mt-4 text-teal-600 hover:text-teal-700 font-medium">
                      View All Activity →
                    </Link>
                  </div>

                  {/* Progress Chart Placeholder */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Progress</h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Progress chart visualization would go here</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'workouts' && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Workout History</h3>
                  <div className="space-y-4">
                    {workoutHistory.map(workout => (
                      <div key={workout.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                            <FaDumbbell className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{workout.name}</h4>
                            <p className="text-sm text-gray-600">{formatDate(workout.date)} • {workout.duration} minutes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{workout.calories} cal</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            workout.type === 'Strength' ? 'bg-blue-100 text-blue-700' :
                            workout.type === 'Cardio' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {workout.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map(achievement => (
                      <div key={achievement.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-teal-500 transition-all duration-500"
                              style={{ width: `${getAchievementProgress(achievement)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{achievement.earned ? 'Earned' : 'In Progress'}</span>
                            <span>{getAchievementProgress(achievement)}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Notifications</h4>
                      <div className="space-y-3">
                        {['Workout reminders', 'Goal updates', 'Weekly progress reports', 'New features'].map(setting => (
                          <div key={setting} className="flex items-center justify-between">
                            <span className="text-gray-700">{setting}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Privacy</h4>
                      <div className="space-y-3">
                        {['Make profile public', 'Show workout statistics', 'Allow messages'].map(setting => (
                          <div key={setting} className="flex items-center justify-between">
                            <span className="text-gray-700">{setting}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200">
                        <FaSignOutAlt className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;