import React, { Component } from 'react';

class InfoCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            say: this.props.say,
            imgCustomer: this.props.imgCustomer,
        }
    }
    render(){
        return(
            <div className="customerItem">
                <img className="customerImage" src={this.state.imgCustomer}></img>
                <div className="customerSay">{this.state.say}</div>
                <h2 className="customerName">{this.state.name}</h2>
            </div>  
        )
    }
}
export default InfoCustomer;


