import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = '9b8utgjydzp6';
const API_TOKEN = 'dea0eef068c5f0fbfdfcd4ff955a3850e10603aba539250d2b1b332dac8f6d66';

export function getPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=post`);
  console.log('action dispatched');
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
