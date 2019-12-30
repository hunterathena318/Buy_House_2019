import React, { Component } from 'react'

export class About extends Component {
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/category')
            .then( response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                Blog
            </div>
        )
    }
}

export default About
