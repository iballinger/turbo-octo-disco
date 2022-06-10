// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/anime';

export function newAnime(animeData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', animeData);
}

export function delAnime(animeId) {
  return sendRequest(`${BASE_URL}/delete`, 'PUT', animeId);
}

export function searchAnime(search) {
  return sendRequest(`${BASE_URL}/search`, 'POST', {search});
}

export function animeDetail(animeId) {
  return sendRequest(`${BASE_URL}/animeId/details`, 'POST', animeId);
}

export function topAnime() {
  return sendRequest(`${BASE_URL}/top`);
}

export function seasonalAnime() {
  return sendRequest(`${BASE_URL}/seasonal`);
}