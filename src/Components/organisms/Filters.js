import Dropdown from '../molecules/Dropdown';
import {useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import useQuery from '../../customHooks/useQuery';

function Filters ({allGenres, getGenres, getBeats}) {

  const navigate = useNavigate();
  const [currentGenresFilter, setCurrentGenresFilter] = useState([]);
  const query = useQuery();

  useEffect(() => {
    getGenres()
    getAndSetGenresFilter();
  }, [])

  useEffect(() => {
    if (currentGenresFilter.length){
      getBeats(currentGenresFilter.join(';'))
      navigate(`/beats?genres=${currentGenresFilter.join(";")}`)
    }else {
      getBeats(null)
      navigate('/beats')
    }
    
  }, [currentGenresFilter])

  const handleGenreFilter = (e) => {

    if(e.target.checked) {
      setCurrentGenresFilter(state => [...state, e.target.name])
    }else if(!e.target.checked) {
      const elementIndex = currentGenresFilter.indexOf(e.target.name)
      setCurrentGenresFilter(state => {
        const currentGenres = [...state];
        currentGenres.splice(elementIndex, 1);
        return currentGenres
      })
      
    }
  };

  const getAndSetGenresFilter = () => {
    const genresQuery = query.get("genres");
    if (genresQuery) setCurrentGenresFilter(genresQuery.split(';'));
    else setCurrentGenresFilter([]);
  };


  return(
    <Dropdown label="Filters" styleClass="filter-dropdown"> 
        <Dropdown styleClass="genre-dropdown" label="Genres" >
          { allGenres &&
            allGenres.map((genre) => {
              const {attributes: {name, slug}} = genre;
              return (

              <div>  
                {   
                  currentGenresFilter.includes(slug) ?
                    <input onClick={handleGenreFilter} type="checkbox" value={name} checked name={slug}/>
                    :
                    <input onClick={handleGenreFilter} type="checkbox" value={name} name={slug}/>
                }
                
                <label htmlFor={name}>{name}</label>
              </div>)
            })
          }
        
        </Dropdown>

    </Dropdown>
  )
};

export default Filters;