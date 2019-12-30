import React, {Component} from 'react'
import axios from 'axios'
import { FaUserCheck } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

class ItemCount extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            category: '',
            house: '',
        }
    }
    componentDidMount() {
        const token = localStorage.getItem('user_token')
        let settings = {
            "url":'http://127.0.0.1:8000/api/allUser',
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }  
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/house',
        })
        .then(response => {
            this.setState({
                house: response.data.length
            })
        })
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/category',
        })
        .then(response => {
            this.setState({
                category: response.data.length
            })
        })
        axios(settings)
        .then(response => {
            this.setState({
                user: response.data.data.length
            })
        })
        
    }
    render(){
        return(
            <>
              <div className='item-count'>
                  <div className='user-count'>
                      <div className='icon-count-red'>
                          <FaUserCheck size='2.5em'></FaUserCheck>
                      </div>
                      <div className='count-info'>
                      <div className='count-title'>User</div>
                     <div className='count-number'>{this.state.user}</div>
                     </div>
                  </div>
                  <div className='category-count'>
                        <div className='icon-count-yellow'>
                          <GiFamilyHouse size='2.5em'></GiFamilyHouse>
                      </div>
                      <div className='count-info'>
                      <div className='count-title'>Category</div>
                     <div className='count-number'>{this.state.category}</div>
                     </div>
                  </div>
                  <div className='house-count'>
                        <div className='icon-count-green'>
                          <FaBars size='2.5em'></FaBars>
                      </div>
                      <div className='count-info'>
                      <div className='count-title'>House</div>
                     <div className='count-number'>{this.state.house}</div>
                     </div>
                  </div>
              </div>
            </>
        )
    }
}
export default ItemCount;