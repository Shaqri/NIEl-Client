import Container from '../templates/Container';
import {connect} from 'react-redux';
import { getBeats, getGenres } from '../../actions/index';
import ListWithHeader from '../molecules/ListWithHeader';
import Card from '../molecules/Card';
import Button from '../atoms/Button';
import HorizontalList from '../molecules/HorizontalList';
import Filters from '../organisms/Filters';

function Beats (props) {
  const {currentBeats, getBeats,
    allGenres, getGenres} = props;
  

  const mapBeatGenresList = (list) => {
    return list.map(genre => <span>{genre.name}</span> )
  }
 

  return(
    <Container styleClass="space-nav-top page-container border">
    
      <Filters allGenres={allGenres} getGenres={getGenres} getBeats={getBeats}/>
      
      <ListWithHeader 
      styleClass="beats-list">
      {currentBeats &&
  currentBeats.map((beat) => {
    const {attributes: {name, bpm, imageFile}} = beat;
    const {relationships: {genres: {meta}}} = beat;

    return (
      <Card
        wrapperLink={`${beat.id}`}
        styleClass="beat-card"
        image={process.env.REACT_APP_BASE_URL + imageFile.url}
        titleText={name}
        preDescription={
          <div className="bpm-date">
            <div className="bpm">
              <span>BPM:</span>
              <span>{bpm}</span>
            </div>
            <div className="date">
              <span>12 Jul 2021</span>
            </div>
          </div>
        }
        description={
          <Button
          styleClass="add-to-cart-button"
          icon="fas fa-shopping-cart" 
          text="Add To Cart"/>
        }
        footer={
          <HorizontalList styleClass="genres-list" list={mapBeatGenresList(meta)}/>
        }
      />
    )
  })
}
      </ListWithHeader>


    </Container>


   
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