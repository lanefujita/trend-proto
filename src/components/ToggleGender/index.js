import React, { Component } from 'react';
import "../Toggle/index.css"

class ToggleGender extends Component {
  state = {
    isEnabled : false
  }
  
  componentDidMount() {    
    this.setState({
      isEnabled : this.props.checkWhitelist(this.props.genderWhiteList, this.props.gender)
    })
  }

  render(){
    return(
      <div className="toggle" key={this.props.i}>
        <p className="toggle__label">{this.props.label}</p>
        <a href="#" className={this.state.isEnabled === true ? "toggle__button isEnabled" : "toggle__button isDisabled"} onClick={() => this.clickHandler()}>
          {this.state.isEnabled === true ? "Remove ×" : "Add +"}
        </a>
      </div>
    )
  }
  clickHandler = () => {
    this.props.updateWhitelist(this.props.genderWhiteList, this.props.gender)
    this.setState({
      isEnabled : !this.state.isEnabled
    })
  }
}

export default ToggleGender;