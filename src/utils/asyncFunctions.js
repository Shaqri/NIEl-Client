import axios from 'axios';
import { directUploadURL } from '../API';

const createPresignedURL = async (fileParams, authToken) => {  
  try {
    const response = await axios.post(directUploadURL, fileParams, {headers: { 'Authorization': `Bearer ${authToken}`}});
    return response;
  }catch(error) {
    console.log(error.response)
  }
};

const uploadToPresignedURL = async (data, file, setProgress) => {
  try {
    const response = await axios.put(data.direct_upload.url, file, {
      headers: data.direct_upload.headers,
      onUploadProgress: (progressEvent) => {
        setProgress(
          Math.floor((progressEvent.loaded / progressEvent.total) * 100),
        )
      }
    });

    console.log(response)
  }catch(error) {
    console.log(error)
  }
};


export {
  createPresignedURL,
  uploadToPresignedURL
}