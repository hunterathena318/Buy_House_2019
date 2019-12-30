import React, {Component} from 'react'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InfoCustomer from './InfoCustomer';

const customerList =[
    {
        name: "Viễn Nè",
        imageCustomer: "https://firebasestorage.googleapis.com/v0/b/realestate-ee283.appspot.com/o/customer%2Fperson_4.jpg?alt=media&token=61e588f3-78d3-4df5-8abc-d3f6eb0edb15",
        say: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        name: "Lê Viễn",
        imageCustomer: "https://firebasestorage.googleapis.com/v0/b/realestate-ee283.appspot.com/o/customer%2Fstaff-1.jpg?alt=media&token=4a2da7c4-9d9e-4112-95b2-c77f242a0cbc",
        say: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        name: "Trường An",
        imageCustomer: "https://firebasestorage.googleapis.com/v0/b/realestate-ee283.appspot.com/o/customer%2Fteam-3.jpg?alt=media&token=e38812e7-ac99-404a-a80c-0e5c0b4c9ef4",
        say: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        name: "Xuân Tân",
        imageCustomer: "https://firebasestorage.googleapis.com/v0/b/realestate-ee283.appspot.com/o/customer%2Fperson_3.jpg?alt=media&token=8ae5604a-c732-4cf4-9f7a-7a891423aa12",
        say: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        name: "Henrry Smith",
        imageCustomer: "https://firebasestorage.googleapis.com/v0/b/realestate-ee283.appspot.com/o/customer%2Fperson_2.jpg?alt=media&token=00e1459d-ad9e-45a3-93d5-e519ec60444d",
        say: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        name: "Daniel James",
        imageCustomer: "https://firebasestorage.googleapis.com/v0/b/realestate-ee283.appspot.com/o/customer%2Fperson_1.jpg?alt=media&token=5c0415e9-173e-41e2-9787-c937540f9a61",
        say: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
]

const styleTitle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
}

class Customer extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemList: customerList
        }
    }
    render(){
        const itemCustomer = this.state.itemList.map((item) =>   
            <InfoCustomer 
               name= {item.name}
                say= {item.say}
               imgCustomer= {item.imageCustomer}
            />
        );
        return(
            <>
            <h1 style={styleTitle}>Our satisfied customer says</h1>
            <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className="slideCustomer"
            containerClass="container-padding-bottom"
            dotListClass=""
            draggable
            focusOnSelect
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
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
                {itemCustomer}
        </Carousel>
        </>
        )
    }
}

export default Customer;