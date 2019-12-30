import React, {Component} from 'react'
import axios from 'axios'
import ListBlog from '../components/landingpage/ListBlog'
import Hero from '../components/landingpage/Hero'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'


class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            listBlog: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/blogs',
        })
            .then(response => {
                this.setState({
                    listBlog: response.data
                })
                console.log(this.state.listBlog)
            })
            .catch(error => {
                console.log(error);
        })  }

    render(){
        const showBlog = this.state.listBlog.map(item =>(
            <ListBlog
               id={item.id}
               date={item.date}
               title={item.title}
               imageBlog={item.imageBlog}
            />
        ))
        return(
            <>
            <Hero hero="roomsHero">
                <Banner title="Blogs" >
                        <Link to="/blogs" className="btn-primary">
                            Read New Blog Now
                        </Link>
                </Banner>
            </Hero>

            < div className="blog_list" >
                {/* <div className="row">
                    <div className="col">
                        <div className="booking_slider_container">
                            <div className="owl-carousel owl-theme booking_slider"> */}
                                {showBlog} 
                                <Route exact path="/blogs/:id" render={({match}) => (
                              <listproduct post={this.state.listBlog.find(p => p.id === match.params.id)} />
                            )} />
                                
                            {/* </div>
                        </div>
                    </div>
                </div> */}
            </ div>
            <Footer />
        </>
        )
    }
}

export default Blog;