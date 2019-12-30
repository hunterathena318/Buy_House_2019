 import React from 'react'
 import { Link } from 'react-router-dom';
import Hero from '../components/landingpage/Hero';
import Banner from '../components/landingpage/Banner';
import Service from '../components/landingpage/Service'
import Footer from '../components/landingpage/Footer';
import Facility from '../components/landingpage/Facility';
import Galeries from '../components/landingpage/Galeries';
import Advantage from  '../components/landingpage/Advantege';
import Recentlyitem from '../components/landingpage/RecentlyItem';
import Customer from '../components/landingpage/Customer';
import CountUpFooter from '../components/landingpage/CountUpFooter';
 export default function Home() {

 	return (
		<>
			<Hero>
			    <Banner title="WELCOME TO NEO GROUP." >
                    <Link to="/room" className="btn-primary">
                                Get Started
                     </Link>
                </Banner>
			</Hero>		
			<Galeries />
			<Recentlyitem />
			<Facility />
			<Service />
			<Advantage />
			<Customer />
			<CountUpFooter />
			<Footer />
		</>
	)
 }

// // json-server --watch db.json