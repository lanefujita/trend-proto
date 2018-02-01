import React, { Component } from 'react';
import "./index.css"

class Toggle extends Component {
  state = {
    isEnabled : false
  }
  
  componentDidMount() {    
    console.log("TPWL "+this.props.partnerWhiteList);    
    this.setState({
      isEnabled : this.props.checkWhitelist(this.props.partnerWhiteList, this.props.partner)
    })
  }

  componentWillUnmount(){
    document.querySelector("body").classList.remove("noscroll");
  }

  render(){
    return(
      <div className="toggle" key={this.props.i}>
        <p className="toggle__label">{this.props.partner}</p>
        <a href="#" className={this.state.isEnabled === true ? "toggle__button isEnabled" : "toggle__button isDisabled"} onClick={() => this.clickHandler()}>
          {this.state.isEnabled === true ? "Unfollow ×" : "Follow +"}
        </a>
      </div>
    )
  }
  clickHandler = () => {
    this.props.updateWhitelist(this.props.partnerWhiteList, this.props.partner)
    this.setState({
      isEnabled : !this.state.isEnabled
    })
  }
}

export default Toggle;