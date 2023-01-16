import { movieUrl, baseUrl } from '../constants';
import { headers, checkResponse } from './mainApi';

export const getMovies = () => {
  return fetch(movieUrl, {
    headers: headers,
  })
    .then(checkResponse)
};

export const saveMovie = (movie) => {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ ...movie }),
    credentials: 'include',
  })
    .then(checkResponse)
}

export const getSavedMovie = () => {
  return fetch(`${baseUrl}/movies`, {
    headers: headers,
    credentials: 'include',
  })
    .then(checkResponse)
};

export const deleteMovie = (id) => {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: headers,
    credentials: 'include',
  })
    .then(checkResponse)
};
