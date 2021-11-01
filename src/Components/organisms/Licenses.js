import Container from '../templates/Container';
import ListWithHeader from '../molecules/ListWithHeader';
import Card from '../molecules/Card';
import DescriptionWithTitle from '../molecules/DescriptionWithTitle';
import Footer from '../atoms/Footer';
import {connect} from 'react-redux';

function Licenses() {
  return(
    <Container styleClass="licenses">
      <ListWithHeader 
       header="Licenses"
       headerClass="section-header"
       styleClass="license-list">
        <Card
          titleText="Standard"
          preDescription={
            <DescriptionWithTitle 
              title="You Get"
              description="Mp3-file"
            />
          }
          descriptionText="-Cannot be registered | -Cannot be monetized"
          footer={
            <Footer text="$29USD"/>
          }
        />
        <Card
          titleText="Premium"
          preDescription={
            <DescriptionWithTitle 
              title="You Get"
              description=".Mp3-file | .Wav-file"
            />
          }
          descriptionText="-Cannot be registered | -Cannot be monetized"
          footer={
            <Footer text="$49USD"/>
          }
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

const mapStateToProps = (state) => ({
  allLicenses: state.license.all
})

export default connect()(Licenses);