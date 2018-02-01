import React, { Component } from 'react';
import Toggle from "../Toggle";
import ToggleGender from "../ToggleGender";
import "./index.css";

class Modal extends Component {

  componentWillMount(){
    console.log("MPWL "+this.props.partnerWhiteList)
    document.querySelector("body").classList.add("noscroll");
  }

  componentWillUnmount(){
    document.querySelector("body").classList.remove("noscroll");
  }

  render(){
    return(
      <div>
      <div className="Modal">      
        <div className="Modal__Body">
          <div className="Modal__Sections">
            <div className="Modal__Section">
              <h3 className="Modal__Subhead">What would you like to shop for?</h3>
                <div className="Modal__Items">
                  <ToggleGender gender="womens" label="Women's" key="g1" checkWhitelist={this.props.checkWhitelist} genderWhiteList={this.props.genderWhiteList} updateWhitelist={this.props.updateWhitelist}/>      
                  <ToggleGender gender="mens" label="Men's" key="g2" checkWhitelist={this.props.checkWhitelist} genderWhiteList={this.props.genderWhiteList} updateWhitelist={this.props.updateWhitelist}/>                    
                </div>
              </div>
            <div className="Modal__Section">
              <h3 className="Modal__Subhead">Which stores would you like to see?</h3>
              <div className="Modal__Items">
              {this.props.partnerList ? this.props.partnerList.map((partner, i) => {
                return(
                  <Toggle partner={partner} key={"p"+i} checkWhitelist={this.props.checkWhitelist} partnerWhiteList={this.props.partnerWhiteList} updateWhitelist={this.props.updateWhitelist}/>
                )
              }) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="Modal__Done" onClick={this.props.toggleModal}>Done</button>
      </div>
    );
  }
}

export default Modal;