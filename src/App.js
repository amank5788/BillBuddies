
import './App.css';
import About from './pages/components/main/About';
import Footer from './pages/components/footer/Footer';
import Functionalities from './pages/components/main/Functionalities';
import Navbar from './pages/components/header/Navbar';
import Signup from './pages/components/Signup';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar />
       <Outlet />
    <Footer />
   </>
  );
}

export default App;
