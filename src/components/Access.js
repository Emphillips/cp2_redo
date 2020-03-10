import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../App.css';

  
const Access = (props) => {
  // const classes = useStyles();
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()
    document.cookie = 'loggedIn=true;max-age = 60*1000'
    props.user(username)
    props.user(password)
    history.push("/Listings")
  }
    
  
    return (
      <div className="loginContainer">
        {/* <form onSubmit={handleSubmit}> */}
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          {/* <Button
              type="submit"
              className={classes.logInButton}>LogIn</Button> */}
          <Button block bsSize="large" type="submit">
            Login
          </Button>
      </div>
    );
  };

export default Access;