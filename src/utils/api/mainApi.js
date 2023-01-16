import { baseUrl } from "../constants";

export const headers = {
  "Content-Type": 'application/json',
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json());
};

export const register = (email, name, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, name, password }),
    credentials: 'include',
  })
    .then(checkResponse)
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  })
    .then(checkResponse)
};

export const checkToken = () => {
  return fetch(`${baseUrl}/users/me`, {
    headers: headers,
    credentials: 'include',
  })
    .then(checkResponse)
};

export const signOut = () => {
  return fetch(`${baseUrl}/signout`, {
    headers: headers,
    credentials: 'include',
  })
    .then(checkResponse)
};

export const editProfile = (email, name) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ email, name }),
    credentials: 'include',
  })
    .then(checkResponse)
};
