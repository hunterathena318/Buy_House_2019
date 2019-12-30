import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MySnackbarContent from '../landingpage/snackbar/MySnackbarContent'
export default class CardDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
            total_price: '',
            user_id: '',
            checkout: false,
            open: false
        }
    }
    handleClickOpen = () => {
        this.setState( {
            open: true,
        })
    }
    handleCloseDialog = () => {
        this.setState({
            open: false
        })
    }
    handleChangeField = (event) => {
      this.setState({
        open: true
      })
      let name = event.target.name;
      let value = event.target.value;
      console.log(name)
      this.setState({
        [name]: value
      })
    }
    handleCheckout = (e) => {
        const token = localStorage.getItem('user_token')
        const {user_id} = this.state
        console.log(user_id)
        const total_price = 151515
        const data = {
            total_price: total_price,
            user_id: user_id
        } 
        axios.post('http://127.0.0.1:8000/api/cart', data, {
			"headers": {
				"Authorization": "Bearer " + token,
				"Accept": "application/json"
			}
		})
        .then(response => {
            this.setState({
                open: false,
                checkout: true,
                typeMsg: 'success',
                message: 'Checkout success'
                })
        })
        .catch(error => {
            console.log(error)
        })
       
        
    }

    componentDidMount() {
        const token = localStorage.getItem('user_token')
        let settings = {
            "url":'http://127.0.0.1:8000/api/user',
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }   
        axios(settings)
        .then(response => {
            this.setState({
                user_id: response.data.data.id
            })
        })
        .catch(error => {
            console.log(error)
        })



    }
   
    render() {
        const {open, message, typeMsg, name, address, phone} = this.state 
        return (
            <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Buy Now 
            </Button>
            <Dialog
              open={open}
              onClose={this.handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Add your card this House ?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending anonymous location data to
                  Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <div>
                  
              <TextField
              autoFocus={true}
              margin="dense"
              label="Full Name"
              type="text"
              value={name}
              name="name"
               onChange={(event) => this.handleChangeField(event)}
              fullWidth
            />

             <TextField
              name="phone"
              autoFocus={true}
              margin="dense"
              label="Phone Number"
              type="text"
              value={phone}
              onChange={(event) => this.handleChangeField(event)}
              fullWidth
            />
             <TextField
              name="address"
              autoFocus={true}
              margin="dense"
              label="Address"
              type="text"
              value={address}
              onChange={(event) => this.handleChangeField(event)}
              fullWidth
            />
            </div>
              <DialogActions>
                <Button onClick={this.handleCloseDialog} color="primary">
                  Disagree
                </Button>
                <Button onClick={(e) => this.handleCheckout(e)} name="checkout" color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <MySnackbarContent
                    open={open}
                    onClose={this.handleClose}
                    variant={typeMsg ? typeMsg : 'success'}
                    message={message}
                    handleClose={this.handleClose}
                />
          </div> 
            
        )
    }
}
