import React from 'react'
import { Zoom } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

const images = [
'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg',
'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg',
 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg',
]

const style1 = {
    marginTop: '4.1em'
}

export default function Hero(props) {
    const {hero, children} = props;
    const zoomOutProperties = {
        duration: 3000,
        transitionDuration: 2000,
        infinite: true,
        indicators: true,
        scale: 1.5,
        arrows: true
      }
       
      const Slideshow = () => {
          return (
            <div className="slide-container">
              <Zoom {...zoomOutProperties}>
                {
                  images.map((each, index) =><><img key={index} style={{width: "100%", height: '52em'}} src={each} />   <div className="hero">{children} </div></>
                   )
                   
                 }
              </Zoom>
            </div>
          )
      }
    return (    
            // <slider className={hero}>
            //    <slide className="heroSlide">{children} </slide>
            //    <slide className="heroSlide">{children} </slide>
            //    <slide className="heroSlide">{children} </slide>
            //    <slide className="heroSlide">{children} </slide>
            // </slider>  
            <div className="slideShow" style={style1}>
            
            <Slideshow className="slideShowImage"></Slideshow>
            
        </div>
    )
}
Hero.defaultProps = {
    hero: 'defaultHero',
}