import React,{Fragment, useContext,useEffect,useState} from 'react';
import Spinner from '../components/spinner/Spinner';
import GifContext from '../context/gifContext';


const GifDetails = ({match}) => {
    const [gif,setGif]=useState({})
    const {params} = match;
    const {gifs} = useContext(GifContext);
    
    useEffect(() => {
        const gif = gifs.find(gif=>gif.id === params.id);
        setGif(gif);
    }, [])

    return ( 
        <Fragment>
            {Object.keys(gif).length !== 0 
                ? <div>
                    <h2>{gif.title}</h2>
                    <img src={gif.images.downsized_large.url} alt=""/>
                  </div>
                : <Spinner/>
            }
            
        </Fragment>
      
    )

}
export default GifDetails;

//<img src={gif.images.downsized_medium.url} alt=""/>
