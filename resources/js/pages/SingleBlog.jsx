import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/landingpage/Hero';
import Banner from '../components/landingpage/Banner';
import Footer from '../components/landingpage/Footer';
import DetailsBlog from '../components/landingpage/DetailsBlog';
import axios from 'axios';

import { Route } from 'react-router-dom'

const style = {
    marginBottom: '2rem',
    color: 'black'
}

const stlyeLink = {
    color: 'black'
}

class SingleBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            idProduct: [],
            recommend: []
        }
    }

    componentDidMount() {
        const id = this.state.id
        axios({
            method: 'GET',
            url: 'http://localhost:3000/blogs',
        })
            .then(response => {
                this.setState({
                    recommend: response.data
                })
                console.log(this.state.recommend)
            })
            .catch(error => {
                console.log(error);
        })   

        axios({
            method: 'GET',
            url: `http://localhost:3000/blogs?id=${this.state.id}`,
        })
            .then(response => {
                this.setState({
                    idProduct: response.data                 
                })
            })
            .catch(error => {
                console.log(error);
        })  
        console.log("product"+ this.state.idProduct) 

    }


      handleClick = (event) => {
        var idNew = event.target
        console.log("value cua blog:..." + idNew.id + "  /");
        axios({
            method: 'GET',
            url: `http://localhost:3000/blogs?id=${idNew}`,
        })
            .then(response => {
                this.setState({
                    idProduct: response.data                 
                })
                console.log(this.state.idProduct.id)
            })
            .catch(error => {
                console.log(error);
        })   


    }
    render(){
        const countList = this.state.recommend.length;
        const itemCurrent = this.state.id
        const arrayList = this.state.recommend.filter(item => item.id != this.state.id)
        
        const showProductBlog = this.state.idProduct.map((idBlogMap) => {
            return(
                <DetailsBlog id={idBlogMap.id}/>
            )
        })

        const listRecommend =         
        arrayList.slice(0,3).map( (blog) => (
            // <Link to= {`/blogs/${blog.id}`}>

             <a href= {`/blogs/${blog.id}`}  style={stlyeLink} id={blog.id}  > 
            <div className="recommendBlog" id={blog.id} value={blog.id}>
                <img className="recommendImg" src={blog.imageBlog}></img>
                <div className="recommendInfo">
                    <div className="recommendTitle">{blog.title}</div>
                    <div className="recommendDate">{blog.date}</div>
                </div>
            </div>         
            </a>
          //  {/* </a> */}
        ))
        return(
            <>
                <Hero hero="roomsHero">
                    <Banner title="Luxstay Room Vip" >
                        <Link to="/blogs" className="btn-primary">
                            Blog Now
                </Link>
                    </Banner>
                </Hero>
                <div className="singleBlog">
                {/* <DetailsBlog id={this.state.id}/> */}
                {showProductBlog}
                <div className="listRecommend">
                <h2>Popular Articles</h2>
                {listRecommend}
                <Route exact path="/blogs/:id" render={({match}) => (
                 <listproduct post={listRecommend.find(p => p.id === match.params.id)} />)} />
                </div>
                </div>
                <Footer />
                </>
        )
    }
}

export default SingleBlog;