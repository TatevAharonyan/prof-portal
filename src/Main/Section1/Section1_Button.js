import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setAnnouncementName } from "../../action/jobActions";

class Section1Button extends Component {
    handleClick(name) {
        this.props.setAnnouncementName(name);
    }

render () {
    const { name } = this.props;
    return (
        <div className = "section1_button" onClick={() => this.handleClick(name)}>
            <span>{name}</span>
        </div>
    )
}
}

const mapStateToProps = ({ job }) => {
    console.log(job, "stateee")
    return {
        announcementName: job.announcementName,
    }
}
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setAnnouncementName,
    },
      dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Section1Button);
