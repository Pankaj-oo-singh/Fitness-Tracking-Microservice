// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FaDumbbell } from 'react-icons/fa';

// // // const RegisterPage = () => {
// // //   const [formData, setFormData] = useState({
// // //     fullName: '',
// // //     email: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //   });

// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   const { fullName, email, password, confirmPassword } = formData;

// // //   const handleChange = (e) => {
// // //     setFormData((prevState) => ({
// // //       ...prevState,
// // //       [e.target.name]: e.target.value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError('');

// // //     if (password !== confirmPassword) {
// // //       setError("Passwords do not match");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       // **TODO:** Replace this with your actual API call (e.g., authApi.register)
// // //       console.log('Registering with:', { fullName, email, password });
      
// // //       // Simulate network request delay
// // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // //       alert('Registration successful! (Data logged to console)');
// // //       // navigate('/dashboard'); // Uncomment and use useNavigate to redirect

// // //     } catch (err) {
// // //       setError(err.message || 'Failed to register. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        
// // //         {/* Header: Logo and Title */}
// // //         <div>
// // //           <FaDumbbell className="mx-auto h-12 w-auto text-indigo-600" />
// // //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// // //             Create your account
// // //           </h2>
// // //           <p className="mt-2 text-center text-sm text-gray-600">
// // //             Or{' '}
// // //             <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
// // //               sign in to your existing account
// // //             </Link>
// // //           </p>
// // //         </div>

// // //         {/* Form Container */}
// // //         <form className="space-y-6" onSubmit={handleSubmit}>
          
// // //           {/* Display error message */}
// // //           {error && (
// // //             <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
// // //               {error}
// // //             </div>
// // //           )}

// // //           <div className="rounded-md shadow-sm space-y-3">
            
// // //             {/* Full Name Input */}
// // //             <div>
// // //               <input
// // //                 id="fullName"
// // //                 name="fullName"
// // //                 type="text"
// // //                 required
// // //                 className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 placeholder="Full Name"
// // //                 value={fullName}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
            
// // //             {/* Email Input */}
// // //             <div>
// // //               <input
// // //                 id="email"
// // //                 name="email"
// // //                 type="email"
// // //                 autoComplete="email"
// // //                 required
// // //                 className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 placeholder="Email address"
// // //                 value={email}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
            
// // //             {/* Password Input */}
// // //             <div>
// // //               <input
// // //                 id="password"
// // //                 name="password"
// // //                 type="password"
// // //                 autoComplete="new-password"
// // //                 required
// // //                 className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 placeholder="Password"
// // //                 value={password}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
            
// // //             {/* Confirm Password Input */}
// // //             <div>
// // //               <input
// // //                 id="confirmPassword"
// // //                 name="confirmPassword"
// // //                 type="password"
// // //                 autoComplete="new-password"
// // //                 required
// // //                 className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 placeholder="Confirm Password"
// // //                 value={confirmPassword}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 transition duration-150 ease-in-out"
// // //             >
// // //               {loading ? 'Creating account...' : 'Create Account'}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RegisterPage;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter, FaUser, FaEnvelope, FaLock, FaDumbbell } from 'react-icons/fa';

