import React,{Fragment, useEffect,useState} from 'react';
import getTrends from '../../services/getTrends';
import TrendItem from '../trendItem/trendItem';


const TrendingSidebar = () => {

    const [trends,setTrends] = useState([]);

    useEffect(()=>{
       getTrends().then(trends=>{
           setTrends(trends)
       })
    },[]);

    return ( 
        <Fragment>
            <aside className="home-sidebar" >
                <h2>Trending Terms</h2>
                {trends.map(trendItem=>(
                    <TrendItem key={trendItem} trendItem={trendItem} /> 
                ))}
            </aside>
            
        </Fragment>
     );
}
 
export default TrendingSidebar;