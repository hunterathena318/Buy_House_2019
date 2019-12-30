import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class ListBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            date: this.props.date,
            title: this.props.title,
            imageBlog: this.props.imageBlog,
            path: 'blogs/'+this.props.id
        }
    }

    

    render(){
        return(
            <Link to={this.state.path} className="blogShow">
            <div className="blog_item" id={this.state.id}>
                <img className="blog_image" src={this.state.imageBlog}></img>
                <div className="booking_overlay trans_200"></div>
                <div className="blog_date">{this.state.date}</div>
                <div className="blog_title" >{this.state.title}</div>
            </div>
            </Link>
        )
    }
}

export default ListBlog;