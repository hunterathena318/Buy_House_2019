  import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/landingpage/Hero';
import Banner from '../components/landingpage/Banner';
import Footer from '../components/landingpage/Footer';
// import Search from '../components/SearchBox';
import ListRooms from '../components/product/ListRooms'
import Pagination from '../components/landingpage/Pagination';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Route } from 'react-router-dom'


// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";

const booking_list = {
    textAlign: 'center',
    marginBottom: '2em'
}
const images = 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg'
class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            categories: [],
            rooms: [],
            categoryId: ''
        }
    }
    componentDidMount() {
        const token = localStorage.getItem('user_token')    
        let setting = {
			"url": 'http://127.0.0.1:8000/api/category',
			"method": "GET",
			"headers": {
				"Accept": "application/json"
			}
        }    
        let settings = {
			"url": 'http://127.0.0.1:8000/api/house',
			"method": "GET",
			"headers": {
				"Accept": "application/json"
			}
        } 
        axios(settings)     
            .then(response => {
                this.setState({
                    listProducts: response.data
                })
                // console.log(this.state.listProducts)
            })
            .catch(error => {
                console.log(error);
        })  
        axios(setting)
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
          
    }

    handleFilter = (event) => {
        const categoryId = event.target.value
        console.log(event.target.value);
        this.setState({
            categoryId: categoryId
        })
        axios.get(`http://127.0.0.1:8000/api/category/`+ categoryId)
            .then(response => {
                this.setState({
                    listProducts: response.data
                })
                console.log(this.state.listProducts)
                
            })
            .catch(error => {
                console.log(error);
            })

    }
    renderlistRooms(){
        const listProdcuts = [...this.state.listProducts]
        console.log(listProdcuts)
        return listProdcuts.map((item,index) =>
            (
                <ListRooms 
                    key={index}
                    id={item.id}
                    price={item.price}
                    images={images}
                    name={item.name}
                    path={item.id}      
                />
            ));
    }
   
    render() {
        const { categoryId, categories,} = this.state
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="Buy your Home" >
                            <Link to="/rooms" className="btn-primary">
                                Buy Now
                            </Link>
                    </Banner>
                </Hero>
                {/* <input type='text' onChange={this.handleSearch} /> */}
                <TextField
                    select
                    value={categoryId}
                    label="Filter"
                    onChange={this.handleFilter}
                    fullWidth={true}
                >
                    {categories.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </TextField>

                < div className="booking_list" style={booking_list} >
                    <div className="row">
                        <div className="col">
                            <div className="booking_slider_container">
                                <div className="owl-carousel owl-theme booking_slider">
                                    {this.renderlistRooms()} 
                                    <Route exact path="/rooms/:id" render={({match}) => (
                                  <listproduct post={this.state.listProducts.find(p => p.id === match.params.id)} />
                                )} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </ div>
                <Pagination />
                <Footer />
            </>
        )
    }
}



export default Rooms;
