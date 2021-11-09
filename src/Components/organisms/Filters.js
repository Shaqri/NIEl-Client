import Dropdown from '../molecules/Dropdown';
import {useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import useQuery from '../../customHooks/useQuery';
import Button from '../atoms/Button';

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
    <div className="filters">
      <Dropdown label="Filters" styleClass="filter-dropdown"> 
        <Dropdown styleClass="attribute-filter genre-dropdown" label="Genres" >
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
        <Dropdown styleClass="attribute-filter date-dropdown" label="Sort By">
          <Button styleClass="date-button" text="Oldest"/>
          <Button styleClass="date-button" text="Newest"/>
        </Dropdown>

      </Dropdown>
      <Dropdown styleClass="search-dropdown" icon="fas fa-search">
        <div className="search-field">
          <input type="text" className="search-input" placeholder="Search..." />
          <Button icon="fas fa-search" styleClass="search-button" />
        </div>
      </Dropdown>
    </div>
  )
};

export default Filters;