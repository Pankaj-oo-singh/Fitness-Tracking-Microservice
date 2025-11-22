// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHeartbeat, FaAppleAlt, FaBullseye } from 'react-icons/fa'; // Icons for features

// const HomePage = () => {
//   // Define core features for the Feature section
//   const features = [
//     {
//       icon: FaHeartbeat,
//       title: 'Personalized Workouts',
//       description: 'Access hundreds of routines for every fitness level. Track reps, sets, and progress effortlessly.',
//       link: '/workouts',
//     },
//     {
//       icon: FaAppleAlt,
//       title: 'Custom Diet Plans',
//       description: 'Tailored nutrition guides and macro tracking to fuel your body and meet your dietary needs.',
//       link: '/diet',
//     },
//     {
//       icon: FaBullseye,
//       title: 'Goal Setting & Tracking',
//       description: 'Set realistic goals, monitor your achievements, and stay motivated with our insightful analytics.',
//       link: '/goals',
//     },
//   ];

//   return (
//     <div className="bg-white">
      
//       {/* 1. Hero Section */}
//       <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-gray-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
//             Transform Your Fitness Journey
//           </h1>
//           <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-10">
//             **FitTrack** is the all-in-one platform designed to help you crush your fitness goals, one workout and meal at a time.
//           </p>

//           <div className="flex justify-center space-x-4">
//             {/* Primary CTA */}
//             <Link
//               to="/register"
//               className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-200"
//             >
//               Start Your Free Trial
//             </Link>
            
//             {/* Secondary CTA */}
//             <Link
//               to="/workouts"
//               className="px-8 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition duration-200"
//             >
//               Explore Features
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* --- */}

//       {/* 2. Features Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Achieve More with Our Core Features
//             </h2>
//             <p className="mt-4 text-lg text-gray-500">
//               Everything you need to succeed, all in one place.
//             </p>
//           </div>

//           <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
//             {features.map((feature, index) => (
//               <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
//                 <feature.icon className="h-10 w-10 text-indigo-600 mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-base text-gray-600">{feature.description}</p>
//                 <Link to={feature.link} className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition duration-150">
//                     Learn More &rarr;
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- */}

//       {/* 3. Final CTA Block */}
//       <section className="py-16 bg-indigo-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//             Ready to Build Your Best Self?
//           </h2>
//           <p className="mt-4 text-xl text-indigo-200">
//             Join thousands of users who are hitting their goals with FitTrack.
//           </p>
//           <div className="mt-8 flex justify-center">
//             <Link
//               to="/register"
//               className="px-12 py-4 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 shadow-xl md:text-lg transition duration-200"
//             >
//               Sign Up Today
//             </Link>
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default HomePage;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaAppleAlt, FaBullseye } from 'react-icons/fa';

const HomePage = () => {
  // Define core features for the Feature section
  const features = [
    {
      icon: FaHeartbeat,
      title: 'Personalized Workouts',
      description: 'Access hundreds of routines for every fitness level. Track reps, sets, and progress effortlessly.',
      link: '/workouts',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: FaAppleAlt,
      title: 'Custom Diet Plans',
      description: 'Tailored nutrition guides and macro tracking to fuel your body and meet your dietary needs.',
      link: '/diet',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: FaBullseye,
      title: 'Goal Setting & Tracking',
      description: 'Set realistic goals, monitor your achievements, and stay motivated with our insightful analytics.',
      link: '/goals',
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ];

  return (
    <div className="bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Transform Your <span className="text-teal-600">Fitness Journey</span>
              </h1>
              <p className="max-w-2xl text-xl text-gray-600 mb-10 leading-relaxed">
                <strong className="text-teal-700">FitTrack</strong> is the all-in-one platform designed to help you crush your fitness goals, one workout and meal at a time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA */}
                <Link
                  to="/register"
                  className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  Start Your Free Trial
                </Link>
                
                {/* Secondary CTA */}
                <Link
                  to="/workouts"
                  className="px-8 py-4 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Fitness enthusiast working out"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-500 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-400 rounded-full -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- */}

      {/* 2. Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Achieve More with Our <span className="text-teal-600">Core Features</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to succeed, all in one place. From workouts to nutrition, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                
                {/* Feature Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-teal-100 rounded-lg mr-4">
                      <feature.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  
                  <Link 
                    to={feature.link} 
                    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors duration-150 group/link"
                  >
                    Learn More
                    <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-150">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 3. Stats Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-teal-100">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-teal-100">Workouts Completed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-teal-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 4. Final CTA Block */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Ready to Build Your <span className="text-teal-600">Best Self</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are hitting their goals with FitTrack. Start your transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-12 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Sign Up Today
            </Link>
            <Link
              to="/about"
              className="px-12 py-4 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div>✅ No credit card required</div>
            <div>✅ 14-day free trial</div>
            <div>✅ Cancel anytime</div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;