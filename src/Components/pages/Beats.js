import Container from '../templates/Container';
import {connect} from 'react-redux';
import {getBeats} from '../../actions/index';
import HorizontalNavbar from '../molecules/HorizontalBar';
import RouteLink from '../atoms/RouteLink';
import {Routes, Route} from 'react-router-dom';
import BeatsList from '../organisms/BeatsList';
import {useEffect} from 'react';

function Beats({props}) {
  const {currentTracks, getBeats, currentGenre} = props;

  useEffect(() => {
    getBeats(currentGenre);
  }, [])

  return(
    <Container styleClass="space-nav-top page-container border">
      <HorizontalNavbar>
        <RouteLink route="/" text="All" activeClass="border"/>
      </HorizontalNavbar>

      

      <Routes>
        <Route path="/" element={ <BeatsList 
          list={currentTracks}
        /> }/>
      </Routes>

    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentBeats: state.beats.current,
  currentGenre: state.beats.genreFilter
});

const mapDispatchToProps = (dispatch) => ({
  getBeats: (genre) => {dispatch(getBeats(genre))}
});



export default connect(mapStateToProps, mapDispatchToProps)(Beats);