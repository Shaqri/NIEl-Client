import {useState} from 'react';
import FormField from './FormField.js';
import styled from 'styled-components';


const ProgressBar = styled.div`
  width: ${props => props.progress};
  height: 10px;
  background-color: ${props => props.barColor};
`

function FileFieldWithProgressBar(props) {
  const {styleClass, preview, input, labelId, labelText} = props;

  const [progress, setProgress] = useState("50%");
  const [barColor, setBarColor] = useState("#61358c");


  return(
      <FormField
        styleClass={`file-field ${styleClass}`}
        preview={
          preview
        }
        input={
          input
        }
        labelId="mp3"
        labelText="Upload Mp3"
      >
      {(progress !== "0") &&
          <ProgressBar barColor={barColor} progress={progress} />
      }
      </FormField>

  );

};

export default FileFieldWithProgressBar;