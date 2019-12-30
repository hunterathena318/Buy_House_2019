import React, { Component } from 'react';


const style = {
    left: '0'
}

const styleH5 = {
    position: 'absolute',
    top: '5rem',
    width: '22rem',
    left:'2.5em',
    background: '#2f3035',
    height: '6em',
    overflow: 'hidden'
}

const styleItem = {
    position: 'relative',
    width: '25rem',
    display: 'inline'
}
class Galeries extends Component {
    render() {
        return (
            <div className="gallery">
                <h1 style={style}>Welcome to NEO Group A Real Estate Agency</h1>
                
                <h4> Renting A Properties Pointing has no control about the blind texts it is an almost unorthographic life.</h4>
                <div className="gellery_control">
                    <div style={styleItem}>
                    <img className="background_gallery" src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"></img>
                    <p style={styleH5}>Renting A Properties Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                    </div>
                    <div style={styleItem}>
                    <img className="background_gallery" src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg"></img>
                    <p style={styleH5}>The headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                    </div>
                    <div style={styleItem}>
                    <img className="background_gallery" src="https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg"></img>
                    <p style={styleH5}>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                    </div>
                    <div style={styleItem}>
                    <img className="background_gallery" src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg"></img>
                    <p style={styleH5}>Renting A Properties Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Galeries;