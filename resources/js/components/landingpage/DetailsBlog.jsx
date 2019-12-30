import React, {Component} from 'react';
import axios from 'axios';


class DetailsBlog extends Component{
    constructor(props){
        super(props);
        this.state = {
            blogProduct:[],
            id: this.props.id,
        }
    }

    componentDidMount() {
        const id = this.state.id
        axios({
            method: 'GET',
            url: `http://localhost:3000/blogs?id=${id}`,
        })
            .then(response => {
                this.setState({
                    blogProduct: response.data
                })
                console.log(this.state.blogProduct)
            })
            .catch(error => {
                console.log(error);
        })   
        console.log(this.props.id);
    }

    render(){
        var showItem = this.state.blogProduct.map(item => {
            return(
                <>
                  <div className="blogDetailsBlog">
                    <img className="blogDetailsImg" src={item.imageBlog}></img>
                    <div className="blogDetailsTitle">{item.title}</div>
                    <div className="blogDetailsDate">{item.date}</div>
                    <pre className="blogDetailsPrap">{item.decription}</pre>
                  </div>
                </>
            )
            })

    return(
        <>
        {showItem}
        </>
    )}
}

export default DetailsBlog;