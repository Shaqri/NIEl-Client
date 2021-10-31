

import {Routes, Route} from 'react-router-dom';
import BeatsList from '../organisms/BeatsList';

function Beats(props) {
  return(
    <Routes>
      <Route path="/" element={<BeatsList />} />
      <Route path="/:genreName" element={<BeatsList />}/>
    </Routes>
  );
};




export default Beats;