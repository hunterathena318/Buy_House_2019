import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaBeer} from 'react-icons/fa';

export default class Service extends Component {
    constructor(props){
        super(props);
        this.state = {
            serices: [
                {
                    icon: <FaCocktail/>,
                    title: 'free cockTail',
                    info: 'My resort free drink for everyone, welcome and thanks all'
                },
                {
                    icon: <FaBeer/>,
                    title: 'free Beer',
                    info: 'My resort free drink for everyone, welcome and thanks all'
                },
                {
                    icon: <FaCocktail/>,
                    title: 'free cockTail',
                    info: 'My resort free drink for everyone, welcome and thanks all'
                },
                {
                    icon: <FaBeer/>,
                    title: 'free Beer',
                    info: 'My resort free drink for everyone, welcome and thanks all'
                }
            ]
        }
    }
    render() {
        return (
           <div>
                {/* <Title title="Service"/>               */}
                <Title title="Service"/>
           </div>
        )
    }
}