// // const RegisterPage = ({ isOpen, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     fitnessLevel: 'beginner',
// //     goals: []
// //   });

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const fitnessGoals = [
// //     'Weight Loss',
// //     'Muscle Gain',
// //     'Endurance',
// //     'Strength',
// //     'Flexibility',
// //     'General Fitness'
// //   ];

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleGoalToggle = (goal) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       goals: prev.goals.includes(goal)
// //         ? prev.goals.filter(g => g !== goal)
// //         : [...prev.goals, goal]
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
    
// //     // Simulate API call
// //     setTimeout(() => {
// //       console.log('Registration data:', formData);
// //       setIsLoading(false);
// //       // Here you would typically handle registration logic
// //     }, 1500);
// //   };

// //   const handleSocialRegister = (provider) => {
// //     console.log(`Register with ${provider}`);
// //     // Social registration logic here
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 overflow-y-auto">
// //       {/* Backdrop */}
// //       <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
// //       {/* Modal Container */}
// //       <div className="flex min-h-full items-center justify-center p-4">
// //         <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
          
// //           {/* Close Button */}
// //           <button
// //             onClick={onClose}
// //             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
// //           >
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //             </svg>
// //           </button>

// //           {/* Header */}
// //           <div className="px-8 pt-8 pb-6">
// //             <div className="flex items-center justify-center space-x-3 mb-6">
// //               <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg">
// //                 <FaDumbbell className="h-6 w-6 text-white" />
// //               </div>
// //               <h2 className="text-2xl font-bold text-gray-900">Join FitTrack</h2>
// //             </div>
// //             <p className="text-gray-600 text-center">Start your fitness journey today</p>
// //           </div>

// //           {/* Social Login Buttons */}
// //           <div className="px-8 pb-6">
// //             <div className="grid grid-cols-3 gap-3">
// //               <button
// //                 onClick={() => handleSocialRegister('google')}
// //                 className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
// //               >
// //                 <FaGoogle className="h-5 w-5 text-red-500" />
// //               </button>
// //               <button
// //                 onClick={() => handleSocialRegister('facebook')}
// //                 className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
// //               >
// //                 <FaFacebook className="h-5 w-5 text-blue-600" />
// //               </button>
// //               <button
// //                 onClick={() => handleSocialRegister('twitter')}
// //                 className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
// //               >
// //                 <FaTwitter className="h-5 w-5 text-blue-400" />
// //               </button>
// //             </div>
            
// //             <div className="relative flex items-center my-6">
// //               <div className="flex-grow border-t border-gray-300"></div>
// //               <span className="flex-shrink mx-4 text-gray-500 text-sm">or continue with email</span>
// //               <div className="flex-grow border-t border-gray-300"></div>
// //             </div>
// //           </div>

// //           {/* Registration Form */}
// //           <form onSubmit={handleSubmit} className="px-8 pb-8">
// //             <div className="space-y-4">
// //               {/* Name Fields */}
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     First Name
// //                   </label>
// //                   <div className="relative">
// //                     <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //                     <input
// //                       type="text"
// //                       name="firstName"
// //                       value={formData.firstName}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
// //                       placeholder="John"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Last Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="lastName"
// //                     value={formData.lastName}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
// //                     placeholder="Doe"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">
// //                   Email Address
// //                 </label>
// //                 <div className="relative">
// //                   <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
// //                     placeholder="john@example.com"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Password */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">
// //                   Password
// //                 </label>
// //                 <div className="relative">
// //                   <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //                   <input
// //                     type={showPassword ? 'text' : 'password'}
// //                     name="password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
// //                     placeholder="••••••••"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
// //                   >
// //                     {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Confirm Password */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">
// //                   Confirm Password
// //                 </label>
// //                 <div className="relative">
// //                   <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //                   <input
// //                     type={showConfirmPassword ? 'text' : 'password'}
// //                     name="confirmPassword"
// //                     value={formData.confirmPassword}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
// //                     placeholder="••••••••"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
// //                   >
// //                     {showConfirmPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Fitness Level */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">
// //                   Fitness Level
// //                 </label>
// //                 <select
// //                   name="fitnessLevel"
// //                   value={formData.fitnessLevel}
// //                   onChange={handleChange}
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
// //                 >
// //                   <option value="beginner">Beginner</option>
// //                   <option value="intermediate">Intermediate</option>
// //                   <option value="advanced">Advanced</option>
// //                 </select>
// //               </div>

// //               {/* Fitness Goals */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   Fitness Goals (Select all that apply)
// //                 </label>
// //                 <div className="grid grid-cols-2 gap-2">
// //                   {fitnessGoals.map((goal) => (
// //                     <label key={goal} className="flex items-center space-x-2 cursor-pointer">
// //                       <input
// //                         type="checkbox"
// //                         checked={formData.goals.includes(goal)}
// //                         onChange={() => handleGoalToggle(goal)}
// //                         className="rounded text-teal-600 focus:ring-teal-500"
// //                       />
// //                       <span className="text-sm text-gray-700">{goal}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
// //             >
// //               {isLoading ? (
// //                 <div className="flex items-center justify-center">
// //                   <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
// //                   Creating Account...
// //                 </div>
// //               ) : (
// //                 'Create Account'
// //               )}
// //             </button>

// //             {/* Login Link */}
// //             <div className="mt-4 text-center">
// //               <p className="text-gray-600">
// //                 Already have an account?{' '}
// //                 <Link
// //                   to="/login"
// //                   onClick={onClose}
// //                   className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
// //                 >
// //                   Sign in
// //                 </Link>
// //               </p>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter, FaUser, FaEnvelope, FaLock, FaDumbbell } from 'react-icons/fa';

// const RegisterPage = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     fitnessLevel: 'beginner',
//     goals: []
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fitnessGoals = [
//     'Weight Loss',
//     'Muscle Gain',
//     'Endurance',
//     'Strength',
//     'Flexibility',
//     'General Fitness'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (error) setError('');
//   };

//   const handleGoalToggle = (goal) => {
//     setFormData(prev => ({
//       ...prev,
//       goals: prev.goals.includes(goal)
//         ? prev.goals.filter(g => g !== goal)
//         : [...prev.goals, goal]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
    
//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords don't match");
//       return;
//     }
    
//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       console.log('Registration data:', formData);
      
//       // Success - you can redirect or show success message
//       alert('Registration successful! Welcome to FitTrack!');
//       onClose(); // Close modal on success
      
//     } catch (err) {
//       setError(err.message || 'Failed to register. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSocialRegister = (provider) => {
//     console.log(`Register with ${provider}`);
//     // Social registration logic here
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       {/* Backdrop */}
//       <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
//       {/* Modal Container */}
//       <div className="flex min-h-full items-center justify-center p-4">
//         <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
          
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 transition-colors duration-200 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Header */}
//           <div className="px-8 pt-8 pb-6">
//             <div className="flex items-center justify-center space-x-3 mb-4">
//               <div className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl shadow-lg">
//                 <FaDumbbell className="h-7 w-7 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
//                   Join FitTrack
//                 </h2>
//                 <p className="text-gray-600 text-sm">Start your fitness journey today</p>
//               </div>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mx-8 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
//               {error}
//             </div>
//           )}

//           {/* Social Login Buttons */}
//           <div className="px-8 pb-6">
//             <div className="grid grid-cols-3 gap-3">
//               <button
//                 onClick={() => handleSocialRegister('google')}
//                 className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
//               >
//                 <FaGoogle className="h-5 w-5 text-gray-600 group-hover:text-red-500 transition-colors" />
//               </button>
//               <button
//                 onClick={() => handleSocialRegister('facebook')}
//                 className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
//               >
//                 <FaFacebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
//               </button>
//               <button
//                 onClick={() => handleSocialRegister('twitter')}
//                 className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
//               >
//                 <FaTwitter className="h-5 w-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
//               </button>
//             </div>
            
//             <div className="relative flex items-center my-6">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="flex-shrink mx-4 text-gray-500 text-sm">or continue with email</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <form onSubmit={handleSubmit} className="px-8 pb-8">
//             <div className="space-y-4">
//               {/* Name Fields */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     First Name
//                   </label>
//                   <div className="relative">
//                     <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
//                       placeholder="John"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
//                     placeholder="Doe"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     minLength="6"
//                     className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors duration-200"
//                   >
//                     {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     required
//                     minLength="6"
//                     className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors duration-200"
//                   >
//                     {showConfirmPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Fitness Level */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Fitness Level
//                 </label>
//                 <select
//                   name="fitnessLevel"
//                   value={formData.fitnessLevel}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
//                 >
//                   <option value="beginner">Beginner</option>
//                   <option value="intermediate">Intermediate</option>
//                   <option value="advanced">Advanced</option>
//                 </select>
//               </div>

//               {/* Fitness Goals */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Fitness Goals (Select all that apply)
//                 </label>
//                 <div className="grid grid-cols-2 gap-2">
//                   {fitnessGoals.map((goal) => (
//                     <label key={goal} className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-teal-50 transition-colors duration-200">
//                       <input
//                         type="checkbox"
//                         checked={formData.goals.includes(goal)}
//                         onChange={() => handleGoalToggle(goal)}
//                         className="rounded text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">{goal}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="mt-4 flex items-center">
//               <input
//                 type="checkbox"
//                 required
//                 className="rounded text-teal-600 focus:ring-teal-500 border-gray-300"
//               />
//               <span className="ml-2 text-sm text-gray-600">
//                 I agree to the{' '}
//                 <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
//                   Terms & Conditions
//                 </a>
//               </span>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
//                   Creating Account...
//                 </div>
//               ) : (
//                 'Create Account'
//               )}
//             </button>

//             {/* Login Link */}
//             <div className="mt-4 text-center">
//               <p className="text-gray-600">
//                 Already have an account?{' '}
//                 <Link
//                   to="/login"
//                   onClick={onClose}
//                   className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
//                 >
//                   Sign in
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter, FaUser, FaEnvelope, FaLock, FaDumbbell } from 'react-icons/fa';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    fitnessLevel: 'beginner',
    goals: []
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fitnessGoals = [
    'Weight Loss',
    'Muscle Gain',
    'Endurance',
    'Strength',
    'Flexibility',
    'General Fitness'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleGoalToggle = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Registration data:', formData);
      
      // Success - redirect to login or dashboard
      alert('Registration successful! Welcome to FitTrack!');
      navigate('/login'); // Redirect to login page
      
    } catch (err) {
      setError(err.message || 'Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialRegister = (provider) => {
    console.log(`Register with ${provider}`);
    // Social registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl shadow-lg">
              <FaDumbbell className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              FitTrack
            </h1>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-gray-600">Join thousands of users transforming their fitness journey</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Social Login Buttons */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialRegister('google')}
                className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
              >
                <FaGoogle className="h-5 w-5 text-gray-600 group-hover:text-red-500 transition-colors" />
              </button>
              <button
                onClick={() => handleSocialRegister('facebook')}
                className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
              >
                <FaFacebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => handleSocialRegister('twitter')}
                className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
              >
                <FaTwitter className="h-5 w-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
            
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">or continue with email</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Fitness Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fitness Level
                  </label>
                  <select
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength="6"
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors duration-200"
                    >
                      {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength="6"
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors duration-200"
                    >
                      {showConfirmPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Fitness Goals */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fitness Goals (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {fitnessGoals.map((goal) => (
                      <label key={goal} className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                        <input
                          type="checkbox"
                          checked={formData.goals.includes(goal)}
                          onChange={() => handleGoalToggle(goal)}
                          className="rounded text-teal-600 focus:ring-teal-500 border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-6 flex items-center">
              <input
                type="checkbox"
                required
                className="rounded text-teal-600 focus:ring-teal-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                  Terms & Conditions
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-4 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;