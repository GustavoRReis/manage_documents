import { Box, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Login.css';
import logoTaugor from '../../images/logo-taugor.png';
import firebase from '../../Config/firebase';

export default function Login({ history }) {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const [userInvalid, setUserInvalid] = useState(false);
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

const login = async () => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(userLogin.email, userLogin.password);
    alert('deu certo');
  } catch (err) {
    setUserInvalid(true);
    setMessage(err.message.replace('Firebase: ', ''));
  }
};

  return (
    <div className="page-login">
      <Box component="form" className="box-login">
        <img src={logoTaugor} alt="logo-taugor"></img>
        <TextField
          onChange={handleInputChange}
          name="email"
          id="email-login"
          label="Email"
          type="email"
        />
        <TextField
          onChange={handleInputChange}
          name="password"
          id="password-login"
          label="Password"
          type="password"
        />
        <Button onClick={login} variant="contained">
          Login
        </Button>
        <Button onClick={() => history.push('/register')} variant="outlined">
          Register
        </Button>
        {userInvalid ? (
          <div className='msg-error'>
            <h4> {message} </h4>
          </div>
        ) : (
         null
        )}
        <p> © Desenvolvido por Gustavo Reis</p>
      </Box>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;
