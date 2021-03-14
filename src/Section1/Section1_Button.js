import React, { Component } from "react";

class Section1Button extends Component {
render () {
    return (
        <div className = "section1_button">
            <a href = {this.props.href} target = "_blanck" >{this.props.name}</a>
        </div>
    )
}
}

export default Section1Button