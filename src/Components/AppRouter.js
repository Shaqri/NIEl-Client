import { useRoutes } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import App from './App';
import Home from './pages/Home';

function AppRouter() {
  const router = useRoutes([
    { path: '/', element: <App />,
     children: [
      {path: '/', element: <Home />}
     ]},
    { path: 'signup', element: <Signup/> },
    { path: 'login', element: <Login/> }
  ]);

  return router;
}

export default AppRouter;
