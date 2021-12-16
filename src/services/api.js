import { apiUrl, isEmpty } from '../util/config';
// import { useHistory } from 'react-router';

export default async function request(method, path, query = {}, body = {}) {
  
  let url = `${apiUrl}${path}`;
  if (!isEmpty(query)) {
    url = `${url}?${new URLSearchParams(query)}`;
  } 
  const requestProperties = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }
  if (body && !isEmpty(body)) {
    requestProperties.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, requestProperties);
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        window.location.href = window.location.origin + '/unauthorized';
      }
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}