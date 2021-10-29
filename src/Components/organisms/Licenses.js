import Container from '../templates/Container';
import ListWithHeader from '../molecules/ListWithHeader';
import Card from '../atoms/Card';

function Licenses() {
  return(
    <Container styleClass="licenses">
      <ListWithHeader 
       header="Licenses"
       headerClass="section-header"
       styleClass="license-list">
        <Card
          title="Standard"
          preDescriptionTitle="You Get"
          preDescription=".Mp3-file"
          description="-Cannot be registered | -Cannot be monetized"
          footer="$29USD"
        />
        <Card
          title="Premium"
          preDescriptionTitle="You Get"
          preDescription=".Mp3-file | .Wav-file"
          description="-Cannot be registered | -Cannot be monetized"
          footer="$49USD"
        />
        <Card
          title="Unlimited"
          preDescriptionTitle="You Get"
          preDescription=".Mp3-file | .Wav-file | Stems" 
          description="-Acquire beat's rights | -Can be registered | -Can be monetized"
          footer="$99USD"
        />
        <Card
          title="Custom"
          preDescriptionTitle="You Get"
          preDescription="Custom beat | .Mp3-file | .Wav-file | Stems"
          description="-Acquire beat's rights | -Can be registered | -Can be monetized"
          footer="$199USD"
        />
      </ListWithHeader>
    </Container>
  );
};

export default Licenses;