import React,{Fragment} from 'react';

//Components
import UseGifs from '../hooks/useGifs';
import Spinner from '../components/spinner/Spinner';
import GifList from '../components/gifList';
import TrendingSidebar from '../components/trendingSidebar/trendingSidebar';

const Home = () => {

    const {gifData} = UseGifs();

    return ( 
        <Fragment>
            <div className="home-container">
                <div className="home-gifs">
                    {gifData.length===0 
                        ? <Spinner/>
                        : <GifList gifsData={gifData} />
                    }
                </div>
                <TrendingSidebar/>
            </div>
        </Fragment>
     );
}
 
export default Home;