import React, { Component } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import { FaMapMarkedAlt } from "react-icons/fa";
import CardDialog from './CardDialog'
const style = {
    margin: "10em"
}
const images = [
    'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg',
    'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg',
    'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg',
]

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productRooms: '',
            id: this.props.id,
            user_id: ''
        }
    }
    componentDidMount() {
        const id = this.state.id
        const token = localStorage.getItem('user_token')
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
                    productRooms: response.data.data
                })
            })
            .catch(error => {
                console.log(error)
            })
        

    }
    renderInfoHouse() {

        const productRooms = { ...this.state.productRooms }
        return (
            <div className="infoItemHouse">
                <h2 className="infoItemName">{productRooms.name}</h2>
                <div className="infoItemAddress">
                <FaMapMarkedAlt size="35px"></FaMapMarkedAlt>
                <p className="infoItemShowAddress">{productRooms.description}</p>
            </div>
                <div className="infoItemDecription">
                    <div className="infoItemDecription1">
                        <span className="infoSpan">PRICE:</span>
                        <p className="infoItemShowPrice">{productRooms.price}</p>
                    </div>
                    <div className="infoItemDecription2">
                        <span className="infoSpan">INFORMATION:</span>
                        <p className="infoItemShowDecription">{productRooms.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const productRooms = { ...this.state.productRooms }
      const list = images.map(img => {
          return (  
            <img className="detailsShowItem" src={img}></img> 
          )
      })
        return (
            <>
                <div>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={2000}
                        centerMode={false}
                        className="detailsShowHouse"
                        containerClass="container"
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
                                items: 1
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1
                            }
                        }}
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {list}
                    </Carousel>
                    <CardDialog
                        total_price={productRooms.price}
                        user_id={this.state.user_id}
                    />
                    {this.renderInfoHouse()}

                </div>
            </>
        );
    }
};

export default Details;