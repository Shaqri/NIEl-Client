import ContainerWithNavbar from '../templates/ContainerWithNavbar';
import BackgroundWithText from '../molecules/BackgroundWithText';
import homeImg from '../../images/home.jpg';
import Services from '../organisms/Services';
import Licenses from '../organisms/Licenses'

function Home () {
  return(
  <ContainerWithNavbar styleClass="home space-nav-top">
    <BackgroundWithText 
    withShade 
    image={homeImg} 
    text="Welcome!"
    styleClass="welcome" />
    <Services/>
    <Licenses />
  </ContainerWithNavbar>
  );
};

export default Home;