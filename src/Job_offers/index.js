import React from 'react'
import "../Style/JobOffers.css"
import Search from "./../Search/Search"
import Offers from './Job_offers'

function JobOffers(){
    return (
        <div className = "jobOffers_wrapper">
            <Search />
            <Offers /> 
        </div>
    )
}

 
export default JobOffers