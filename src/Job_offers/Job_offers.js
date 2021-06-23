import React, { useState } from 'react';
import SignUp from '../Form/SignUp';
import StickyPopUp from './StickyPopUp';


function Offers ( { job_button_text, jobInfo }) {

 
    let announcements = jobInfo.map ((info) => {
      return (
      <div claasName = "announcement_wrapper" key = {info.id}>
          <div className = "position">
             <div className = "company_logo" style={{backgroundImage: `url(${info.img})`}}></div>
             <p className = "title" onClick = {() => {setIndex(info.id)} }> {info.title} </p>
          </div>
             <p className = "info">Company: <span>{info.company}</span> </p>
             <p className ="info">Location: <span>{info.location}</span></p>
         </div>
      )
    });
    let [index, setIndex] = useState(0);
    
    let [register, setRegister] = useState(false); 

        return (
          <div className = "announcements">
            <div className = "announcements_container">
                {announcements}   
            </div>  
            <div className = "openAnnouncement">
              <button className = "apply" onClick = {() => {setRegister(true)}}>{job_button_text}</button>
              {register && <SignUp onClose= {() => {setRegister(false)}}/>}
              <div className = "details">
                <div className = "position">
                  <div className = "company_logo_big" style={{
                      backgroundImage: `url(${jobInfo[index].img})`}}></div>
                  <p className = "title"> {jobInfo[index].title} </p>
                </div>
                <p className = "info">Company: <span>{jobInfo[index].company}</span> </p>
                <p className ="info">Location: <span>{jobInfo[index].location}</span></p>
                <p className ="info">Details: <span>{jobInfo[index].info}</span></p>
              </div>
              <StickyPopUp/>
            </div>
          </div>
         
        )
}

export default Offers