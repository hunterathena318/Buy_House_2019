import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import axios from 'axios'

const cols = {
  sold: { alias: 'Số Lượng' },
  genre: { alias: 'Loại' }
};


class Dashboard extends Component{
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
            console.log(response.data.data)
            this.setState({
                user: response.data.data.length
            })
        })
        
    }
    render(){
        const data= [ { genre: 'Users', sold: this.state.user, income: 2300 },
                      { genre: 'Categories', sold: this.state.category, income: 2300 },
                      { genre: 'Houses', sold: this.state.house, income: 2300 },]
                      console.log(data)
        return(
            <div className='dashboard'>
            <div>Bảng thống kê</div>
            <Chart width={600} height={400} data={data} scale={cols}>
                <Axis name="genre" title />
                <Axis name="sold" title />
                <Legend position="top" dy={-1} />
                <Tooltip />
                <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
            </div>
        )
    }
}

export default Dashboard;
