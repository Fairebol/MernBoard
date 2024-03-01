import axios from 'axios';
const api = 'http://localhost:8080/api'


export default async function dbFetch() {
    
    const response = await axios.get(`${api}/`, )
    .then(value => {
        console.log(value.data)
    })
}
