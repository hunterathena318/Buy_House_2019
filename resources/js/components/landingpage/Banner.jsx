import React, {Component} from 'react'


export default function Banner(props) {
    const {title, subtitle, children} = props;
    return (
        <div className="banner">
            <h1> { title} </h1>
            <p className="welcome">Better Homes, Better Choices & Better Prices</p>
           <p>{subtitle}</p>
           {children}
        </div>
    )
}