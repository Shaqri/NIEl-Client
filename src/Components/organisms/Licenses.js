import Container from '../templates/Container';
import ListWithHeader from '../molecules/ListWithHeader';
import Card from '../molecules/Card';
import DescriptionWithTitle from '../molecules/DescriptionWithTitle';
import Footer from '../atoms/Footer';
import {connect} from 'react-redux';
import {getLicenses} from '../../actions/index';
import {useEffect} from 'react';
import Description from '../atoms/Description';

function Licenses(props) {
  const {getLicenses, allLicenses} = props;

  useEffect(() => {
    getLicenses()
  }, [])

  const splitTextByComma = (text) => {
    const textSplit = text.split(',');
    return textSplit.map(text => <span>{text}</span>);
  };

  return(
    <Container styleClass="licenses">
      <ListWithHeader 
       header="Licenses"
       headerClass="section-header"
       styleClass="license-list">
        {allLicenses &&
          
          allLicenses.map((license) => {
            const {attributes: {name, files, description, price_cents}} = license;
            return(
            <Card
              titleText={name}
              preDescription={
              <DescriptionWithTitle 
                styleClass="pre-description"
                title="You Get"
                description={splitTextByComma(files)}
              />
              }
              description={
                <Description text={splitTextByComma(description)}/>
              }
              footer={
                <Footer text={`$${price_cents}USD`}/>
              }
            />)
          })
        }
      </ListWithHeader>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  allLicenses: state.license.all
});

const mapDispatchToProps = (dispatch) => ({
  getLicenses: () => {dispatch(getLicenses())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Licenses);