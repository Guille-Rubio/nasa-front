import axios from 'axios';

const getApod = async ()=>{
    const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    const response = await request.data
    return response
}

export default getApod;
