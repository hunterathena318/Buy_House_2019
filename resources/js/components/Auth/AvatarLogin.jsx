import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const styles = {
    avatar: {
        margin: 10,
    },
    wrapper: {
      position: 'relative',
    },
    paper: {
      position: 'absolute',
      top: 28,
      right: 0,
      left: 0,
      border: '1px solid',
      padding: 8,
    //   backgroundColor: theme.palette.background.paper,
    },
  };
class AvatarLogin extends Component {
   // const [open, setOpen] = React.useState(false);
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        this.setState(
          prevState => ({
          open: !prevState.open 
          }))
    };

     handleClickAway = () => {
        this.setState({
            open: false
        })
    };
    handleLogout = () => {
      localStorage.removeItem("user_token");
      this.props.history.push('/login')

    }
    render() {
        const {classes } = this.props
        return (
            <ClickAwayListener onClickAway={this.handleClickAway}>
            <div className={classes.wrapper}>
              <button type="button" onClick={this.handleClick}>
              <Avatar className={classes.avatar}>An</Avatar>
              </button>
              {}
              {this.state.open ? 
              <React.Fragment>
                  {localStorage.getItem("user_token") ? (
                   <div>
                      <span onClick={this.handleLogout}>Log Out</span>
                      <Link to="/cart">Cart</Link>
                   </div>
                   ) : ( 
                   <div>  
                      <Link to="/login">Log In</Link>
                      <Link to="/register">Registers</Link>
                   
                   </div>  ) }
              </React.Fragment>   : null}
            </div>
          </ClickAwayListener>
        )
    }
}
export default  withRouter(withStyles(styles)(AvatarLogin))
