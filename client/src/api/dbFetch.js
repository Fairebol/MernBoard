import axios from 'axios';
const api = 'https://mernboard-production.up.railway.app/api'
// const api = "http://localhost:8080/api" # ONLY DEV 


export default async function dbFetch(rows) {
    try {
        let response
        if (rows) 
        {
            response = await axios.get(`${api}/` + rows);
        }
        else
        {
            response = await axios.get(`${api}/`);
        }
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
