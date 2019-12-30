import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <div className="footer_container">
                <div className="card_footer"><br/><br/>
                <section className="section_contact">
                   <h4 className="title">CONTACT</h4>
                   <ul className="section_ul">
                       <li><div className="li_contact"><div className="title_contact">Address: </div><div className="section_decription"> 9863 - 9867 Mill Road,Cambridge, MG09 99HT</div></div></li><br/>
                       <li><div className="li_contact"><div className="title_contact">Phone: </div><div className="section_decription"> (+84) 0345 920 977</div></div></li><br/>
                       <li><div className="li_contact"><div className="title_contact">Fax: </div><div className="section_decription"> +1 800 889 9898</div></div></li><br/>
                       <li><div className="li_contact"><div className="title_contact">Email: </div><a className="section_decription mail"> footerbooking@booking.com</a></div></li><br/>
                   </ul>
                </section>
                <section className="section_main_menu">
                   <h4 className="title">Main Menu</h4>
                   <ul className="section_ul">
                       <Link to="/" className="link_menu menu1">HOME</Link><br/><br/>
                       <Link to="/rooms" className="link_menu menu2">BOOK NOW</Link><br/><br/>
                       <Link to="/" className="link_menu menu3">ABOUT</Link><br/><br/>
                       <Link to="/" className="link_menu menu4">CONTACT</Link><br/><br/>
                   </ul>
                </section>

                <section className="section_to_do">
                   <h4 className="title">Get Started</h4>
                   <ul className="section_ul">
                       <Link to="/rooms" className="link_to_do todo1">Buy Now</Link><br/><br/>
                       <Link to="/rooms" className="link_to_do todo2">Rent</Link><br/><br/>
                       <Link to="/" className="link_to_do todo3">Payment</Link><br/><br/>
                       <Link to="/" className="link_to_do todo4">Loan</Link><br/><br/>
                   </ul>
                </section>

                <section className="section_room">
                   <h4 className="title">Explore</h4>
                   <ul className="section_ul">
                       <Link to="/" className="link_room linkroom1">Privacy</Link><br/><br/>
                       <Link to="/rooms" className="link_room linkroom2">Policy</Link><br/><br/>
                       <Link to="/" className="link_room linkroom3">FAQ</Link><br/><br/>
                       <Link to="/" className="link_room linkroom4">Feature</Link><br/><br/>
                   </ul>
                </section>
                </div>
                <hr />
                <p className="design_by">NEO Group Real Estate design by Team 3. All Rights Reserved.</p>
            </div>
        );
    }
}

export default Footer;