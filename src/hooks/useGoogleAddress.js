import { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
