import React, { Component } from 'react';
import Resort from '../../../../public/images/resort.png';
import Pool from '../../../../public/images/pool.png';
import Sunbath from '../../../../public/images/sunbath.png';
import House from '../../../../public/images/countryside.png'
import About from '../../../../public/images/about.jpg'

const aboutStyle = {
    width: '32em',
    height: '50em',
    justifyContent: 'center',
    marginLeft: '15em'
}

const styleTitle = {
    width: '20em',
    textAlign: 'center',
    marginLeft: '5em'

}

class Facility extends Component {
    render() {
        return (
            <>
            <br/>
            <div className="facilities">
                <img src={About} style={aboutStyle} alt=""></img>              
                <div className="container">
                <h1 style={styleTitle}>We can help you to find luxurious and beautiful properties in your local area</h1>
                    <div className="col-lg-2">
                    <div className="row icon_box_row">
                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={Resort} alt=""></img></div>
                                <div className="icon_box_title"><h2>Beautiful House</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={Pool} alt=""></img></div>
                                <div className="icon_box_title"><h2>Swimming Pool</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        <div className="row icon_box_row">
                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={Sunbath} alt=""></img></div>
                                <div className="icon_box_title"><h2>Luxury Villa</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={House} alt=""></img></div>
                                <div className="icon_box_title"><h2>Luxury Villa</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Facility;