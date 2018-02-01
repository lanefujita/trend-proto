import './index.css';

import React, { Component } from 'react';

class Item extends Component {
  
  render() {
    return(
      <div className="Item">
        <h3 className="Item__Partner">{this.props.partner}</h3>
        <img className="Item__Image" src={this.props.image_url} />
        <div className="Item__Details">
          {/*<span className="Item__Product">{this.props.product_name}</span>*/}
          <span className="Item__Brand">{"by "+this.props.brand_name}</span>    
          <span className="Item__Price">{"$"+this.props.price}</span>
                  
        </div>
      </div>  
    );
  }
}

export default Item;