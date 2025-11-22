// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaInstagram, FaDumbbell } from 'react-icons/fa'; // Added FaDumbbell for logo

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
//           {/* == Column 1: Brand & Socials == */}
//           <div className="md:col-span-1 lg:col-span-2">
//             <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
//               <FaDumbbell className="text-indigo-400 h-8 w-8" />
//               <span>FitTrack</span>
//             </Link>
//             <p className="text-gray-400 max-w-xs mb-4">
//               Your personal companion for a healthier, stronger life.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <FaFacebook className="h-6 w-6" />
//               </a>
//               <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <FaInstagram className="h-6 w-6" />
//               </a>
//               <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <FaTwitter className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           {/* == Column 2: Quick Links == */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               <li><Link to="/workouts" className="hover:text-indigo-400 transition-colors duration-200">Workouts</Link></li>
//               <li><Link to="/diet" className="hover:text-indigo-400 transition-colors duration-200">Diet Plans</Link></li>
//               <li><Link to="/goals" className="hover:text-indigo-400 transition-colors duration-200">Goals</Link></li>
//               <li><Link to="/profile" className="hover:text-indigo-400 transition-colors duration-200">Profile</Link></li>
//             </ul>
//           </div>

//           {/* == Column 3: Company == */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
//               Company
//             </h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">About Us</a></li>
//               <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Careers</a></li>
//               <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Contact</a></li>
//               <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a></li>
//             </ul>
//           </div>

//         </div>

//         {/* == Bottom Bar: Copyright == */}
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
//           <p>&copy; {currentYear} FitTrack. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaDumbbell, FaHeartbeat } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* == Column 1: Brand & Socials == */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-white mb-4 group">
              <div className="relative">
                <FaHeartbeat className="text-teal-400 h-8 w-8 transform group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute -inset-1 bg-teal-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-200"></div>
              </div>
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                FitTrack
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Your personal companion for a healthier, stronger life. Track workouts, monitor nutrition, 
              and achieve your fitness goals with our comprehensive platform.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="p-2 bg-gray-700 hover:bg-teal-600 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaFacebook className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="p-2 bg-gray-700 hover:bg-teal-600 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaInstagram className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="p-2 bg-gray-700 hover:bg-teal-600 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaTwitter className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* == Column 2: Quick Links == */}
          <div>
            <h3 className="text-sm font-semibold text-teal-300 tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/workouts', text: 'Workouts' },
                { to: '/diet', text: 'Diet Plans' },
                { to: '/goals', text: 'Goals' },
                { to: '/profile', text: 'Profile' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="flex items-center text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* == Column 3: Company == */}
          <div>
            <h3 className="text-sm font-semibold text-teal-300 tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: '#', text: 'About Us' },
                { href: '#', text: 'Careers' },
                { href: '#', text: 'Contact' },
                { href: '#', text: 'Privacy Policy' },
                { href: '#', text: 'Terms of Service' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* == Newsletter Signup == */}
        <div className="mt-12 pt-8 border-t border-teal-800/50">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-teal-300 tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-teal-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* == Bottom Bar: Copyright == */}
        <div className="mt-8 pt-8 border-t border-teal-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} FitTrack. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center space-x-1">
            <span>Made with</span>
            <FaHeartbeat className="text-teal-500 h-4 w-4 mx-1" />
            <span>for fitness enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;