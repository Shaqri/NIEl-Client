import Card from '../molecules/Card';
import ListWithHeader from '../molecules/ListWithHeader';
import Container from '../templates/Container';
import Description from '../atoms/Description';

function Services() {
  return(
    <Container styleClass="services ">
      <ListWithHeader styleClass="service-list" header="Our Services" headerClass="section-header">
        <Card 
          wrapperLink="/beats"
          icon="fas fa-headphones"
          titleText="Beats"
          description={
            <Description text="Acquire beats' licenses or request your custom exclusive beats."/>
          }
        />
        <Card 
          wrapperLink="/beats"
          icon="fas fa-puzzle-piece"
          titleText="Beats"
          description={
            <Description text="Acquire beats' licenses or request your custom exclusive beats."/>
          }
        />
        <Card
          wrapperLink="/beats" 
          icon="fas fa-mortar-pestle"
          titleText="Beats"
          description={
            <Description text="Acquire beats' licenses or request your custom exclusive beats."/>
          }
        />
        <Card 
          wrapperLink="/beats"
          icon="fas fa-tshirt"
          titleText="Beats"
          description={
            <Description text="Acquire beats' licenses or request your custom exclusive beats."/>
          }
        />
      </ListWithHeader>
    </Container>
  );

};

export default Services;