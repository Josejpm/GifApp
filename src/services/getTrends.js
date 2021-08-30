import {API_KEY,BASE_URL} from './settings';

const getTrends = async () =>{
    
    const url  = `${BASE_URL}/trending/searches?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data.data

}

export default getTrends;