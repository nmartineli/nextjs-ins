import { useState, useEffect } from 'react';
import axios from 'axios';

export default function getPhotos() {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    axios
      .get('/database/server.json')
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return photos;
}
