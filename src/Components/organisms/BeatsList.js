import HorizontalNavbar from '../molecules/HorizontalBar';
import {NavLink, useParams} from 'react-router-dom';
import Container from '../templates/Container';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import { getBeats, getGenres } from '../../actions/index';
import ListWithHeader from '../molecules/ListWithHeader';
import Card from '../atoms/Card';

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

  return(
    <Container styleClass="space-nav-top page-container border">
    
      <HorizontalNavbar styleClass="navbar nav-genre">
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
            const {attributes: {name}} = beat;
            return (
              <Card 
                title={name}
                description="description"
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