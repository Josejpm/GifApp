import {useEffect,useContext} from 'react';
import getGifs from '../services/getGifs';
import GifContext from '../context/gifContext';

export default function useGifs ({keyword}={keyword:null}) {
    
    const {gifs,setGifs} = useContext(GifContext);
   
    useEffect(() => {

        const searchKeyword = keyword || localStorage.getItem('lastKeyword') || 'funny'

        getGifs(searchKeyword).then(data=>setGifs(data));

        localStorage.setItem('lastKeyword',searchKeyword);

    }, [])
    
    return {gifData:gifs};
}