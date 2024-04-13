
import './App.css';
import About from './pages/components/main/About';
import Footer from './pages/components/footer/Footer';
import Functionalities from './pages/components/main/Functionalities';
import Navbar from './pages/components/header/Navbar';
import Signup from './pages/components/Signup';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/components/Login';
import Dashboard from './pages/Dashboard';
import Protected from './pages/AuthLayout';
import Dash from './pages/components/main/Dash';

function App() {
  return (
   <>
    <Navbar />
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={ <Protected authentication={false}>
            <Login />
          </Protected>} />
          <Route path='signup' element={<Signup />} />
          <Route path='dashboard/*' element={
            <Protected authentication={true}>
            <Dashboard />
          </Protected>
            
          } />
          
        
      
      
        </Routes>
      
    <Footer />
   </>
  );
}

export default App;
