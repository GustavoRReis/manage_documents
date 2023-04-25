import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import logoTaugor from '../../images/logo-taugor.png';
import firebase from '../../Config/firebase';

export default function Register({history}) {

  const [userRegister, setUserRegister] = useState({
    email: '',
    password: '',
  });

  const [userInvalid, setUserInvalid] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

const registerUser = async () => {
  if (!userRegister.email || userRegister.password) {
    setMessage('Preencha todos os campos')
  }
 try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(userRegister.email, userRegister.password);
    history.push('/home')
  } catch (err) {
    setUserInvalid(true);
    console.log(err)
    setMessage(err.message.replace("Firebase: ", ""));
  }
}

  return (
    <div className="page-login">
      <Box component="form" className="box-login">
        <img src={logoTaugor} alt="logo-taugor"></img>
        <TextField onChange={handleInputChange} name='email' id="email-login" label="Email" type="email" />
        <TextField onChange={handleInputChange} name='password' id="password-login" label="Password" type="password" />
        <Button onClick={registerUser} variant="contained">Register</Button>
        {userInvalid ? (
          <div className="msg-error">
            <h4> {message} </h4>
          </div>
        ) : null}
        <p> © Desenvolvido por Gustavo Reis</p>
      </Box>
    </div>
  );
}
