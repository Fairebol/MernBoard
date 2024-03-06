import axios from 'axios';
const api = 'http://localhost:8080/api'


export default async function dbFetch(rows) {
    
    try {
        const response = await axios.get(`${api}/` + rows);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
