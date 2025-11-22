// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

// // Reusable NavLink component for styling
// const NavItem = ({ to, children }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//           isActive
//             ? 'bg-indigo-600 text-white' // Active link style
//             : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700' // Inactive link style
//         }`
//       }
//     >
//       {children}
//     </NavLink>
//   );
// };

// // Main Navbar Component
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Define your navigation links here
//   const navLinks = [
//     { to: '/', text: 'Home' },
//     { to: '/workouts', text: 'Workouts' },
//     { to: '/diet', text: 'Diet' },
//     { to: '/goals', text: 'Goals' },
//     { to: '/profile', text: 'Profile' },
//   ];

//   return (
//     <nav className="bg-white/95 shadow-sm sticky top-0 z-50 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* == Logo / Brand Name == */}
//           <div className="flex-shrink-0">
//             <NavLink to="/" className="text-2xl font-bold text-indigo-600">
//               FitTrack
//             </NavLink>
//           </div>

//           {/* == Desktop Navigation == */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navLinks.map((link) => (
//                 <NavItem key={link.to} to={link.to}>
//                   {link.text}
//                 </NavItem>
//               ))}
//             </div>
//           </div>

//           {/* == Desktop Auth Buttons == */}
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6 space-x-2">
//               <NavLink
//                 to="/login"
//                 className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
//               >
//                 Log In
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//               >
//                 Sign Up
//               </NavLink>
//             </div>
//           </div>

//           {/* == Mobile Menu Button == */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <HiOutlineX className="block h-6 w-6" />
//               ) : (
//                 <HiOutlineMenuAlt3 className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* == Mobile Menu (Dropdown) == */}
//       {/* This uses a transition for a smooth slide-down effect.
//       */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               onClick={() => setIsOpen(false)} // Close menu on click
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-md text-base font-medium ${
//                   isActive
//                     ? 'bg-indigo-600 text-white'
//                     : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
//                 }`
//               }
//             >
//               {link.text}
//             </NavLink>
//           ))}
//         </div>
        
//         {/* Mobile Auth Buttons */}
//         <div className="pt-4 pb-3 border-t border-gray-200">
//           <div className="flex flex-col items-start px-5 space-y-3">
//             <NavLink
//               to="/login"
//               onClick={() => setIsOpen(false)}
//               className="w-full text-left block px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
//             >
//               Log In
//             </NavLink>
//             <NavLink
//               to="/register"
//               onClick={() => setIsOpen(false)}
//               className="w-full text-left block px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//             >
//               Sign Up
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

// Reusable NavLink component for styling
const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive
            ? 'bg-teal-600 text-white' // Active link style
            : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700' // Inactive link style
        }`
      }
    >
      {children}
    </NavLink>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define your navigation links here
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/workouts', text: 'Workouts' },
    { to: '/diet', text: 'Diet' },
    { to: '/goals', text: 'Goals' },
    { to: '/profile', text: 'Profile' },
  ];

  return (
    <nav className="bg-white/95 shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* == Logo / Brand Name == */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-teal-600">
              FitTrack
            </NavLink>
          </div>

          {/* == Desktop Navigation == */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavItem key={link.to} to={link.to}>
                  {link.text}
                </NavItem>
              ))}
            </div>
          </div>

          {/* == Desktop Auth Buttons == */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-teal-300 transition-colors duration-200"
              >
                Log In
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          {/* == Mobile Menu Button == */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-600 focus:ring-white transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiOutlineX className="block h-6 w-6" />
              ) : (
                <HiOutlineMenuAlt3 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* == Mobile Menu (Dropdown) == */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        
        {/* Mobile Auth Buttons */}
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex flex-col items-start px-5 space-y-3">
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-left block px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-teal-300 transition-colors duration-200"
            >
              Log In
            </NavLink>
            <NavLink
              to="/register"
              onClick={() => setIsOpen(false)}
              className="w-full text-left block px-4 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;