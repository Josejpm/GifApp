import React,{useState} from 'react'
import GifContext from './gifContext';

const GifProvider = ({children}) => {   
    
    const [gifs,setGifs] = useState([]);
    const [searchKeyword,setSearchKeyword] = useState('');

    return ( 
        <GifContext.Provider value={{
            gifs,
            searchKeyword,
            setGifs,
            setSearchKeyword
        }} >
            {children}
        </GifContext.Provider>
     );
}
 
export default GifProvider;