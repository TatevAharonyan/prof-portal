import React from 'react'
import "../Style/Search.css"

function Search(){
    return (
        <form className = "searchField">
            <input type = "search" placeholder = "Search..." className = "searchArea"></input>
            <button type="submit" className = "searchButton"></button>
        </form>
    )
}

export default Search