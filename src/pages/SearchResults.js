import React,{Fragment, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import getGifs from '../services/getGifs';

//Components
import GifList from '../components/gifList';
import Spinner from '../components/spinner/Spinner';

const SearchResults = () => {
    const {keyword} = useParams();
    const [gifsData,setGifsData] = useState([]);

    useEffect(() => {
       getGifs(keyword).then(data=>setGifsData(data));
       localStorage.setItem('lastKeyword',keyword);
    }, [keyword])

    return ( 
        <Fragment>
            {gifsData.length===0 
                ? <Spinner/>
                : <GifList gifsData={gifsData} />
            }
        </Fragment>
    
    );
}
 
export default SearchResults;