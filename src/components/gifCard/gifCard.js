import React from 'react';
import './gifCard.css'
import {Link} from 'react-router-dom';

const GifCard = ({images,id}) => {

    return ( 
        <Link to={`/gif/${id}`} >
            <img className="gif-card" src={images.downsized_medium.url}/>
        </Link>
     );
}
 
export default GifCard;