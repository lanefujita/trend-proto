import React, { Component } from 'react';
import axios from 'axios'
import Item from '../Item';
import Modal from '../Modal';
import './index.css';

class App extends Component {
  
  //initializing state
  state = {
    list: [],
    isLoading: true,
    modalVisible: true,
    listVisible: true,
    error: false
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  
  updateWhitelist = (list, p) => {   
    if(list.length>-1 && list.indexOf(p)<0){
      list.push(p)
    }else{
      list.splice(list.indexOf(p),1)
    }
    console.log(list);
  }
  
  /*updateWhitelist = (list, t) => {   
    list.push(t)
    console.log("List: "+list.indexOf(t))
  }*/
  
  checkWhitelist = (list, p) => {
    return(list.indexOf(p) > -1 ? true : false)
  }  
  
  validateItem = (item) => {
      if((this.partnerWhiteList.length === 0 || this.checkWhitelist(this.partnerWhiteList, item.PARTNER)) && ((this.genderWhiteList.length === 0|| this.checkWhitelist(this.genderWhiteList, item.GENDER)) && item.GENDER!=='other')){             
      //if((this.partnerWhiteList.length === 0 || this.checkWhitelist(this.partnerWhiteList, item.PARTNER)) && (this.genderWhiteList.length === 0 || this.checkWhitelist(this.genderWhiteList, item.GENDER) || item.GENDER === "other")){                                                                                                           
      //if((this.partnerWhiteList.length === 0 || this.checkWhitelist(this.partnerWhiteList, item.PARTNER)) && (item.GENDER === "other")){                                                                                                               
      return(<Item partner={item.PARTNER} image_url={item.IMAGE_URL} brand_name={item.BRAND_NAME} product_name={item.NAME} key={item.DOC_ID} price={item.PRICE}/>)
    }
  }

  componentWillMount(){
    this.partnerList = [];
    this.partnerWhiteList = [];
    this.partnerBlackList = ['OFF5TH','',''];
    this.genderList = [];
    this.genderWhiteList = [];
  }

  componentDidMount() {
    
    axios.get('https://cdn.glitch.com/2f3d62cf-3953-46e6-bb47-45c7b5d78264%2Fnext_trending_pageviews_price_medium_FIXED.json?1516922866557') //2M
    //1M axios.get('https://cdn.glitch.com/2f3d62cf-3953-46e6-bb47-45c7b5d78264%2Fnext_trending_pageviews_medium.json?1516607046105')
    //1L axios.get('https://cdn.glitch.com/2f3d62cf-3953-46e6-bb47-45c7b5d78264%2Fnext_trending_pageviews_explosion.json?1516495813194')
    //1Saxios.get('https://cdn.glitch.com/2f3d62cf-3953-46e6-bb47-45c7b5d78264%2Fnext_trending_pageviews.json?1516495811408')
      //passing response into anonymous function
      .then(response => {
        //updating state
        this.setState({
          list: response.data,
          isLoading: false,
          error: false,
        })
      })
      .catch(error => {
        this.setState({error: error, isLoading: false,})
      })
  
  }
  
  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">Trending For You</h1>
          <a href="#" onClick={this.toggleModal}>Menu</a>
        </div>
        <div>
          {this.state.list.map((item, i) => {
            this.genderList.indexOf(item.GENDER) < 0 ? this.genderList.push(item.GENDER) : null;
            this.partnerList.indexOf(item.PARTNER) < 0 ? this.partnerList.push(item.PARTNER) : null;
            return (
              //see: props
              this.validateItem(item)
            )
          })}
        </div>
        {this.state.modalVisible ? <Modal toggleModal={this.toggleModal} updateWhitelist={this.updateWhitelist} partnerWhiteList={this.partnerWhiteList} genderWhiteList={this.genderWhiteList} checkWhitelist={this.checkWhitelist} partnerList={this.partnerList}/> : null}
      </div>
    );
  }
  
}

export default App;