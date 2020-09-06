import { useState, useEffect } from 'react';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const API_URI = 'https://api.themoviedb.org/3';

export const useThemoviedb = (method = 'GET', endpoint, data = {}) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const makeRequest = () => {
      let requestOptions = { method };
      if (
        method.toUpperCase() === 'POST' ||
        method.toUpperCase() === 'PUT' ||
        method.toUpperCase() === 'PATCH'
      ) {
        requestOptions.body = data;
      }
      console.log(`${API_URI}/${endpoint}`);
      fetch(`${API_URI}${endpoint}`, { ...requestOptions })
        .then((res) => res.json())
        .then((jsonData) => {
          setState((state) => ({ ...state, data: jsonData }));
        })
        .catch((e) => {
          setState((state) => ({ ...state, error: e.message }));
        })
        .finally(() => {
          setState((state) => ({ ...state, loading: false }));
        });
    };
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, method]);
  return state;
};