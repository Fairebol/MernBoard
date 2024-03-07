import axios from 'axios';
const api = 'https://mernboard-production.up.railway.app/api'


export default async function dbFetch(rows) {
    
    try {
        const response = await axios.get(`${api}/` + rows);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
