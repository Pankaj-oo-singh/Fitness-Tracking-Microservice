
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer';
import AppRoutes from "./components/routes/AppRoutes";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* This is a common layout. 
        Your AppRoutes.jsx will define *what* renders in the <main> section.
        If your AppRoutes.jsx already contains the <Navbar>, that's fine too.
        
        A more modern approach is to use an <Outlet /> layout.
      */}
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
         {/* AppRoutes will render your pages here */}
         <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

// Or, if your AppRoutes.jsx defines all routes including the layout:
// function App() {
//   return <AppRoutes />;
// }

export default App;
