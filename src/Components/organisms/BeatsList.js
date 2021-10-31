import HorizontalNavbar from '../molecules/HorizontalBar';
import {NavLink, useParams} from 'react-router-dom';
import Container from '../templates/Container';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import { getBeats, getGenres } from '../../actions/index';

function BeatsList (props) {
  const {currentBeats, getBeats, currentGenre,
    allGenres, getGenres} = props;
  
  const {genreName} = useParams();

  useEffect(() => {
    getGenres()

  }, [])

  useEffect(() => {
    getBeats(genreName)
  }, [genreName])

  return(
    <Container styleClass="space-nav-top page-container border">
    
      <HorizontalNavbar styleClass="navbar nav-genre">
        <NavLink end to="/beats">All</NavLink>
        { allGenres &&
          allGenres.map((genre) => {
            const {attributes: {name}} = genre;
            return <NavLink to={`/beats/${name}`}>{name}</NavLink>
          })
        }
      
      </HorizontalNavbar>


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