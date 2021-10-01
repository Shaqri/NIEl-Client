import {Outlet} from 'react-router-dom';
import AppNav from './organisms/AppNav';

function App() {
  return (
    <>
    <AppNav />

    <Outlet />
    
    </>
   
  );
}

export default App;
