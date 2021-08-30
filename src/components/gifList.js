import React, { Fragment } from 'react';
import GifCard from './gifCard/gifCard';


const GifList = ({gifsData}) => {
    return ( 
        <Fragment>
            {gifsData.map(gif=>(
                <GifCard key={gif.id} images={gif.images} id={gif.id} />
        ))}
        </Fragment>
        
     );
}
 
export default GifList;