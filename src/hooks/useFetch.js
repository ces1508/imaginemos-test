import { useState, useEffect } from 'react';

const initialState = {
  data: null,
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
      fetch(`${API_URI}${endpoint}`, { ...requestOptions })
        .then((res) => res.json())
        .then((jsonData) => {
          // eslint-disable-next-line no-shadow
          setState((state) => ({ ...state, data: jsonData, loading: false }));
        })
        .catch((e) => {
          // eslint-disable-next-line no-shadow
          setState((state) => ({ ...state, error: e.message, loading: false }));
        });
    };
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, method]);
  return state;
};
