import React, { Fragment, useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import logo from '../../assets/appLogo.png';
import './searchBar.css';

const SearchBar = () => {
    const history = useHistory();
    const [keyword,setKeyword] = useState('')

    const handleChange = e=>{
        setKeyword(e.target.value)
    }

    const handleSubmit = e=>{
        e.preventDefault();

        if(keyword.length===0){
            return
        }

        history.push(`/search/${keyword}`);
        setKeyword('');
    }

    return (
        <Fragment>
            <div className="search-container">
                <Link to="/">
                    <img className="app-logo" src={logo} alt="App logo"/>
                </Link>

                <form
                    onSubmit={e=>handleSubmit(e)}
                >
                    <input 
                        className="search-input"
                        type="text" 
                        name="search" 
                        placeholder="Search a gif..."
                        value={keyword}
                        onChange={handleChange}
                    />

                    <input className="search-button" type="submit" value="Search"/>
                </form>
            </div>
        </Fragment> 
     );
}
 
export default SearchBar;