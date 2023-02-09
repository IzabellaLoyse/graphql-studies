/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000';

export const context = () => ({
  getUsers: (path = '/') => fetch(`${API_URL}/users${path}`),
  getPosts: (path = '/') => fetch(`${API_URL}/posts${path}`),
});
