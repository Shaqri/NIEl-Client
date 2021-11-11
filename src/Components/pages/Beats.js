import ContainerWithNavbar from '../templates/ContainerWithNavbar';
import {connect} from 'react-redux';
import { getBeats, getGenres } from '../../actions/index';
import Filters from '../organisms/Filters';
import BeatsList from '../organisms/BeatsList';
import Beat from '../organisms/Beat';
import NewBeat from '../organisms/NewBeat';
import { Routes, Route } from "react-router-dom";

function Beats (props) {
  const {currentBeats, getBeats,
    allGenres, getGenres} = props; 
  return(
    <ContainerWithNavbar styleClass="space-nav-top page-container border">
      <Filters allGenres={allGenres} getGenres={getGenres} getBeats={getBeats}/>
      
      <Routes>
        <Route path="new" element={<NewBeat />} />
        <Route path=":id" element={<Beat />} />
        <Route index element={<BeatsList beats={currentBeats} />} />
      </Routes>
      
      
    </ContainerWithNavbar>
  )
};

const mapStateToProps = (state) => ({
  currentBeats: state.beat.currentList,
  currentGenre: state.genre.genreFilter,
  allGenres: state.genre.all
});

const mapDispatchToProps = (dispatch) => ({
  getBeats: (genre) => {dispatch(getBeats(genre))},
  getGenres: () => {dispatch(getGenres())},
});


export default connect(mapStateToProps, mapDispatchToProps)(Beats);