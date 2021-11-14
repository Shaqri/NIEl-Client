import Form from "../molecules/Form";
import FormField from "../molecules/FormField";
import Container from '../templates/Container';
import TitleHeader from '../atoms/TitleHeader';
import TextInput from '../atoms/TextInput';
import {useEffect, useRef, useState} from 'react';
import Image from "../atoms/Image";
import FileInput from "../atoms/FileInput";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Icon from '../atoms/Icon';
import FileFieldWithProgressBar from "../molecules/FileFieldWithProgressBar";
import fileChecksum from "../../utils/checksum";
import {createPresignedURL, uploadToPresignedURL} from '../../utils/asyncFunctions';
import WaveSurfer from "wavesurfer.js";

function NewBeat({allGenres, authToken}) {

  //refs
  const waveSurferContainer = useRef();


  //state
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [genres, setGenres] = useState([]);
  const [bpm, setBpm] = useState('');
  const [image, setImage] = useState(
    {preview: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmerriam-webster.com%2Fassets%2Fmw%2Fimages%2Farticle%2Fart-wap-landing-mp-lg%2Fegg-3442-4c317615ec1fd800728672f2c168aca5%401x.jpg&f=1&nofb=1'}
  ); 
  const [mp3, setMp3] = useState({
    name: 'Mp3',
    preview: '',
    blob_id: ''
  });
  const [wav, setWav] = useState({
    name: 'Wav',
    preview: '',
    blob_id: ''
  });
  const [zip, setZip] = useState({
    name: 'Zip',
    preview: '',
    blob_id: ''
  });

  useEffect(() => {
    const genresSelect = document.querySelector('#genres');
    if(genres.length) {
      if(genresSelect.classList.contains("input-error")) genresSelect.classList.remove('input-error');
    }
  }, [genres]);

  //methods
  const isValidInput = (inputValue, querySelector, errorClass) => {
    const inputElement = document.querySelector(querySelector);
    if(!inputValue.length) {
      inputElement.classList.add(errorClass);
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    setErrorMessage('');
    let areErrors = false;
    const inputFields = [
    {value: name, qs: '#name'}, 
    {value: genres, qs: '#genres'}, 
    {value: bpm, qs: '#bpm'},
    {value: mp3.blob_id, qs: '.mp3-file', errorClass: "file-error"},
    {value: wav.blob_id, qs: '.wav-file', errorClass: "file-error"},
    {value: zip.blob_id, qs: '.zip-file', errorClass: "file-error"}
    ];
    
    inputFields.forEach((input) => {
      const isValid = isValidInput(input.value, input.qs, input.errorClass || "input-error" );
      if(!isValid) areErrors = true;
    });
 
    if(areErrors) {
      setErrorMessage('There must be not empty fields')
      return
    }


    const beatParams = {
      track: {
        name: name,
        genres: genres,
        bpm: bpm,
        buyable: true,
        image_file: image.blob_id,
        mp3_file: mp3.blob_id,
        wav_file: wav.blob_id,
        zip_file: zip.blob_id
      }
    }

    const waveSurfer = WaveSurfer.create({
      container: waveSurferContainer.current,
      barHeight: 0.8,
      height: 70,
      waveColor: 'white',
      progressColor: '#61358c',
      barWidth: 2,
      hideScrollbar: true,
      responsive: true,
      pixelRatio: 1,
      partialRender: true,
    });
    console.log(mp3.preview);
    waveSurfer.load(mp3.preview);
    waveSurfer.on('ready', async () => {
      console.log('on ready function');
      const pcm = await waveSurfer.exportPCM(1024, 10000, true, 0)
      beatParams.track.pcm = JSON.stringify(pcm);
      console.log(beatParams);
    })
    
  };

  const handleFileUpload = async (file, setFile, setProgress = () => {}) => {
    const checksum = await fileChecksum(file);
    const fileParams = {
      file: {
        filename: file.name,
        byte_size: file.size,
        checksum,
        content_type: file.type
      }
    };
    const presigned = await createPresignedURL(fileParams, authToken);
    setFile({
      name: file.name,
      preview: URL.createObjectURL(file),
      blob_id: presigned.data.blob_signed_id
    });
   

    uploadToPresignedURL(presigned.data, file, setProgress);

    
  };

  const genreOptions = () => {
    return allGenres.map(genre => {
      const {attributes: {name}} = genre;
      return {value: genre.id, label: name}
    });
  };

  const handleFileChange = (e, setFile, setProgress) => {
    const parentElementClasslist = e.target.parentElement.parentElement.classList;
    console.log(parentElementClasslist)
    if(parentElementClasslist.contains('file-error')) parentElementClasslist.remove('file-error')
    handleFileUpload(e.target.files[0], setFile, setProgress);
  };

  const handleInputChange = (e, setInput) => {
    if(e.target.classList.contains('input-error')) e.target.classList.remove('input-error');
    setInput(e.target.value);
  }

  return(
    <Container styleClass="border new-beat-container form-container">
      <TitleHeader text="New beat" styleClass="section-header" />
      <Form styleClass="new-beat-form" buttonText="Create" handleSubmit={handleSubmit}>
        {errorMessage && 
          <div className="error-message">{errorMessage}</div>
        }
        <div className="flex">
          <FormField
            styleClass="file-field"
            preview={
              <Image
              containerClass="image-preview-container"
              styleClass="image-preview"
              path={image.preview}
              />
            }
            input={
              <FileInput 
                accept="image/*"
                id="image"
                handleChange={
                  (e) => handleFileUpload(e.target.files[0], setImage)
                }
              />  
            }
            labelId="image"
            labelText="Upload file"
          />
          <div className="top-fields">
            <FormField
              input={
              <TextInput
                id="name"
                placeholder="Beat name"
                handleChange={(e) => handleInputChange(e, setName)}
                value={name}
              />
              }
              styleClass="name-field"
            />
  
            <FormField 
              styleClass="genres-field"
              input={
                <Select
                  id="genres"
                  defaultValue={genres}
                  className="genres-select"
                  isMulti
                  components={makeAnimated()}
                  options={genreOptions()}
                  onChange={(e) => {
                    setGenres(e.map(genre => ({id: genre.value})))
                  }}
                />
              }
            />

            <FormField 
              styleClass="bpm-field"
              input={
                <input
                  id="bpm"
                  min="0"
                  className="input bpm-input"
                  type="number"
                  placeholder="bpm"
                  value={bpm}
                  onChange={(e) => handleInputChange(e, setBpm)}
                />
              }
            />
          </div>
        </div>

        <FileFieldWithProgressBar 
          styleClass="mp3-file"
          filename={mp3.name}
          preview = {
            <Icon 
            icon="far fa-file-audio"
            styleClass="icon"
            containerClass="icon-preview-container"
            />
          }
          input={
            (setProgress) => {
              return(
                <FileInput 
                  accept="audio/mp3"
                  id="mp3"
                  handleChange={(e) =>  handleFileChange(e, setMp3, setProgress)}
                />
              )
            }
          }
          labelId="mp3"
          labelText="Upload Mp3"
        />

        <FileFieldWithProgressBar 
          styleClass="wav-file"
          filename={wav.name}
          preview = {
            <Icon 
            icon="fas fa-file-audio"
            styleClass="icon"
            containerClass="icon-preview-container"
            />
          }
          input={
            (setProgress) => {
              return(
              <FileInput 
                accept=".wav"
                id="wav"
                handleChange={(e) => handleFileChange(e, setWav, setProgress)}
              />
              )
            }
          }
          labelId="wav"
          labelText="Upload Wav"
        />

        <FileFieldWithProgressBar
          styleClass="zip-file"
          filename={zip.name}
          preview={
            <Icon 
            icon="far fa-file-archive"
            styleClass="icon"
            containerClass="icon-preview-container"
            />
          }
          input={
            (setProgress) => {
              return(
              <FileInput 
                accept=".zip,.rar,.7zip"
                id="zip"
                handleChange={(e) => handleFileChange(e, setZip, setProgress)}
              />
              )
            }
          }
          labelId="zip"
          labelText="Upload Steams"
        />
          
      </Form>

      <div ref={waveSurferContainer} />
    </Container>
  )
};

export default NewBeat;