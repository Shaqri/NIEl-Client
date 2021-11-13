import Form from "../molecules/Form";
import FormField from "../molecules/FormField";
import Container from '../templates/Container';
import TitleHeader from '../atoms/TitleHeader';
import TextInput from '../atoms/TextInput';
import {useEffect, useState} from 'react';
import Image from "../atoms/Image";
import FileInput from "../atoms/FileInput";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Icon from '../atoms/Icon';
import FileFieldWithProgressBar from "../molecules/FileFieldWithProgressBar";

function NewBeat({allGenres, createPresignedURL}) {
  const [image, setImage] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmerriam-webster.com%2Fassets%2Fmw%2Fimages%2Farticle%2Fart-wap-landing-mp-lg%2Fegg-3442-4c317615ec1fd800728672f2c168aca5%401x.jpg&f=1&nofb=1'); 
  const [mp3, setMp3] = useState("Mp3");
  const [wav, setWav] = useState("Wav");
  const [zip, setZip] = useState("Zip");

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    console.log(e.target.files)
  };

  const genreOptions = () => {
    return allGenres.map(genre => {
      const {attributes: {name}} = genre;
      return {value: genre.id, label: name}
    });
  };

  useEffect(() => {
    console.log(image)
    console.log(allGenres)
  }, [image]);

  return(
    <Container styleClass="border new-beat-container form-container">
      <TitleHeader text="New beat" />
      <Form styleClass="new-beat-form" buttonText="Create">
        <div className="flex">
          <FormField
            styleClass="file-field"
            preview={
              <Image
              containerClass="image-preview-container"
              styleClass="image-preview"
              path={image}
              />
            }
            input={
              <FileInput 
                accept="image/*"
                id="image"
                handleChange={handleImage}
              />
            }
            labelId="image"
            labelText="Upload file"
          />
          <div className="top-fields">
            <FormField
              input={
              <TextInput placeholder="Beat name"/>
              }
              styleClass="name-field"
            />
  
            <FormField 
              styleClass="genres-field"
              input={
                <Select
                  className="genres-select"
                  isMulti
                  components={makeAnimated()}
                  options={genreOptions()}
                />
              }
            />

            <FormField 
              styleClass="bpm-field"
              input={
                <input
                  min="0"
                  className="input bpm-input"
                  type="number"
                  placeholder="bpm"
                />
              }
            />
          </div>
        </div>

        <FileFieldWithProgressBar 
          styleClass="mp3-field"
          preview = {
            <Icon 
            icon="far fa-file-audio"
            styleClass="icon"
            containerClass="icon-preview-container"
            />
          }
          input={
            <FileInput 
              accept="audio/mp3"
              id="mp3"
              handleChange={
                (e) => {
                  setMp3(e.target.files[0])
                }
              }
            />
          }
          labelId="mp3"
          labelText="Upload Mp3"
        />

        <FormField
          styleClass="file-field wav-file"
          preview={
            <Icon 
            icon="fas fa-file-audio"
            styleClass="icon"
            containerClass="icon-preview-container"
            />
          }
          input={
            <FileInput 
              accept="audio/wav"
              id="wav"
              handleChange={()=> {}}
            />
          }
          labelId="wav"
          labelText="Upload Wav"
        />

        <FormField
          styleClass="file-field zip-file"
          preview={
            <Icon 
            icon="far fa-file-archive"
            styleClass="icon"
            containerClass="icon-preview-container"
            />
          }
          input={
            <FileInput 
              accept=".zip,.rar,.7zip"
              id="zip"
              handleChange={() => {}}
            />
          }
          labelId="zip"
          labelText="Upload Steams"
        />
          
      </Form>
    </Container>
  )
};

export default NewBeat;