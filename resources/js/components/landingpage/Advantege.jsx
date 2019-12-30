import React, { Component } from 'react';
import Credit from '../../../../public/images/credit-card.png';
import Calendar from '../../../../public/images/calendar.png';
import Clock from '../../../../public/images/clock.png';
import SmartPhone from '../../../../public/images/smartphone.png';
import Tray from '../../../../public/images/tray.png';
import Wifi from '../../../../public/images/wifi.png';

class Advantage extends Component {
    render() {
        return (
            <div className="advantages">
                <div className="advantages_title1">WHY CHOOSE BEACH RESORT</div>
                <p className="advantages_title2">The Advantages</p>
                <div className="row1">
                    <div className="advantages_item advantages_item1">
                        <img className="advantages_img" src={Credit}></img>
                        <div className="advantages_col">
                            <div className="advantages_title">Best Price Real Estate</div>
                            <div className="advantages_decription">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo.</div>
                        </div>
                    </div>

                    <div className="advantages_item advantages_item2">
                        <img className="advantages_img" src={Calendar}></img>
                        <div className="advantages_col">
                            <div className="advantages_title">Buy Now to Secure Availability</div>
                            <div className="advantages_decription">Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.</div>
                        </div>
                    </div>

                    <div className="advantages_item advantages_item3">
                        <img className="advantages_img" src={Clock}></img>
                        <div className="advantages_col">
                            <div className="advantages_title">Late Check-out on Request</div>
                            <div className="advantages_decription">Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum.</div>
                        </div>
                    </div>
                </div>

                <div className="row2">
                    <div className="advantages_item advantages_item4">
                        <img className="advantages_img" src={Wifi}></img>
                        <div className="advantages_col">
                            <div className="advantages_title">Free Service Available</div>
                            <div className="advantages_decription">Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante.</div>
                        </div>
                    </div>

                    <div className="advantages_item advantages_item5">
                        <img className="advantages_img" src={Tray}></img>
                        <div className="advantages_col">
                            <div className="advantages_title">Meetings & Special Events</div>
                            <div className="advantages_decription">Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.</div>
                        </div>
                    </div>

                    <div className="advantages_item advantages_item6">
                        <img className="advantages_img" src={SmartPhone}></img>
                        <div className="advantages_col">
                            <div className="advantages_title">Free Contact Anytime</div>
                            <div className="advantages_decription">In pede mi, aliquet sit amet, euismod in,auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advantage;