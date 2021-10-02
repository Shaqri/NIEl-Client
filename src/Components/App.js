import {Outlet} from 'react-router-dom';
import AppNav from './organisms/AppNav';
import Container from './templates/Container';

function App() {
  return (
    <Container>
    <AppNav />

    <Outlet />
    
    </Container>
   
  );
}

export default App;
