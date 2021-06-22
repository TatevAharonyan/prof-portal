import React, { useState } from 'react';
import SignUp from '../Form/SignUp';
import StickyPopUp from './StickyPopUp';

function Offers () {

    let jobInfo = [
            { id: 0, 
              img: "https://job.am/upload/logo/21286157logo.png", 
              title: "UI/UX Designer",
              company: "Khachaturov Group",
              location: "Yerevan, Armenia",
              info: " UI/UX Designer Job Responsibilities. \n Leading the design of clients’ mobile apps and websites; \n Identifying clients’ niche, conducting user experience analysis, collaborating with the marketing team; \n Developing a deep understanding of user goals and behaviors; Creating wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas; \n Creating a tailored design based on pre-conducted analysis, which meets the user experience and user interests; \n \n UI/UX Designer Experience and Qualifications; \n 3+ years’ experience in UI/UX design; \n Experience in structuring and designing sales funnels/landing pages; \n Good analytical skills;\n \n Professionalism level: Senior; \n \n Salary: Commission-based without any upper limits; \n \n Working hours: Negotiable."
            },
            { id: 1, 
              img: "https://job.am/upload/logo/no-logo.svg", 
              title: "Logistic Manager/ Dispatcher",
              company: "VSS Trucking",
              location: "Yerevan, Armenia",
              info: "Description \n American cargo carrier company is looking for a reliable logistics/dispatcher. The successful candidate for this position needs to be able to adjust to last-minute changes and work with drivers to schedule emergency pick-up or delivery for new or established clients when necessary. \n \n Requirements \n Higher education \n Communicational skills \n    Fluency in English \n  Ability to work in a team \n Sense of responsibility \n \n  Responsibilities \n Organize and control the whole process of cargo transportation \n              Communicate via phones and emails with shippers  \n Negotiate and make mutually beneficial deals \n Constantly stay in touch with drivers \n \n Additional notes \n Our company is an American Logistic Company. \n  The salary is transactional (Average salary 600,000AMD). \n The office is located at Republic Square. \n  Working schedule: Monday through Friday 16:00-01:00."
            },
            { id: 2, 
                img: "https://job.am/upload/logo/t_22497796logo.png", 
                title: "Financial Assistant",
                company: "VENGE Engineering",
                location: "Yerevan, Armenia",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              { id: 3, 
                img: "https://job.am/upload/logo/t_22497796logo.png", 
                title: "Financial Controller / Accountant",
                company: "VENGE Engineering",
                location: "Yerevan, Armenia",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              { id: 4, 
                img: "https://job.am/upload/logo/t_2180449logo.png", 
                title: "Interior Designer",
                company: "Art Production",
                location: "Yerevan, Armenia",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              { id: 5, 
                img: "https://job.am/upload/logo/t_20495944logo.png", 
                title: "Reservation Agent",
                company: "Reservation Agent",
                location: "Yerevan, Armenia",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              { id: 6, 
                img: "https://job.am/upload/logo/t_21423348logo.png", 
                title: "Logistics coordinator (dispatcher)",
                company: "TriStar Transit INC",
                location: "Yerevan, Armenia",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
         ];
    
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
              <button className = "apply" onClick = {() => {setRegister(true)}}>Apply for this vacancy</button>
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