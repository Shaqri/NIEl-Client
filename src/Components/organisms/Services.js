import Card from '../molecules/Card';
import ListWithHeader from '../molecules/ListWithHeader';
import Container from '../templates/Container';


function Services() {
  return(
    <Container styleClass="services ">
      <ListWithHeader styleClass="service-list" header="Our Services" headerClass="section-header">
        <Card 
          icon="fas fa-headphones"
          titleText="Beats"
          descriptionText="Acquire beats' licenses or request your custom exclusive beats."
        />
        <Card 
          icon="fas fa-puzzle-piece"
          titleText="Beats"
          descriptionText="Acquire beats' licenses or request your custom exclusive beats."
        />
        <Card 
          icon="fas fa-mortar-pestle"
          titleText="Beats"
          descriptionText="Acquire beats' licenses or request your custom exclusive beats."
        />
        <Card 
          icon="fas fa-tshirt"
          titleText="Beats"
          descriptionText="Acquire beats' licenses or request your custom exclusive beats."
        />
      </ListWithHeader>
    </Container>
  );

};

export default Services;