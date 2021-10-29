import { useRoutes } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import App from './App';
import Home from './pages/Home';
import Beats from './pages/Beats';
import Merchandise from './pages/Merchandise';
import ContactUs from './pages/ContactUs';
import {useNavigate, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function AppRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') navigate('/home') 
  }, []);
  
  const router = useRoutes([
    { path: '/', element: <App />,
     children: [
      {path: '/home', element: <Home />},
      {path: '/beats/*', element: <Beats />},
      {path: '/merchandise', element: <Merchandise />},
      {path: '/contact_us', element: <ContactUs />},
     ]},
    { path: 'signup', element: <Signup/> },
    { path: 'login', element: <Login/> }
  ]);

  return router;
}

export default AppRouter;
