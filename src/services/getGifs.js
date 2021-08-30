
import {API_KEY,BASE_URL} from './settings';

const getGifs = async (keyword)=>{

    const url = `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    
    return data;

}
export default getGifs