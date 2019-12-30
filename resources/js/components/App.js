import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import AdminPage from '../pages/Admin';
import SingleRoom from '../pages/SingleRoom';
import Error from '../pages/Error';
import About from '../pages/About';
import Navbar from '../components/landingpage/Navbar';
// import { connect } from 'react-redux';
// import Contact from './Contact';
// import Test from '../pages/Test';
import Blog from '../pages/Blog';
import SingleBlog from '../pages/SingleBlog';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
export default class App extends Component {
  render(){
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/login" component={Login}/>
      <Route exact path = "/register" component={Register}/>
      {/* <Route exact path = "/test" component={Test}/> */}
      <Route exact path = "/rooms" component={Rooms}/>
      <Route exact path = "/rooms/:id" render={({match}) => (
          <SingleRoom
            id={match.params.id}
          />  )}/>
       <Route exact path = "/blogs/:id" render={({match}) => (
          <SingleBlog
            id={match.params.id}
          />  )}/>
      <Route exact path = "/about-us" component={About}/>      
      <Route exact path = "/blog" component={Blog}/>
      <Route exact path = "/cart" component={Cart}/>
      <Route exact path = "/admin" component={AdminPage}/>
      {/* <Route exact path = "/contact-us" component={Contact}/> */}
      <Route component={Error}/>
    </Switch>
    </Router>

  );
}}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
