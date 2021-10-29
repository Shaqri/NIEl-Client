import Container from '../templates/Container';
import BackgroundWithText from '../molecules/BackgroundWithText';
import homeImg from '../../images/home.jpg';
import Services from '../organisms/Services';
import Licenses from '../organisms/Licenses'

function Home () {
  return(
  <Container styleClass="page-container home">
    <BackgroundWithText withShade image={homeImg} text="Welcome!" styleClass="welcome" />
    <Services/>
    <Licenses />
  </Container>
  );
};

export default Home;