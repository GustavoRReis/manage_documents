import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import './Login.css';
import logoTaugor from '../../images/logo-taugor.png';

export default function Login() {
  return (
    <div className="page-login">
      <Box component="form" className="box-login">
        <img src={logoTaugor} alt="logo-taugor"></img>
        <TextField id="email-login" label="Email" type="email" />
        <TextField id="password-login" label="Password" type="password" />
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Register</Button>
        <p> © Desenvolvido por Gustavo Reis</p>
      </Box>
    </div>
  );
}
