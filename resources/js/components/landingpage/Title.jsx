import React, {Component} from 'react';


class Title extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    render(){
    return (
        <div className="section-title">
           <h1>{this.state.title}</h1>
        </div>
    )
}}

export default Title;