import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const categories = {
    marginTop: '4em'
}


class ListRooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            images: this.props.images,
            price: this.props.price,
            name: this.props.name,
            path: 'rooms/'+this.props.id
        }
        // console.log(this.props.id)
    }

    // getID = (event) => {
    //     const dataSource = [...this.state];
    //     let i = event.target.value;
    //     this.setState({ id: dataSource.filter(item => item.key === i) });
    //     // console.log(this.state.id)
    // }
    render() {

        return (
            <div className="booking_item" >
                <img className="background_image" src={this.state.images} alt=""></img>
                <div className="booking_overlay trans_200"></div>
                <div className="booking_price">{this.state.price}</div>
                <div className="booking_price" style={categories}>{this.state.name}</div>
                {/* <div className="booking_link"> <Link to={this.state.path} onClick={this.getID}><a>Book Now</a></Link></div>  */}
                 <div className="booking_link"> <Link to={this.state.path}><a>Buy Now</a></Link></div>
            </div>
        )
    }
}

export default ListRooms;