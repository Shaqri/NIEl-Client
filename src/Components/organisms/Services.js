import Card from '../atoms/Card';
import ListWithHeader from '../molecules/ListWithHeader';
import Container from '../templates/Container';


function Services() {
  return(
    <Container styleClass="services">
      <ListWithHeader styleClass="service-list" header="Our Services" headerClass="section-header">
        <Card 
          icon="fas fa-headphones"
          title="Beats"
          description="Acquire beats' licenses or request your custom exclusive beats."
        />
        <Card 
          icon="fas fa-puzzle-piece"
          title="Beats"
          description="Acquire beats' licenses or request your custom exclusive beats."
        />
        <Card 
          icon="fas fa-mortar-pestle"
          title="Beats"
          description="Acquire beats' licenses or request your custom exclusive beats."
        />
        <Card 
          icon="fas fa-tshirt"
          title="Beats"
          description="Acquire beats' licenses or request your custom exclusive beats."
        />
      </ListWithHeader>
    </Container>
  );

};

export default Services;