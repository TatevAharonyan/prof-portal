import React from 'react'
import "../Style/JobOffers.css"
import Search from "./../Search/Search"
import Offers from './Job_offers'

function JobOffers( { job_button_text, jobInfo }){
    return (
        <div className = "jobOffers_wrapper">
            <Search />
            <Offers jobInfo = {jobInfo} job_button_text = {job_button_text} /> 
        </div>
    )
}

 
export default JobOffers