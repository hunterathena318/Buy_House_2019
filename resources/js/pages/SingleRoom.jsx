import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/landingpage/Hero';
import Banner from '../components/landingpage/Banner';
import Footer from '../components/landingpage/Footer';
// import Search from '../components/SearchBox';
import Details from '../components/product/DetailsRoom';
import axios from 'axios';


class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            category: []
        }
    }
    componentDidMount() {
        const { id } = this.state
        let setting = {
			"url": `http://127.0.0.1:8000/api/house/` + id,
			"method": "GET",
			"headers": {
				"Accept": "application/json"
			}
		}
        axios(setting)
            .then(response => {
                this.setState({
                    category: response.data
                })
                // console.log(this.state.category)
            })
            .catch(error => {
                // console.log(error);
        })}

    render() {
        // var getCategory = this.state.category.map(item => {
        //     return(
        //         <RecommendRoom id={item.id} IdCategory={item.categoryId} />
        //     )
        // })
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="Luxstay Room Vip" >
                        <Link to="/rooms" className="btn-primary">
                            Single Room
                </Link>
                    </Banner>
                </Hero>
                {/* {postDetails} */}
                <div className="singleHouse">
                    <Details id={this.state.id}/>
                    {/* <div className="listRecommendHouse">
                        <h2>Recommend House</h2>
                        {getCategory}
                    </div> */}
                </div>
                <Footer />
            </>
        );
    }
}
export default SingleRoom;