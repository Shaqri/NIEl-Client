import Container from './Container';
import AppNav from '../organisms/AppNav';

function ContainerWithNavbar({children, styleClass}) {
  return(
    <>
      <AppNav / >
      <Container styleClass={styleClass}>
      
      {children}
      </Container>
    </>
    
  );
 };

 export default ContainerWithNavbar;