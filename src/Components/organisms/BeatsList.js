import ListWithHeader from "../molecules/ListWithHeader";
import Card from '../molecules/Card';
import Button from '../atoms/Button';
import HorizontalList from "../molecules/HorizontalList";

function BeatsList({beats}) {
  const mapBeatGenresList = (list) => {
    return list.map(genre => <span>{genre.name}</span> )
  }
  return(
    <ListWithHeader 
    styleClass="beats-list">
    {beats &&
    beats.map((beat) => {
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
  )
};

export default BeatsList;