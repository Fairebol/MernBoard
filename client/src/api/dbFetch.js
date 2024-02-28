import axios from 'axios';

const api = 'http://localhost:8080/api'

export const databaseFetch = () => axios.get(`${api}/`);