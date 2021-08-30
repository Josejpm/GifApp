import React from 'react';
import {Link} from 'react-router-dom';
import './trendItem.css'

const TrendItem = ({trendItem}) => {
    return ( 
        <Link className="trend-item" to={`/search/${trendItem}`} >
            {trendItem}
        </Link>
    );
}
 
export default TrendItem;