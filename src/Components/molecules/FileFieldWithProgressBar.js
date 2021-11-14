import {useState} from 'react';
import FormField from './FormField.js';
import styled from 'styled-components';


const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  height: 10px;
  background-color: ${props => props.barColor};
`

function FileFieldWithProgressBar(props) {
  const {styleClass, preview, input, filename, labelId, labelText} = props;

  const [progress, setProgress] = useState(0);
  const [barColor, setBarColor] = useState("#61358c");
  
  const formatFilename = (name) => {
    return name.length > 6 ? `${name.slice(0, 6)}...` : name
  };

  return(
      <FormField
        styleClass={`file-field ${styleClass}`}
        preview={
          preview
        }
        input={
          input(setProgress)
        }
        labelId={labelId}
        labelText={labelText}
      >
      {(progress !== 0) &&
          <ProgressBar barColor={barColor} progress={progress} />
      }
      <span className="filename">{formatFilename(filename)}</span>
      </FormField>

  );

};

export default FileFieldWithProgressBar;