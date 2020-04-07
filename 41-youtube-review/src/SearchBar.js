import React from "react";

const SearchBar = (props) => {
    return(<div>
        {/* <form onSubmit={(e) => props.changeSearchTerm(e)}> */}
            <input type="text" placeholder="searchTerm" 
            onChange={(e) => props.videoSearch(e.target.value)} />
            {/* <input type="submit" value="search"/> */}
        {/* </form> */}
    </div>)
}

export default SearchBar