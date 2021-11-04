import HorizontalNavbar from '../molecules/HorizontalBar';
import {NavLink, useParams} from 'react-router-dom';
import Container from '../templates/Container';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import { getBeats, getGenres } from '../../actions/index';
import ListWithHeader from '../molecules/ListWithHeader';
import Card from '../molecules/Card';
import Button from '../atoms/Button';
import HorizontalList from '../molecules/HorizontalList';

function BeatsList (props) {
  const {currentBeats, getBeats, currentGenre,
    allGenres, getGenres} = props;
  
  const {genreSlug} = useParams();

  useEffect(() => {
    getGenres()

  }, [])

  useEffect(() => {
    getBeats(genreSlug)
  }, [genreSlug])

  const mapBeatGenresList = (list) => {
    return list.map(genre => <span>{genre.name}</span> )
  }

  return(
    <Container styleClass="space-nav-top page-container border">
    
      <HorizontalNavbar styleClass="nav-genre">
        <NavLink end to="/beats">All</NavLink>
        { allGenres &&
          allGenres.map((genre) => {
            const {attributes: {name, slug}} = genre;
            return <NavLink to={`/beats/${slug}`}>{name}</NavLink>
          })
        }
      
      </HorizontalNavbar>

      <ListWithHeader>
        {currentBeats &&
          currentBeats.map((beat) => {
            const {attributes: {name, bpm, imageFile}} = beat;
            const {relationships: {genres: {meta}}} = beat;

            return (
              <Card
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


export default connect(mapStateToProps, mapDispatchToProps)(BeatsList);