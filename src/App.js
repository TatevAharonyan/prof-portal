import Header from './Main/Header/Index';
import './Style/Header.css';
import './Style/App.css';
import './Style/Section1.css';
import './Style/Section234.css';
import "./Style/JobOffers.css";
import { connect } from 'react-redux';
import Footer from './Main/Footer';
import Section1 from './Main/Section1/Index';
import Section2 from './Main/Section2/Index';
import Section3 from './Main/Section3/Index';
import Section4 from './Main/Section4/Index';
import { Fragment, useState } from 'react';
import JobOffers from "./Job_offers/index";
import {jobInfo_const, job_button_text_const} from "./constaat/constantJobOffers"

function App(props) {

  const { announcementName } = props;
  console.log(props.announcementName);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoggedIn = () => {
    setIsLoggedIn(true);
  }
let jobInfo = jobInfo_const;
let job_button_text = job_button_text_const;


  return (
    <div className="App">
       { !isLoggedIn ?
      <Fragment >
        <Header  LoggedIn = { LoggedIn } />
        {announcementName === "Job offers" && <JobOffers jobInfo = {jobInfo } job_button_text = {job_button_text} />}
        {announcementName === "Job seekers" && <div style={{ background: 'yello' }}>"Job offers"</div>}
        {announcementName === "Available trainings" && <div style={{ background: 'green' }}>"Available trainings"</div>}
        {!announcementName && <div id="main_wrapper">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>}
      </Fragment>
      :  <div> user page</div>}
      <Footer />
    </div>
  );
}



export default connect(({ job }) => ({ announcementName: job.announcementName }))(App);

