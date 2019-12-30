import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {withStyles} from '@material-ui/core'


const styles = {
  '@global': {
    body: {
      backgroundColor: '#fff'
    },
  },
  paper: {
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 8,
    backgroundColor: '#ff1744',
  },
  form: {
    //width: '100%', // Fix IE 11 issue.
    marginTop: 8,
  },
  submit: {
    margin: '24 0 16',
  },
};

 class Login extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      email: '',
      password: '',
      isLogin: false,
      users: []
    }
  }
   handleChange = (event) => {
     let name = event.target.name;
     let value = event.target.value;
    //  console.log(name,value);
     let data = {}
     data[name] = value;
    this.setState(data);
  }
   handleSubmit = (event) => {
     event.preventDefault();
    const {email, password} = this.state;
    const data = {
      email: email,
      password: password
    }
    axios.post('http://127.0.0.1:8000/api/login', data, {
			"headers": {
				"Accept": "application/json"
			}
		})
    .then(response => {
      const user_token = response.data.token
      localStorage.setItem('user_token', user_token)
         this.props.history.push('/');
    })
    .catch(error => {
      console.log('invalid email or password')
      console.log(error);
    })
} 
componentDidMount(){
  
}
  
render() {
  if(localStorage.getItem('user_token')) {
    this.props.history.push('/');
  }
  const {classes} = this.props;
  return (
    <>
    <Container component="main" maxWidth="xs"/>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            onChange={ this.handleChange}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            onChange={this.handleChange}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          </form>
      </div>
     </> 
    )
  } 
}
export default  withStyles(styles)(Login)