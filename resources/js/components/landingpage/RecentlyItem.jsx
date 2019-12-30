import React, { Component } from 'react';
import ListRooms from '../product/ListRooms';
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class RecentlyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/rooms',
        })
            .then(response => {
                this.setState({
                    listProducts: response.data
                })
                console.log(this.state.listProducts)
            })
            .catch(error => {
                console.log(error);
        })  }
    render() {
         const {listProducts } = this.state
         const showProduct =
        this.state.listProducts.slice(0,4).map(item =>
            (
                <ListRooms 
                    id={item.id}
                    price={item.price}
                    images={item.imagesURL}
                    categories={item.name}
                    path={item.id}      
                />
            ));
        return (
            < div className="booking" >
                <div className="container-booking">
                    <div className="row">
                        <div className="col">
                            <div className="booking_title text-center"><h1>Recently Added</h1></div>
                            <div className="booking_text text-center">
                                <p className="picon">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                            <div className="booking_slider_container">
                                <div className="owl-carousel owl-theme booking_slider">
                                <Carousel
                                 additionalTransfrom={0}
                                 arrows
                                 autoPlay
                                 autoPlaySpeed={1500}
                                 centerMode={false}
                                 className="slideRecently"
                                 containerClass="container-with-dots"
                                 dotListClass=""
                                 draggable
                                 focusOnSelect={false}
                                 infinite
                                 itemClass=""
                                 keyBoardControl
                                 minimumTouchDrag={80}
                                 renderButtonGroupOutside={false}
                                 renderDotsOutside={false}
                                 responsive={{
                                   desktop: {
                                     breakpoint: {
                                       max: 3000,
                                       min: 1024
                                     },
                                     items: 3,
                                     partialVisibilityGutter: 40
                                   },
                                   mobile: {
                                     breakpoint: {
                                       max: 464,
                                       min: 0
                                     },
                                     items: 1,
                                     partialVisibilityGutter: 30
                                   },
                                   tablet: {
                                     breakpoint: {
                                       max: 1024,
                                       min: 464
                                     },
                                     items: 2,
                                     partialVisibilityGutter: 30
                                   }
                                 }}
                                 showDots={false}
                                 sliderClass=""
                                 slidesToSlide={1}
                                 swipeable>
                                     
                                    {showProduct}
                             
                                </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default RecentlyItem;