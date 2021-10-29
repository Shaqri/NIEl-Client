import {Outlet} from 'react-router-dom';
import AppNav from './organisms/AppNav';
import Container from './templates/Container';

function App() {
  return (
    <>
    <AppNav />

    <Outlet />
    
    </>
   
  );
}

export default App;
